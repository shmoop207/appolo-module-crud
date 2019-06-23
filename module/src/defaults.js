"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routeModels_1 = require("./routeModels");
exports.CrudRoutesDefaults = {
    getAll: {
        active: true,
        method: 'get',
        validation: [routeModels_1.GetAllModel],
        middleware: [],
        roles: [],
        path: "/"
    }, getById: {
        method: 'get',
        active: true,
        validation: [routeModels_1.GetOneModel],
        middleware: [],
        roles: [],
        path: "/:id"
    },
    create: {
        method: 'post',
        active: true,
        path: "/",
        validation: [],
        middleware: [],
        roles: [],
    },
    updateById: {
        method: "patch",
        active: true,
        path: "/:id",
        validation: [],
        middleware: [],
        roles: [],
    },
    deleteById: {
        method: "del",
        active: true,
        path: "/:id",
        validation: [],
        middleware: [],
        roles: [],
    }, activeById: {
        method: "patch",
        active: true,
        path: "/:id/active",
        validation: [routeModels_1.IsActiveModel],
        middleware: [],
        roles: [],
    }
};
//# sourceMappingURL=defaults.js.map