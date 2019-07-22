"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const _ = require("lodash");
const interfaces_1 = require("./src/interfaces");
const defaults_1 = require("./src/defaults");
const decorator_1 = require("./src/decorator");
const validator_1 = require("@appolo/validator");
let CrudModule = class CrudModule extends appolo_1.Module {
    constructor(options) {
        super(options);
        this.Defaults = {
            routes: defaults_1.CrudRoutesDefaults
        };
    }
    get exports() {
        return [];
    }
    beforeInitialize() {
        let controllers = appolo_1.Util.findAllReflectData(decorator_1.CrudSymbol, this.parent.exported);
        _.forEach(controllers, c => {
            let options = c.metaData.options;
            let routes = _.defaultsDeep({}, options.routes, this.moduleOptions.routes);
            _.forEach(routes, (route, action) => {
                if (!route.active) {
                    return;
                }
                interfaces_1.MethodsDic[route.method](route.path)(c.fn.prototype, action);
            });
            if (options.model || options.createModel) {
                let routeDef = appolo_1.Util.getRouteDefinition(c.fn, "create"), groups = [interfaces_1.ValidateGroups.Create];
                if (routeDef && routeDef.definition && routeDef.definition.roles && routeDef.definition.roles.length) {
                    groups.push(...routeDef.definition.roles);
                }
                validator_1.validate(options.createModel || options.model, { validatorOptions: { groups } })(c.fn.prototype, "create", 0);
            }
            if (options.model || options.updateModel) {
                let routeDef = appolo_1.Util.getRouteDefinition(c.fn, "updateById"), groups = [interfaces_1.ValidateGroups.Update];
                if (routeDef && routeDef.definition && routeDef.definition.roles && routeDef.definition.roles.length) {
                    groups.push(...routeDef.definition.roles);
                }
                validator_1.validate(options.updateModel || options.model, { validatorOptions: { groups } })(c.fn.prototype, "updateById", 1);
            }
            this.parent.addRouteFromClass(c.fn);
        });
    }
};
CrudModule = tslib_1.__decorate([
    appolo_1.module(),
    tslib_1.__metadata("design:paramtypes", [Object])
], CrudModule);
exports.CrudModule = CrudModule;
//# sourceMappingURL=crudModule.js.map