"use strict";

import {Controller, del, get, inject, IResponse, IRequest, patch, post, roles} from 'appolo';
import {GetAllModel, GetOneModel} from "./getAllModel";
import * as _ from "lodash";
import {ILogger} from "@appolo/logger";
import {IBaseCrudManager} from "./interfaces";
import {param, joi,validate} from '@appolo/validation';


export abstract class CrudController<T> extends Controller {

    protected abstract manager: IBaseCrudManager<T>;

    @inject() logger: ILogger;

    @get("/")
    @param(GetAllModel)
    public async getAll(req: IRequest, res: IResponse, model: GetAllModel<T>) {

        const data = await this.manager.getAll(model);

        return data;
    }

    @get("/:id")
    @param(GetOneModel)
    public async getById(req: IRequest, res: IResponse, model: GetOneModel<T>) {

        const doc = await this.manager.getById(req.model.id, model);

        return doc;
    }

    @post("/")
    public async create(req: IRequest, res: IResponse, model: Partial<T>) {

        let doc = await this.manager.create(model);

        return doc;
    }

    @patch("/:id")
    public async updateById(req: IRequest, res: IResponse, model: Partial<T>) {

        const doc = await this.manager.updateById(req.model.id, model);

        return doc;
    }

    @del("/:id")
    @param({
        id: joi.string().required()
    })
    public async deleteById(req: IRequest, res: IResponse) {

        await this.manager.deleteById(req.model.id);

        return;
    }

    @patch("/:id/active")
    @param({
        id: joi.string().required(),
        isActive: joi.boolean().required()
    })
    public async activeById(req: IRequest, res: IResponse, model: Partial<T>) {

        const data = await this.manager.updateById(req.model.id, model);

        return data;
    }


}
