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
                validate(options.createModel || options.model, {validatorOptions: {groups: [ValidateGroups.Create]}})(c.fn.prototype, "create", 0);
            }

            if (this.moduleOptions.model || options.updateModel) {
                validate(options.updateModel || options.model, {validatorOptions: {groups: [ValidateGroups.Update]}})(c.fn.prototype, "updateById", 1);
            }

            (this.parent as App).addRouteFromClass(c.fn as any)
        })

    }
}
