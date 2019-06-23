import {IModuleOptions} from "appolo";
import {GetAllModel, GetOneModel} from "./getAllModel";

export interface IOptions extends IModuleOptions {
    id?: string,
}


export type CrudItemParams<T> = { [J in keyof Partial<T>]: any };


export interface IBaseCrudManager<T> {
    getById(id: string, params: GetOneModel<T>): Promise<T>
    getAll(params: GetAllModel<T>): Promise<T>
    create(data: Partial<T>): Promise<T>
    updateById(id: string, data: Partial<T>): Promise<T>
    deleteById(id: string): Promise<void>
}


export interface CrudRoutes  {
    getAll: CrudRoute,
    getById: CrudRoute,
    create: CrudRoute,
    updateById: CrudRoute,
    deleteById: CrudRoute,
    activeById: CrudRoute
}

export interface CrudRoute{
    method: "patch",
    active: boolean,
    path: string,
    validation: any[],
    middleware: any[],
    roles: any[],
}
