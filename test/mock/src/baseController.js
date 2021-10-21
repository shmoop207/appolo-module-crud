"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const index_1 = require("../../../index");
const testManager_1 = require("./testManager");
class BaseController extends index_1.CrudController {
}
(0, tslib_1.__decorate)([
    (0, inject_1.inject)(testManager_1.TestManager),
    (0, tslib_1.__metadata)("design:type", testManager_1.TestManager
    // async getById(id: string, model: GetByIdModel<Test>): Promise< Test> {
    //     return super.getById(id, model);
    // }
    )
], BaseController.prototype, "manager", void 0);
exports.BaseController = BaseController;
//# sourceMappingURL=baseController.js.map