import {IsString, MinLength, IsNumber, IsOptional, IsArray, Allow, IsBoolean, IsObject, Type} from "@appolo/validator";
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

    @IsOptional()
    @IsObject()
    public sort?: CrudItemParams<T>;

    @IsOptional()
    @IsObject()
    public filter?: CrudItemParams<T>;

    @IsOptional()
    @IsObject()
    public fields?: CrudItemParams<T>;

    @IsOptional()
    @IsArray()
    @Type(() => Object)
    @IsObject({each: true})
    public populate?: any[];

    @IsOptional()
    @IsBoolean()
    lean: boolean
}


export class GetByIdModel<T> {

    @IsOptional()
    @IsObject()
    public fields?: CrudItemParams<T>;

    @IsOptional()
    @IsArray()
    @Type(() => Object)
    @IsObject({each: true})
    public populate?: any[];

    @IsOptional()
    @IsBoolean()
    lean: boolean
}


export class ActiveByIdModel {

    @IsBoolean()
    public isActive: boolean

}
