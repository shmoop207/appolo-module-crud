"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const validator_1 = require("@appolo/validator");
// import {validator} from 'appolo';
// import {param, joi} from '@appolo/validation';
// import {CrudItemParams} from "./interfaces";
//
class GetAllModel {
}
tslib_1.__decorate([
    validator_1.IsNumber(),
    validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], GetAllModel.prototype, "page", void 0);
tslib_1.__decorate([
    validator_1.IsNumber(),
    validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], GetAllModel.prototype, "pageSize", void 0);
tslib_1.__decorate([
    validator_1.IsOptional(),
    validator_1.IsObject(),
    tslib_1.__metadata("design:type", Object)
], GetAllModel.prototype, "sort", void 0);
tslib_1.__decorate([
    validator_1.IsOptional(),
    validator_1.IsObject(),
    tslib_1.__metadata("design:type", Object)
], GetAllModel.prototype, "filter", void 0);
tslib_1.__decorate([
    validator_1.IsOptional(),
    validator_1.IsObject(),
    tslib_1.__metadata("design:type", Object)
], GetAllModel.prototype, "fields", void 0);
tslib_1.__decorate([
    validator_1.IsOptional(),
    validator_1.IsArray(),
    validator_1.IsObject({ each: true }),
    tslib_1.__metadata("design:type", Array)
], GetAllModel.prototype, "populate", void 0);
tslib_1.__decorate([
    validator_1.IsOptional(),
    validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], GetAllModel.prototype, "lean", void 0);
exports.GetAllModel = GetAllModel;
class GetByIdModel {
}
tslib_1.__decorate([
    validator_1.IsOptional(),
    validator_1.IsObject(),
    tslib_1.__metadata("design:type", Object)
], GetByIdModel.prototype, "fields", void 0);
tslib_1.__decorate([
    validator_1.IsOptional(),
    validator_1.IsArray(),
    validator_1.IsObject({ each: true }),
    tslib_1.__metadata("design:type", Array)
], GetByIdModel.prototype, "populate", void 0);
tslib_1.__decorate([
    validator_1.IsOptional(),
    validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], GetByIdModel.prototype, "lean", void 0);
exports.GetByIdModel = GetByIdModel;
class ActiveByIdModel {
}
tslib_1.__decorate([
    validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], ActiveByIdModel.prototype, "isActive", void 0);
exports.ActiveByIdModel = ActiveByIdModel;
//# sourceMappingURL=routeModels.js.map