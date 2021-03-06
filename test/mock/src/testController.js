"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const index_1 = require("../../../index");
const test_1 = require("./test");
const baseController_1 = require("./baseController");
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
};
TestController = tslib_1.__decorate([
    route_1.controller("/test"),
    index_1.crud({ model: test_1.Test }),
    route_1.roles(["admin"])
], TestController);
exports.TestController = TestController;
//# sourceMappingURL=testController.js.map