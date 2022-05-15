"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestManager = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const test_1 = require("./test");
let TestManager = class TestManager {
    async getById(id, params) {
        let test = new test_1.Test();
        test.id = id;
        return test;
    }
    async getAll(params) {
        return { count: 1, results: [{ "id": "1", name: "aa", isActive: true }] };
    }
    async create(data) {
        return Object.assign({}, data);
    }
    async updateById(id, data) {
        return Object.assign(Object.assign({}, data), { id: id });
    }
    async deleteById(id) {
    }
};
TestManager = tslib_1.__decorate([
    (0, inject_1.define)(),
    (0, inject_1.singleton)()
], TestManager);
exports.TestManager = TestManager;
//# sourceMappingURL=testManager.js.map