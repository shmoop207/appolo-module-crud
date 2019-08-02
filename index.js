"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_1 = require("./module/src/decorator");
exports.crud = decorator_1.crud;
const crudModule_1 = require("./module/crudModule");
exports.CrudModule = crudModule_1.CrudModule;
const crudController_1 = require("./module/src/crudController");
exports.CrudController = crudController_1.CrudController;
const interfaces_1 = require("./module/src/interfaces");
exports.ValidateGroups = interfaces_1.ValidateGroups;
const routeModels_1 = require("./module/src/routeModels");
exports.GetByIdModel = routeModels_1.GetByIdModel;
exports.GetAllModel = routeModels_1.GetAllModel;
exports.ActiveByIdModel = routeModels_1.ActiveByIdModel;
//# sourceMappingURL=index.js.map