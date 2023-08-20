import { IsNumberString, IsOptional } from "class-validator";

export class FindOneParams {
    @IsOptional()	
    @IsNumberString()
    page: number
}