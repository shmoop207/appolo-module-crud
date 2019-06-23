import {IModuleOptions} from "appolo";
import {GetAllModel, GetOneModel} from "./routeModels";

export interface IOptions extends IModuleOptions {
}


export type CrudItemParams<T> = { [J in keyof Partial<T>]: any };


export interface IBaseCrudManager<T> {
    getById(id: string, params: GetOneModel<T>): Promise<T>
    getAll(params: GetAllModel<T>): Promise<{count:number,results:T[]}>
    create(data: Partial<T>): Promise<T>
    updateById(id: string, data: Partial<T>): Promise<T>
    deleteById(id: string): Promise<void>
}


export interface CrudRoutes  {
    getAll?: CrudRoute,
    getById?: CrudRoute,
    create?: CrudRoute,
    updateById?: CrudRoute,
    deleteById?: CrudRoute,
    activeById?: CrudRoute
}

export interface CrudRoute{
    method?: "patch",
    active?: boolean,
    path?: string,
    validation?: any[],
    middleware?: any[],
    roles?: any[],
}
