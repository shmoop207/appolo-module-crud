"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const getAllModel_1 = require("./getAllModel");
const validation_1 = require("@appolo/validation");
class CrudController extends appolo_1.Controller {
    async getAll(req, res, model) {
        const data = await this.manager.getAll(model);
        return data;
    }
    async getById(req, res, model) {
        const doc = await this.manager.getById(req.model.id, model);
        return doc;
    }
    async create(req, res, model) {
        let doc = await this.manager.create(model);
        return doc;
    }
    async updateById(req, res, model) {
        const doc = await this.manager.updateById(req.model.id, model);
        return doc;
    }
    async deleteById(req, res) {
        await this.manager.deleteById(req.model.id);
        return;
    }
    async activeById(req, res, model) {
        const data = await this.manager.updateById(req.model.id, model);
        return data;
    }
}
tslib_1.__decorate([
    appolo_1.inject()
], CrudController.prototype, "logger", void 0);
tslib_1.__decorate([
    appolo_1.get("/"),
    validation_1.param(getAllModel_1.GetAllModel)
], CrudController.prototype, "getAll", null);
tslib_1.__decorate([
    appolo_1.get("/:id"),
    validation_1.param(getAllModel_1.GetOneModel)
], CrudController.prototype, "getById", null);
tslib_1.__decorate([
    appolo_1.post("/")
], CrudController.prototype, "create", null);
tslib_1.__decorate([
    appolo_1.patch("/:id")
], CrudController.prototype, "updateById", null);
tslib_1.__decorate([
    appolo_1.del("/:id"),
    validation_1.param({
        id: validation_1.joi.string().required()
    })
], CrudController.prototype, "deleteById", null);
tslib_1.__decorate([
    appolo_1.patch("/:id/active"),
    validation_1.param({
        id: validation_1.joi.string().required(),
        isActive: validation_1.joi.boolean().required()
    })
], CrudController.prototype, "activeById", null);
exports.CrudController = CrudController;
//# sourceMappingURL=baseController.js.map