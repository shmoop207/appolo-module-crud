"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const decorator_1 = require("./module/src/decorator");
exports.model = decorator_1.model;
exports.injectModel = decorator_1.injectModel;
const crudModule_1 = require("./module/crudModule");
exports.CrudModule = crudModule_1.CrudModule;
const modelRepository_1 = require("./module/src/modelRepository");
exports.ModelRepository = modelRepository_1.ModelRepository;
tslib_1.__exportStar(require("typeorm"), exports);
//# sourceMappingURL=index.js.map