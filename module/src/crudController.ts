"use strict";

import {Controller, inject, IResponse, IRequest} from 'appolo';
import {GetAllModel, GetOneModel, IsActiveModel} from "./routeModels";
import {ILogger} from "@appolo/logger";
import {IBaseCrudManager} from "./interfaces";


export abstract class CrudController<T> extends Controller {

    protected abstract manager: IBaseCrudManager<T>;

    @inject() logger: ILogger;

    public async getAll(req: IRequest, res: IResponse, model: GetAllModel<T>) {

        const data = await this.manager.getAll(model);

        return data;
    }

    public async getById(req: IRequest, res: IResponse, model: GetOneModel<T>) {

        const doc = await this.manager.getById(req.model.id, model);

        return doc;
    }

    public async create(req: IRequest, res: IResponse, model: Partial<T>) {

        let doc = await this.manager.create(model);

        return doc;
    }

    public async updateById(req: IRequest, res: IResponse, model: Partial<T>) {

        const doc = await this.manager.updateById(req.params.id, model);

        return doc;
    }


    public async deleteById(req: IRequest, res: IResponse) {

        await this.manager.deleteById(req.params.id);

        return;
    }


    public async activeById(req: IRequest, res: IResponse, model: IsActiveModel) {

        const data = await this.manager.updateById(req.params.id, {isActive: model.isActive} as any );

        return data;
    }


}
