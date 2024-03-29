"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicAuthMiddleware = exports.ValidateGroups = exports.ActiveByIdModel = exports.GetAllModel = exports.CrudModule = exports.CrudController = exports.GetByIdModel = exports.crud = exports.IdModel = void 0;
const decorator_1 = require("./module/src/decorator");
Object.defineProperty(exports, "crud", { enumerable: true, get: function () { return decorator_1.crud; } });
const crudModule_1 = require("./module/crudModule");
Object.defineProperty(exports, "CrudModule", { enumerable: true, get: function () { return crudModule_1.CrudModule; } });
const crudController_1 = require("./module/src/crudController");
Object.defineProperty(exports, "CrudController", { enumerable: true, get: function () { return crudController_1.CrudController; } });
const basicAuthMiddleware_1 = require("./module/src/middlewares/basicAuthMiddleware");
Object.defineProperty(exports, "BasicAuthMiddleware", { enumerable: true, get: function () { return basicAuthMiddleware_1.BasicAuthMiddleware; } });
const interfaces_1 = require("./module/src/interfaces");
Object.defineProperty(exports, "ValidateGroups", { enumerable: true, get: function () { return interfaces_1.ValidateGroups; } });
const routeModels_1 = require("./module/src/routeModels");
Object.defineProperty(exports, "GetByIdModel", { enumerable: true, get: function () { return routeModels_1.GetByIdModel; } });
Object.defineProperty(exports, "GetAllModel", { enumerable: true, get: function () { return routeModels_1.GetAllModel; } });
Object.defineProperty(exports, "ActiveByIdModel", { enumerable: true, get: function () { return routeModels_1.ActiveByIdModel; } });
Object.defineProperty(exports, "IdModel", { enumerable: true, get: function () { return routeModels_1.IdModel; } });
//# sourceMappingURL=index.js.map