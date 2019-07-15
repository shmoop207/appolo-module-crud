"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const validator_1 = require("@appolo/validator");
const interfaces_1 = require("../../../module/src/interfaces");
class Test {
}
tslib_1.__decorate([
    validator_1.IsString(),
    validator_1.IsOptional({ groups: [interfaces_1.ValidateGroups.Create] }),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "id", void 0);
tslib_1.__decorate([
    validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "name", void 0);
exports.Test = Test;
//# sourceMappingURL=test.js.map