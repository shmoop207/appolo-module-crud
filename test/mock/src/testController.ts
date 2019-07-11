"use strict";
import {inject, controller, IRequest, IResponse, get} from 'appolo';
import {crud, CrudController} from '../../../index';
import {TestManager} from "./testManager";
import {Test} from "./test";


@controller("/test")
@crud({model: Test})
export class TestController extends CrudController<Test> {
    @inject(TestManager) manager: TestManager
}



