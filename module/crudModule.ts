import {module, Module, Util} from 'appolo';
import _ = require('lodash');
import {IOptions} from "./src/interfaces";

@module()
export class CrudModule extends Module<IOptions> {

    constructor(options: IOptions) {
        super(options)
    }

    protected readonly Defaults: Partial<IOptions> = {

    };

    public get exports() {
        return [];
    }


}
