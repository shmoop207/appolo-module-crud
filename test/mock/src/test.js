"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const tslib_1 = require("tslib");
const appolo_validator_1 = require("appolo-validator");
const interfaces_1 = require("../../../module/src/interfaces");
class Test {
}
(0, tslib_1.__decorate)([
    (0, appolo_validator_1.string)().optional().groups([interfaces_1.ValidateGroups.Update]),
    (0, tslib_1.__metadata)("design:type", String)
], Test.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, appolo_validator_1.string)().optional(),
    (0, tslib_1.__metadata)("design:type", String)
], Test.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, appolo_validator_1.boolean)().required().groups([interfaces_1.ValidateGroups.Update]),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Test.prototype, "isActive", void 0);
exports.Test = Test;
//# sourceMappingURL=test.js.map