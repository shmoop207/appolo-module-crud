"use strict";
import {inject, controller, IRequest, IResponse, get,roles} from 'appolo';
import {crud, CrudController,GetByIdModel} from '../../../index';
import {TestManager} from "./testManager";
import {Test} from "./test";



export class BaseController extends CrudController<Test> {
    @inject(TestManager) manager: TestManager

    // async getById(id: string, model: GetByIdModel<Test>): Promise< Test> {
    //     return super.getById(id, model);
    // }
}



