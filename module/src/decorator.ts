import "reflect-metadata";
import {Reflector} from '@appolo/utils';
import {CrudOptions, CrudRoutes} from "./interfaces";

import * as _ from "lodash";



export const CrudSymbol = "__CrudSymbol__";


export function crud(options:CrudOptions): (fn: Function) => void {

    return function (fn: Function) {


       let crudOptions =  Reflector.getFnMetadata<{options?:CrudOptions}>(CrudSymbol, fn, {});


        crudOptions.options = _.defaultsDeep({}, options, crudOptions);


    }
}
