"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appolo_1 = require("appolo");
const validator_1 = require("@appolo/validator");
const chai = require("chai");
const chaiHttp = require("chai-http");
const request = require("supertest");
const sinonChai = require("sinon-chai");
const __1 = require("../");
require('chai').should();
chai.use(sinonChai);
chai.use(chaiHttp);
let app;
describe("crud module Spec", function () {
    before(async () => {
        app = appolo_1.createApp({ environment: "production", port: 8181, root: process.cwd() + '/test/mock/' });
        await app.module(new __1.CrudModule());
        await app.module(new validator_1.ValidationModule());
        await app.launch();
    });
    // afterEach(async () => {
    //     await app.reset();
    // });
    it("should get test by id", async () => {
        let res = await request(app.handle)
            .get('/test/1234');
        res.should.to.have.status(200);
        res.should.to.be.json;
        res.body.id.should.to.be.eq("1234");
    });
    it("should not get test by id invalid params", async () => {
        let res = await request(app.handle)
            .get('/test/1234').query({ "populate[]": { "aaa": 1 } });
        res.should.to.have.status(200);
        res = await request(app.handle)
            .get('/test/1234').query({ "populate": { "aaa": 1 } });
        res.should.to.have.status(400);
        let res2 = await request(app.handle)
            .get('/test').query({ "populate[]": [{ path: "aaa" }] });
        res2.should.to.have.status(200);
    });
    it("should create invalid", async () => {
        let res = await request(app.handle)
            .post('/test').send({});
        res.should.to.have.status(400);
    });
    it("should create valid", async () => {
        let res = await request(app.handle)
            .post('/test').send({ name: "11" });
        res.should.to.have.status(200);
        res.body.name.should.be.eq("11");
        res.body.id.should.be.eq("1");
    });
});
//# sourceMappingURL=spec.js.map