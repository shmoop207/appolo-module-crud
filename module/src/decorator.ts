import "reflect-metadata";
import {Util, Methods, get, post, del, patch, roles, middleware} from 'appolo';
import {validate, joi} from '@appolo/validation';
import {CrudRoutes} from "./interfaces";

import {CrudRoutesDefaults} from "./defaults";
import * as _ from "lodash";

const MethodsDic = {
    [Methods.GET]: get,
    [Methods.POST]: post,
    [Methods.DELETE]: del,
    [Methods.PATCH]: patch
};

export function crud(routes: CrudRoutes): (fn: Function) => void {

    return function (fn: Function) {

        routes = _.defaultsDeep({}, routes, CrudRoutesDefaults);

        _.forEach(routes, (route, action) => {
            if (!route.active) {
                return;
            }

            MethodsDic[route.method](route.path)(fn.prototype, action);

            _.forEach(route.validation, item => validate(item)(fn.prototype, action));

            _.forEach(route.roles, item => roles(item)(fn.prototype, action));

            _.forEach(route.middleware, item => middleware(item)(fn.prototype, action));

        });

    }
}
