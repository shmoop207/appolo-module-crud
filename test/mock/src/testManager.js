"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const test_1 = require("./test");
let TestManager = class TestManager {
    async getById(id, params) {
        let test = new test_1.Test();
        test.id = id;
        return test;
    }
    async getAll(params) {
        return { count: 1, results: [{ "id": "1", name: "aa" }] };
    }
    async create(data) {
        return Object.assign(Object.assign({}, data), { id: "1" });
    }
    async updateById(id, data) {
        return Object.assign(Object.assign({}, data), { id: id });
    }
    async deleteById(id) {
    }
};
TestManager = tslib_1.__decorate([
    appolo_1.define(),
    appolo_1.singleton()
], TestManager);
exports.TestManager = TestManager;
//# sourceMappingURL=testManager.js.map