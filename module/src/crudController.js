"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
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
        const doc = await this.manager.updateById(req.params.id, model);
        return doc;
    }
    async deleteById(req, res) {
        await this.manager.deleteById(req.params.id);
        return;
    }
    async activeById(req, res, model) {
        const data = await this.manager.updateById(req.params.id, { isActive: model.isActive });
        return data;
    }
}
tslib_1.__decorate([
    appolo_1.inject()
], CrudController.prototype, "logger", void 0);
exports.CrudController = CrudController;
//# sourceMappingURL=crudController.js.map