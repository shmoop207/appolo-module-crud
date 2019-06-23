"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const validation_1 = require("@appolo/validation");
class GetAllModel {
}
tslib_1.__decorate([
    validation_1.param(validation_1.joi.number().optional())
], GetAllModel.prototype, "page", void 0);
tslib_1.__decorate([
    validation_1.param(validation_1.joi.number().optional())
], GetAllModel.prototype, "pageSize", void 0);
tslib_1.__decorate([
    validation_1.param(validation_1.joi.object().optional())
], GetAllModel.prototype, "sort", void 0);
tslib_1.__decorate([
    validation_1.param(validation_1.joi.object().optional())
], GetAllModel.prototype, "filter", void 0);
tslib_1.__decorate([
    validation_1.param(validation_1.joi.object().optional())
], GetAllModel.prototype, "fields", void 0);
tslib_1.__decorate([
    validation_1.param(validation_1.joi.array().items(appolo_1.validator.object()).optional())
], GetAllModel.prototype, "populate", void 0);
exports.GetAllModel = GetAllModel;
class GetOneModel {
}
tslib_1.__decorate([
    validation_1.param(validation_1.joi.string().required())
], GetOneModel.prototype, "id", void 0);
tslib_1.__decorate([
    validation_1.param(validation_1.joi.object().optional())
], GetOneModel.prototype, "fields", void 0);
tslib_1.__decorate([
    validation_1.param(validation_1.joi.array().items(appolo_1.validator.object()).optional())
], GetOneModel.prototype, "populate", void 0);
exports.GetOneModel = GetOneModel;
class IsActiveModel {
}
tslib_1.__decorate([
    validation_1.param(validation_1.joi.boolean().required())
], IsActiveModel.prototype, "isActive", void 0);
exports.IsActiveModel = IsActiveModel;
//# sourceMappingURL=routeModels.js.map