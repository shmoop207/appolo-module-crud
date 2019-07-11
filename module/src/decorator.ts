import "reflect-metadata";
import {Util, Methods, get, post, del, patch, roles, middleware} from 'appolo';
import {CrudOptions, CrudRoutes} from "./interfaces";

import * as _ from "lodash";



export const CrudSymbol = "__CrudSymbol__";


export function crud(options:CrudOptions): (fn: Function) => void {

    return function (fn: Function) {


       let crudOptions =  Util.getReflectData<{options?:CrudOptions}>(CrudSymbol, fn, {});


        crudOptions.options = _.defaultsDeep({}, options, crudOptions);

        // _.forEach(routes, (route, action) => {
        //     if (!route.active) {
        //         return;
        //     }
        //
        //     MethodsDic[route.method](route.path)(fn.prototype, action);
        //
        //     _.forEach(route.validation, item => validate(item)(fn.prototype, action));
        //
        //     _.forEach(route.roles, item => roles(item)(fn.prototype, action));
        //
        //     _.forEach(route.middleware, item => middleware(item)(fn.prototype, action));
        //
        // });

    }
}
