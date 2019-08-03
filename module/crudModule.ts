import {module, Module, Util, App, middleware} from 'appolo';
import _ = require('lodash');
import {CrudOptions, IOptions, MethodsDic, ValidateGroups} from "./src/interfaces";
import {CrudRoutesDefaults} from "./src/defaults";
import {CrudSymbol} from "./src/decorator";
import {validate} from "@appolo/validator";

@module()
export class CrudModule extends Module<IOptions> {

    constructor(options?: IOptions) {
        super(options)
    }

    protected readonly Defaults: Partial<IOptions> = {
        routes: CrudRoutesDefaults
    };

    public get exports() {
        return [];
    }

    protected beforeInitialize() {
        let controllers = Util.findAllReflectData<{ options?: CrudOptions }>(CrudSymbol, this.parent.exported);

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
                let routeDef = Util.getRouteDefinition(c.fn, "create"),
                    groups: string[] = [ValidateGroups.Create];

                if (routeDef && routeDef.definition && routeDef.definition.roles && routeDef.definition.roles.length) {
                    groups.push(...routeDef.definition.roles)
                }

                validate(options.createModel || options.model, {validatorOptions: {groups}})(c.fn.prototype, "create", 0);
            }

            if (options.model || options.updateModel) {
                let routeDef = Util.getRouteDefinition(c.fn, "updateById"),
                    groups: string[] = [ValidateGroups.Update];

                if (routeDef && routeDef.definition && routeDef.definition.roles && routeDef.definition.roles.length) {
                    groups.push(...routeDef.definition.roles)
                }

                validate(options.updateModel || options.model, {
                    validatorOptions: {
                        groups,
                        skipMissingProperties: true
                    }
                })(c.fn.prototype, "updateById", 1);
            }

            (this.parent as App).addRouteFromClass(c.fn as any)
        })

    }
}
