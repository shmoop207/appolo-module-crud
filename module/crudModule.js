"use strict";
var CrudModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudModule = void 0;
const tslib_1 = require("tslib");
const engine_1 = require("@appolo/engine");
const _ = require("lodash");
const interfaces_1 = require("./src/interfaces");
const defaults_1 = require("./src/defaults");
const decorator_1 = require("./src/decorator");
const validator_1 = require("@appolo/validator");
let CrudModule = CrudModule_1 = class CrudModule extends engine_1.Module {
    constructor() {
        super(...arguments);
        this.Defaults = {
            routes: defaults_1.CrudRoutesDefaults
        };
    }
    static for(options) {
        return { options, type: CrudModule_1 };
    }
    get exports() {
        return [];
    }
    beforeModuleInitialize() {
        let controllers = this.app.tree.parent.discovery.findAllReflectData(decorator_1.CrudSymbol);
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
                let routeDef = this.app.tree.parent.discovery.getRoute(c.fn, "create"), groups = [interfaces_1.ValidateGroups.Create];
                if (routeDef && routeDef.definition && routeDef.definition.roles && routeDef.definition.roles.length) {
                    groups.push(...routeDef.definition.roles);
                }
                validator_1.validate(options.createModel || options.model, { groups })(c.fn.prototype, "create", 0);
            }
            if (options.model || options.updateModel) {
                let routeDef = this.app.tree.parent.discovery.getRoute(c.fn, "updateById"), groups = [interfaces_1.ValidateGroups.Update];
                if (routeDef && routeDef.definition && routeDef.definition.roles && routeDef.definition.roles.length) {
                    groups.push(...routeDef.definition.roles);
                }
                validator_1.validate(options.updateModel || options.model, {
                    groups,
                })(c.fn.prototype, "updateById", 1);
            }
            this.parent.route.createRouteFromClass(c.fn);
        });
    }
};
CrudModule = CrudModule_1 = tslib_1.__decorate([
    engine_1.module()
], CrudModule);
exports.CrudModule = CrudModule;
//# sourceMappingURL=crudModule.js.map