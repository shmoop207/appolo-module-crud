"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveByIdModel = exports.GetByIdModel = exports.IdModel = exports.GetAllModel = void 0;
const tslib_1 = require("tslib");
const validator_1 = require("@appolo/validator");
class GetAllModel {
}
(0, tslib_1.__decorate)([
    (0, validator_1.number)().optional(),
    (0, tslib_1.__metadata)("design:type", Number)
], GetAllModel.prototype, "page", void 0);
(0, tslib_1.__decorate)([
    (0, validator_1.number)().optional(),
    (0, tslib_1.__metadata)("design:type", Number)
], GetAllModel.prototype, "pageSize", void 0);
(0, tslib_1.__decorate)([
    (0, validator_1.object)().optional(),
    (0, tslib_1.__metadata)("design:type", Object)
], GetAllModel.prototype, "sort", void 0);
(0, tslib_1.__decorate)([
    (0, validator_1.object)().optional(),
    (0, tslib_1.__metadata)("design:type", Object)
], GetAllModel.prototype, "filter", void 0);
(0, tslib_1.__decorate)([
    (0, validator_1.object)().optional(),
    (0, tslib_1.__metadata)("design:type", Object)
], GetAllModel.prototype, "fields", void 0);
(0, tslib_1.__decorate)([
    (0, validator_1.array)().optional().items((0, validator_1.object)()),
    (0, tslib_1.__metadata)("design:type", Array)
], GetAllModel.prototype, "populate", void 0);
(0, tslib_1.__decorate)([
    (0, validator_1.boolean)().optional(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], GetAllModel.prototype, "lean", void 0);
exports.GetAllModel = GetAllModel;
class IdModel {
}
(0, tslib_1.__decorate)([
    (0, validator_1.string)().optional(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], IdModel.prototype, "id", void 0);
exports.IdModel = IdModel;
class GetByIdModel {
}
(0, tslib_1.__decorate)([
    (0, validator_1.object)().optional(),
    (0, tslib_1.__metadata)("design:type", Object)
], GetByIdModel.prototype, "fields", void 0);
(0, tslib_1.__decorate)([
    (0, validator_1.array)().optional().items((0, validator_1.object)()),
    (0, tslib_1.__metadata)("design:type", Array)
], GetByIdModel.prototype, "populate", void 0);
(0, tslib_1.__decorate)([
    (0, validator_1.boolean)().optional(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], GetByIdModel.prototype, "lean", void 0);
exports.GetByIdModel = GetByIdModel;
class ActiveByIdModel {
}
(0, tslib_1.__decorate)([
    (0, validator_1.boolean)().optional(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ActiveByIdModel.prototype, "isActive", void 0);
exports.ActiveByIdModel = ActiveByIdModel;
//# sourceMappingURL=routeModels.js.map