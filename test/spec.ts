import {App, createApp, Util} from 'appolo'
import {ValidationModule} from '@appolo/validator'
import chai = require('chai');
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

        app = createApp({ environment: "production", port: 8181, root: process.cwd() + '/test/mock/'});

        await app.module(new CrudModule());
        await app.module(new ValidationModule());

        await app.launch();

    });

    afterEach(async () => {
        await app.reset();
    });

    it("should get test by id", async () => {

        let res = await request(app.handle)
            .get('/test/1234');

        res.should.to.have.status(200);

        res.should.to.be.json;
        res.body.doc.id.should.to.be.eq("1234");
    });

    it("should not get test by id invalid params", async () => {

        let res = await request(app.handle)
            .get('/test/1234').query({"populate":"aaa"});

        res.should.to.have.status(400);

    });

    it.only("should create invalid", async () => {

        let res = await request(app.handle)
            .post('/test').send({});

        res.should.to.have.status(400);

    });

    it("should create valid", async () => {

        let res = await request(app.handle)
            .post('/test').send({name:"11"});

        res.should.to.have.status(200);
        res.body.name.should.be.eq("11");
        res.body.id.should.be.eq("1");

    })
})
