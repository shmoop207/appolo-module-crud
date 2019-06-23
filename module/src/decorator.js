"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const appolo_1 = require("appolo");
const validation_1 = require("@appolo/validation");
const defaults_1 = require("./defaults");
const _ = require("lodash");
const MethodsDic = {
    [appolo_1.Methods.GET]: appolo_1.get,
    [appolo_1.Methods.POST]: appolo_1.post,
    [appolo_1.Methods.DELETE]: appolo_1.del,
    [appolo_1.Methods.PATCH]: appolo_1.patch
};
function crud(routes) {
    return function (fn) {
        routes = _.defaultsDeep({}, routes, defaults_1.CrudRoutesDefaults);
        _.forEach(routes, (route, action) => {
            if (!route.active) {
                return;
            }
            MethodsDic[route.method](route.path)(fn.prototype, action);
            _.forEach(route.validation, item => validation_1.validate(item)(fn.prototype, action));
            _.forEach(route.roles, item => appolo_1.roles(item)(fn.prototype, action));
            _.forEach(route.middleware, item => appolo_1.middleware(item)(fn.prototype, action));
        });
    };
}
exports.crud = crud;
//# sourceMappingURL=decorator.js.map