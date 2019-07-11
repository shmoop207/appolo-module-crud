"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const appolo_1 = require("appolo");
const _ = require("lodash");
exports.CrudSymbol = "__CrudSymbol__";
function crud(options) {
    return function (fn) {
        let crudOptions = appolo_1.Util.getReflectData(exports.CrudSymbol, fn, {});
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
    };
}
exports.crud = crud;
//# sourceMappingURL=decorator.js.map