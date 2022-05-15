"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const index_1 = require("../../../index");
const test_1 = require("./test");
const baseController_1 = require("./baseController");
const testBasicAuthMiddleware_1 = require("./testBasicAuthMiddleware");
let TestController = class TestController extends baseController_1.BaseController {
    // public async getAll( model: GetAllModel<any>,...rest:any[]):Promise<{ count: number, results: any[] }> {
    //
    //     const data = await this.manager.getAll(model);
    //
    //     return data;
    // }
    async getById(id, model) {
        return super.getById(id, model);
    }
    async basicAuthTest() {
        return "working";
    }
};
(0, tslib_1.__decorate)([
    (0, route_1.middleware)(testBasicAuthMiddleware_1.TestBasicAuthMiddleware),
    (0, route_1.get)("basic_auth"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TestController.prototype, "basicAuthTest", null);
TestController = (0, tslib_1.__decorate)([
    (0, route_1.controller)("/test"),
    (0, index_1.crud)({ model: test_1.Test }),
    (0, route_1.roles)(["admin"])
], TestController);
exports.TestController = TestController;
//# sourceMappingURL=testController.js.map