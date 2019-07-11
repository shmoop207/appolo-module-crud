import {IModuleOptions, Methods, IClass, get, post, del, patch} from "appolo";
import {GetAllModel, GetOneModel} from "./routeModels";

export interface IOptions extends IModuleOptions {
    routes: CrudRoutes
    model?: IClass
    createModel?: IClass
    updateModel?: IClass
}


export type CrudItemParams<T> = { [J in keyof Partial<T>]: any };


export interface IBaseCrudManager<T> {
    getById(id: string, params: GetOneModel<T>): Promise<T>

    getAll(params: GetAllModel<T>): Promise<{ count: number, results: T[] }>

    create(data: Partial<T>): Promise<T>

    updateById(id: string, data: Partial<T>): Promise<T>

    deleteById(id: string): Promise<void>
}

export interface CrudOptions {
    routes?: CrudRoutes,
    model?: IClass
    createModel?: IClass
    updateModel?: IClass
}

export interface CrudRoutes {
    getAll?: CrudRoute,
    getById?: CrudRoute,
    create?: CrudRoute,
    updateById?: CrudRoute,
    deleteById?: CrudRoute,
    activeById?: CrudRoute
}

export interface CrudRoute {
    method?: Methods,
    active?: boolean,
    path?: string,
    validation?: any[],
    middleware?: any[],
    roles?: any[],
}

export const MethodsDic = {
    [Methods.GET]: get,
    [Methods.POST]: post,
    [Methods.DELETE]: del,
    [Methods.PATCH]: patch
};

export enum ValidateGroups {
    Update = "update",
    Create = "create"
}
