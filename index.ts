"use strict";
import {crud} from "./module/src/decorator";
import {CrudModule} from "./module/crudModule";
import {CrudController} from "./module/src/crudController";
import {IOptions, IBaseCrudManager, CrudRoutes,ValidateGroups} from "./module/src/interfaces";
import {GetByIdModel, GetAllModel, ActiveByIdModel} from "./module/src/routeModels";


export {
    IOptions,
    crud,
    GetByIdModel,
    CrudController,
    CrudModule, IBaseCrudManager, CrudRoutes, GetAllModel, ActiveByIdModel,ValidateGroups
}
