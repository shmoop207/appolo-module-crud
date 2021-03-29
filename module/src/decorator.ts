import "reflect-metadata";
import {Reflector} from '@appolo/utils';
import {CrudOptions, CrudRoutes} from "./interfaces";

import {Objects} from "@appolo/utils";


export const CrudSymbol = "__CrudSymbol__";


export function crud(options: CrudOptions): (fn: Function) => void {

    return function (fn: Function) {


        let crudOptions = Reflector.getFnMetadata<{ options?: CrudOptions }>(CrudSymbol, fn, {});


        crudOptions.options = Objects.defaultsDeep({}, options, crudOptions.options);


    }
}
