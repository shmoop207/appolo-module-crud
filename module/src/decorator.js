"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crud = exports.CrudSymbol = void 0;
require("reflect-metadata");
const utils_1 = require("@appolo/utils");
const _ = require("lodash");
exports.CrudSymbol = "__CrudSymbol__";
function crud(options) {
    return function (fn) {
        let crudOptions = utils_1.Reflector.getFnMetadata(exports.CrudSymbol, fn, {});
        crudOptions.options = _.defaultsDeep({}, options, crudOptions);
    };
}
exports.crud = crud;
//# sourceMappingURL=decorator.js.map