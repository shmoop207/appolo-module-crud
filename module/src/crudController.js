"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const validator_1 = require("@appolo/validator");
const routeModels_1 = require("./routeModels");
const bodyParser = require("body-parser");
class CrudController extends appolo_1.Controller {
    async getAll(model, ...rest) {
        const data = await this.manager.getAll(model);
        return data;
    }
    async getById(id, model, ...rest) {
        const doc = await this.manager.getById(id, model);
        return doc;
    }
    async create(model, ...rest) {
        let doc = await this.manager.create(model);
        return doc;
    }
    async updateById(id, model, ...rest) {
        const doc = await this.manager.updateById(id, model);
        return doc;
    }
    async deleteById(id) {
        await this.manager.deleteById(id);
        return;
    }
    async activeById(id, model, ...rest) {
        const data = await this.manager.updateById(id, { isActive: model.isActive });
        return data;
    }
}
tslib_1.__decorate([
    tslib_1.__param(0, validator_1.validate()), tslib_1.__param(0, appolo_1.model()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [routeModels_1.GetAllModel, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CrudController.prototype, "getAll", null);
tslib_1.__decorate([
    tslib_1.__param(0, appolo_1.params("id")), tslib_1.__param(1, validator_1.validate()), tslib_1.__param(1, appolo_1.model()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, routeModels_1.GetByIdModel, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CrudController.prototype, "getById", null);
tslib_1.__decorate([
    appolo_1.middleware(bodyParser.json()),
    tslib_1.__param(0, appolo_1.model()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CrudController.prototype, "create", null);
tslib_1.__decorate([
    appolo_1.middleware(bodyParser.json()),
    tslib_1.__param(0, appolo_1.params("id")), tslib_1.__param(1, appolo_1.model()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CrudController.prototype, "updateById", null);
tslib_1.__decorate([
    tslib_1.__param(0, appolo_1.params("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CrudController.prototype, "deleteById", null);
tslib_1.__decorate([
    tslib_1.__param(0, appolo_1.params("id")), tslib_1.__param(1, validator_1.validate()), tslib_1.__param(1, appolo_1.model()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, routeModels_1.ActiveByIdModel, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CrudController.prototype, "activeById", null);
exports.CrudController = CrudController;
//# sourceMappingURL=crudController.js.map