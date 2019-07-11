import {IsString, IsOptional} from "@appolo/validator"
import {ValidateGroups} from "../../../module/src/interfaces";

export class Test {

    @IsString()
    @IsOptional({groups:[ValidateGroups.Create]})
    id: string;

    @IsString()
    name: string
}
