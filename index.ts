"use strict";
import {crud} from "./module/src/decorator";
import {CrudModule} from "./module/crudModule";
import {CrudController} from "./module/src/crudController";
import {IOptions, IBaseCrudManager, CrudRoutes} from "./module/src/interfaces";


export {
    IOptions,
    crud,
    CrudController,
    CrudModule, IBaseCrudManager, CrudRoutes
}
