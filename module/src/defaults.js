"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudRoutesDefaults = void 0;
const routeModels_1 = require("./routeModels");
const route_1 = require("@appolo/route");
exports.CrudRoutesDefaults = {
    getAll: {
        active: true,
        method: route_1.Methods.GET,
        validation: [routeModels_1.GetAllModel],
        middleware: [],
        roles: [],
        path: "/"
    }, getById: {
        method: route_1.Methods.GET,
        active: true,
        middleware: [],
        roles: [],
        path: "/:id"
    },
    create: {
        method: route_1.Methods.POST,
        active: true,
        path: "/",
        validation: [],
        middleware: [],
        roles: [],
    },
    updateById: {
        method: route_1.Methods.PATCH,
        active: true,
        path: "/:id",
        validation: [],
        middleware: [],
        roles: [],
    },
    deleteById: {
        method: route_1.Methods.DELETE,
        active: true,
        path: "/:id",
        middleware: [],
        roles: [],
    }, activeById: {
        method: route_1.Methods.PATCH,
        active: true,
        path: "/:id/active",
        middleware: [],
        roles: [],
    }
};
//# sourceMappingURL=defaults.js.map