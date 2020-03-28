import {string, boolean,schema} from "appolo-validator"
import {ValidateGroups} from "../../../module/src/interfaces";

export class Test {

    @string().optional().groups([ValidateGroups.Update])
    id: string;

    @string().optional()
    name: string;

    @boolean().required().groups([ValidateGroups.Update])
    isActive: boolean;
}
