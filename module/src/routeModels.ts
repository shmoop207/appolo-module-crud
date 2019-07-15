import {IsString, MinLength, IsNumber, IsOptional, IsArray, Allow, IsBoolean} from "@appolo/validator";
import {CrudItemParams} from "./interfaces";


// import {validator} from 'appolo';
// import {param, joi} from '@appolo/validation';
// import {CrudItemParams} from "./interfaces";
//
export class GetAllModel<T> {

    @IsNumber()
    @IsOptional()
    public page: number;

    @IsNumber()
    @IsOptional()
    public pageSize: number;

    @Allow()
    @IsOptional()
    public sort?: CrudItemParams<T>;

    @Allow()
    @IsOptional()
    public filter?: CrudItemParams<T>;

    @Allow()
    @IsOptional()
    public fields?: CrudItemParams<T>;

    @IsOptional()
    @IsArray()
    public populate?: any[];

    @IsOptional()
    @IsBoolean()
    lean:boolean
}


export class GetByIdModel<T> {


    @Allow()
    @IsOptional()
    public fields?: CrudItemParams<T>;

    @IsOptional()
    @IsArray()
    public populate?: any[];

    @IsOptional()
    @IsBoolean()
    lean:boolean
}


export class ActiveByIdModel {

    @IsBoolean()
    public isActive: boolean

}
