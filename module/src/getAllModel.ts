import {validator} from 'appolo';
import {param, joi} from '@appolo/validation';
import {CrudItemParams} from "./interfaces";

export class GetAllModel<T> {
    @param(joi.number().optional())
    public page: number;

    @param(joi.number().optional())
    public pageSize: number;

    @param(joi.object().optional())
    public sort?: CrudItemParams<T>;

    @param(joi.object().optional())
    public filter?: CrudItemParams<T>;

    @param(joi.object().optional())
    public fields?: CrudItemParams<T>;

    @param(joi.array().items(validator.object()).optional())
    public populate?: string | { [index: string]: any }[];
}


export class GetOneModel<T> {

    @param(joi.string().required())
    public id: string;

    @param(joi.object().optional())
    public fields?: CrudItemParams<T>;

    @param(joi.array().items(validator.object()).optional())
    public populate?: string | { [index: string]: any }[];
}
