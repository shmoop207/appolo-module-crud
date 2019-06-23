"use strict";
import {model, injectModel} from "./module/src/decorator";
import {CrudModule} from "./module/crudModule";
import {ModelRepository} from "./module/src/modelRepository";
import {IOptions} from "./module/src/interfaces";

export * from 'typeorm';

export {
    IOptions,
    ModelRepository,
    injectModel,
    model,
    CrudModule
}
