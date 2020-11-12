import { define, singleton} from '@appolo/inject';
import {IBaseCrudManager} from "../../../module/src/interfaces";
import {GetByIdModel, GetAllModel} from "./../../../module/src/routeModels";
import {Test} from "./test";

@define()
@singleton()
export class TestManager implements IBaseCrudManager<Test> {
    async getById(id: string, params: GetByIdModel<Test>): Promise<Test> {
        let test = new Test();

        test.id = id;

        return test;
    }

    async getAll(params: GetAllModel<Test>): Promise<{ count: number, results: Test[] }> {
        return {count: 1, results: [{"id": "1", name: "aa",isActive:true}]}
    }

    async create(data: Test): Promise<Test> {
        return {...data}
    }

    async updateById(id: string, data: Test): Promise<Test> {
        return {...data, ...{id: id}}
    }

    async deleteById(id: string): Promise<void> {

    }
}
