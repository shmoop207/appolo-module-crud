import {GetAllModel, GetByIdModel,ActiveByIdModel} from "./routeModels";
import {CrudRoutes} from "./interfaces";
import {Methods} from '@appolo/route';

export let CrudRoutesDefaults = <CrudRoutes>{
    getAll: {
        active: true,
        method: Methods.GET,
        validation: [GetAllModel],
        middleware: [],
        roles: [],
        path: "/"
    }, getById: {
        method: Methods.GET,
        active: true,
        middleware: [],
        roles: [],
        path: "/:id"
    },
    create: {
        method: Methods.POST,
        active: true,
        path: "/",
        validation: [],
        middleware: [],
        roles: [],
    },
    updateById: {
        method: Methods.PATCH,
        active: true,
        path: "/:id",
        validation: [],
        middleware: [],
        roles: [],
    },
    deleteById: {
        method: Methods.DELETE,
        active: true,
        path: "/:id",
        middleware: [],
        roles: [],
    }, activeById: {
        method: Methods.PATCH,
        active: true,
        path: "/:id/active",
        middleware: [],
        roles: [],
    }
}
