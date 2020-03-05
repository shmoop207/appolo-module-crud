"use strict";
import {inject, controller, IRequest, IResponse, get,roles} from 'appolo';
import {crud, CrudController, GetAllModel, GetByIdModel} from '../../../index';
import {TestManager} from "./testManager";
import {Test} from "./test";
import {BaseController} from "./baseController";
import {validate} from "@appolo/validator/index";


@controller("/test")
@crud({model: Test})
@roles(["admin"])
export class TestController extends BaseController {

    // public async getAll( model: GetAllModel<any>,...rest:any[]):Promise<{ count: number, results: any[] }> {
    //
    //     const data = await this.manager.getAll(model);
    //
    //     return data;
    // }

    async getById(id: string, model: GetByIdModel<Test>): Promise< Test> {
        return super.getById(id, model);
    }
}



