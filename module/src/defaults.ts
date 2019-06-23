import {GetAllModel, GetOneModel, IsActiveModel} from "./routeModels";

export let CrudRoutesDefaults = {
    getAll: {
        active: true,
        method: 'get',
        validation: [GetAllModel],
        middleware: [],
        roles: [],
        path: "/"
    }, getById: {
        method: 'get',
        active: true,
        validation: [GetOneModel],
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
        validation: [IsActiveModel],
        middleware: [],
        roles: [],
    }
}
