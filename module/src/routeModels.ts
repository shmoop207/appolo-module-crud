import {number, object, boolean, array, string} from "@appolo/validator";
import {CrudItemParams} from "./interfaces";


export class GetAllModel<T> {

    @number().optional()
    public page: number;

    @number().optional()
    public pageSize: number;

    @object().optional()
    public sort?: CrudItemParams<T>;

    @object().optional()
    public filter?: CrudItemParams<T>;

    @object().optional()
    public fields?: CrudItemParams<T>;

    @array().optional().items(object())
    public populate?: any[];

    @boolean().optional()
    lean: boolean
}

export class IdModel<T> {
    @string().optional()
    public id: boolean
}

export class GetByIdModel<T> {

    @object().optional()
    public fields?: CrudItemParams<T>;

    @array().optional().items(object())
    public populate?: any[];

    @boolean().optional()
    lean: boolean
}


export class ActiveByIdModel {

    @boolean().optional()
    public isActive: boolean

}
