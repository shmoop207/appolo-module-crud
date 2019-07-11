"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routeModels_1 = require("./routeModels");
const appolo_1 = require("appolo");
exports.CrudRoutesDefaults = {
    getAll: {
        active: true,
        method: appolo_1.Methods.GET,
        validation: [routeModels_1.GetAllModel],
        middleware: [],
        roles: [],
        path: "/"
    }, getById: {
        method: appolo_1.Methods.GET,
        active: true,
        middleware: [],
        roles: [],
        path: "/:id"
    },
    create: {
        method: appolo_1.Methods.POST,
        active: true,
        path: "/",
        validation: [],
        middleware: [],
        roles: [],
    },
    updateById: {
        method: appolo_1.Methods.PATCH,
        active: true,
        path: "/:id",
        validation: [],
        middleware: [],
        roles: [],
    },
    deleteById: {
        method: appolo_1.Methods.DELETE,
        active: true,
        path: "/:id",
        middleware: [],
        roles: [],
    }, activeById: {
        method: appolo_1.Methods.PATCH,
        active: true,
        path: "/:id/active",
        middleware: [],
        roles: [],
    }
};
//# sourceMappingURL=defaults.js.map