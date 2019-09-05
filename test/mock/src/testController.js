"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const index_1 = require("../../../index");
const test_1 = require("./test");
const baseController_1 = require("./baseController");
let TestController = class TestController extends baseController_1.BaseController {
    async getById(id, model) {
        return super.getById(id, model);
    }
};
TestController = tslib_1.__decorate([
    appolo_1.controller("/test"),
    index_1.crud({ model: test_1.Test }),
    appolo_1.roles(["admin"])
], TestController);
exports.TestController = TestController;
//# sourceMappingURL=testController.js.map