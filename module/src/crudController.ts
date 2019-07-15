"use strict";
import {Controller, inject, IResponse, IRequest, params, abstract, model, query, middleware} from 'appolo';
import {validate} from '@appolo/validator';
import {ILogger} from "@appolo/logger";
import {IBaseCrudManager} from "./interfaces";
import {GetByIdModel, GetAllModel, ActiveByIdModel} from "./routeModels";
import bodyParser = require('body-parser');


export abstract class CrudController<T> extends Controller {

    protected abstract manager: IBaseCrudManager<T>;

    public async getAll(@validate() @model() model: GetAllModel<T>,...rest:any[]):Promise<{ count: number, results: T[] }> {

        const data = await this.manager.getAll(model);

        return data;
    }

    public async getById(@params("id") id: string,@validate() @model() model: GetByIdModel<T>,...rest:any[]):Promise<T> {

        const doc = await this.manager.getById(id, model);
        return doc;
    }

    @middleware(bodyParser.json())
    public async create(@model() model: Partial<T>,...rest:any[]):Promise<T> {

        let doc = await this.manager.create(model);

        return doc;
    }

    @middleware(bodyParser.json())
    public async updateById(@params("id") id: string, @model() model: Partial<T>,...rest:any[]):Promise<T> {

        const doc = await this.manager.updateById(id, model);

        return doc;
    }

    public async deleteById(@params("id") id: string) {

        await this.manager.deleteById(id);

        return;
    }


    public async activeById(@params("id") id: string, @validate() @model() model: ActiveByIdModel,...rest:any[]):Promise<T> {

        const data = await this.manager.updateById(id, {isActive: model.isActive} as any);

        return data;
    }


}
