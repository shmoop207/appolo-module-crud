"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const index_1 = require("../../../index");
const testManager_1 = require("./testManager");
const test_1 = require("./test");
let TestController = class TestController extends index_1.CrudController {
    async getById(id, model) {
        return super.getById(id, model);
    }
};
tslib_1.__decorate([
    appolo_1.inject(testManager_1.TestManager),
    tslib_1.__metadata("design:type", testManager_1.TestManager)
], TestController.prototype, "manager", void 0);
TestController = tslib_1.__decorate([
    appolo_1.controller("/test"),
    index_1.crud({ model: test_1.Test })
], TestController);
exports.TestController = TestController;
//# sourceMappingURL=testController.js.map