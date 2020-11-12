import {module, Module,  IModuleParams} from '@appolo/engine';
import {App} from '@appolo/core';
import _ = require('lodash');
import {CrudOptions, IOptions, MethodsDic, ValidateGroups} from "./src/interfaces";
import {CrudRoutesDefaults} from "./src/defaults";
import {CrudSymbol} from "./src/decorator";
import {validate} from "@appolo/validator";

@module()
export class CrudModule extends Module<IOptions> {


    public static for(options?: IOptions): IModuleParams {
        return {options, type: CrudModule}
    }

    protected readonly Defaults: Partial<IOptions> = {
        routes: CrudRoutesDefaults
    };

    public get exports() {
        return [];
    }

    public beforeModuleInitialize() {
        let controllers = this.app.tree.parent.discovery.findAllReflectData<{ options?: CrudOptions }>(CrudSymbol);

        _.forEach(controllers, c => {
            let options = c.metaData.options;
            let routes = _.defaultsDeep({}, options.routes, this.moduleOptions.routes);


            _.forEach(routes, (route, action) => {
                if (!route.active) {
                    return;
                }

                MethodsDic[route.method](route.path)(c.fn.prototype, action);
            });


            if (options.model || options.createModel) {
                let routeDef = (this.app.tree.parent as App).discovery.getRoute(c.fn, "create"),
                    groups: string[] = [ValidateGroups.Create];

                if (routeDef && routeDef.definition && routeDef.definition.roles && routeDef.definition.roles.length) {
                    groups.push(...routeDef.definition.roles)
                }

                validate(options.createModel || options.model, {groups})(c.fn.prototype, "create", 0);
            }

            if (options.model || options.updateModel) {
                let routeDef = (this.app.tree.parent as App).discovery.getRoute(c.fn, "updateById"),
                    groups: string[] = [ValidateGroups.Update];

                if (routeDef && routeDef.definition && routeDef.definition.roles && routeDef.definition.roles.length) {
                    groups.push(...routeDef.definition.roles)
                }

                validate(options.updateModel || options.model, {
                    groups,
                })(c.fn.prototype, "updateById", 1);
            }

            (this.parent as App).route.createRouteFromClass(c.fn as any)
        })

    }
}
