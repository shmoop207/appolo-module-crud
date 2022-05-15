"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestBasicAuthMiddleware = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const basicAuthMiddleware_1 = require("../../../module/src/middlewares/basicAuthMiddleware");
let TestBasicAuthMiddleware = class TestBasicAuthMiddleware extends basicAuthMiddleware_1.BasicAuthMiddleware {
    async isValidAuth(auth) {
        return (auth.user == "test" && auth.password == "reporting");
    }
};
TestBasicAuthMiddleware = tslib_1.__decorate([
    (0, inject_1.define)(),
    (0, inject_1.singleton)()
], TestBasicAuthMiddleware);
exports.TestBasicAuthMiddleware = TestBasicAuthMiddleware;
//# sourceMappingURL=testBasicAuthMiddleware.js.map