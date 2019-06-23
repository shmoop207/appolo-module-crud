import {GetAllModel, GetOneModel, IsActiveModel} from "./routeModels";
import {CrudRoutes} from "./interfaces";
import {Methods} from 'appolo';

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
        validation: [GetOneModel],
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
        validation: [],
        middleware: [],
        roles: [],
    }, activeById: {
        method: Methods.PATCH,
        active: true,
        path: "/:id/active",
        validation: [IsActiveModel],
        middleware: [],
        roles: [],
    }
}
