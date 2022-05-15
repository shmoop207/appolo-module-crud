"use strict";
import {crud} from "./module/src/decorator";
import {CrudModule} from "./module/crudModule";
import {CrudController} from "./module/src/crudController";
import {BasicAuthMiddleware} from "./module/src/middlewares/basicAuthMiddleware";
import {IOptions, IBaseCrudManager, CrudRoutes, ValidateGroups} from "./module/src/interfaces";
import {GetByIdModel, GetAllModel, ActiveByIdModel, IdModel} from "./module/src/routeModels";


export {
    IOptions,
    IdModel,
    crud,
    GetByIdModel,
    CrudController,
    CrudModule, IBaseCrudManager, CrudRoutes, GetAllModel, ActiveByIdModel, ValidateGroups,BasicAuthMiddleware
}
