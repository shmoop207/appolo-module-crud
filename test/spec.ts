import {App, createApp} from '@appolo/core'
import {Promises} from '@appolo/utils'
import {ValidationModule} from '@appolo/validator'
import chai = require('chai');
import qs = require('qs');
import chaiHttp = require("chai-http");
import * as request from 'supertest';
import sinonChai = require("sinon-chai");
import {CrudModule} from "../"

require('chai').should();
chai.use(sinonChai);
chai.use(chaiHttp);

let app: App;
describe("crud module Spec", function () {

    beforeEach(async () => {

        app = createApp({
            qsParser: qs.parse,
            environment: "production",
            port: 8181,
            root: process.cwd() + '/test/mock/'
        });

        app.module.use(CrudModule).use(ValidationModule);

        await app.launch();

        await Promises.delay(1000000)

    });

    afterEach(async () => {
        await app.reset();
    });

    it("should get test by id", async () => {

        let res = await request(app.route.handle)
            .get('/test/1234');

        res.should.to.have.status(200);

        res.should.to.be.json;
        res.body.id.should.to.be.eq("1234");
    });

    it("should not get test by id invalid params", async () => {

        let res = await request(app.route.handle)
            .get('/test/1234').query({"populate[]": {"aaa": 1}});

        res.should.to.have.status(200);

        res = await request(app.route.handle)
            .get('/test/1234').query({"populate": {"aaa": 1}});

        res.should.to.have.status(400);

        let res2 = await request(app.route.handle)
            .get('/test?page=1&pageSize=2&fields%5Btitle%5D=1&fields%5Bslug%5D=1&fields%5Bcreated%5D=1&fields%5BisActive%5D=1&fields%5Bdraft%5D=1&fields%5Bfacade%5D=1&fields%5Bsites%5D=1&populate%5B%5D%5B%5D%5Bpath%5D=sites&populate%5B%5D%5B%5D%5Bselect%5D%5Bname%5D=1');

        res2.should.to.have.status(200);

    });


    it("should create valid", async () => {

        let res = await request(app.route.handle)
            .post('/test').send({name: "11", id: true});

        res.should.to.have.status(200);
        res.body.should.be.deep.equal({name: "11"});

        res = await request(app.route.handle)
            .post('/test').send({name: true, id: true});

        res.should.to.have.status(400);
    });

    it("should update valid", async () => {

        let res = await request(app.route.handle)
            .patch('/test/1234').send({name: "11", isActive: true});

        res.should.to.have.status(200);
        res.body.should.be.deep.equal({name: "11", id: "1234", isActive: true});

        res = await request(app.route.handle)
            .patch('/test/1234').send({name: "11", isActive: 111});

        res.should.to.have.status(400);
    })

    it.only("should allow basic auth", async () => {

        let res = await request(app.route.handle)
            .get('/test/basic_auth').set("Authorization","Basic dGVzdDpyZXBvcnRpbmc=");

        res.should.to.have.status(200);

    })

    it("should block basic auth", async () => {

        let res = await request(app.route.handle)
            .get('/test/basic_auth').set("Authorization","Basic dGVzdDpyZXBvcnRpbmc2=");

        res.should.to.have.status(401);

    })


})
