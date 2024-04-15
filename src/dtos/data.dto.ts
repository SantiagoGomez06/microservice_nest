import { IsInt } from "class-validator";
import { IsString } from "class-validator";
import { Data } from "src/interfaces/data.interface";


export class DataDto implements Data {
    @IsInt()
    id:number;
    @IsString()
    email: string;
    @IsString()
    first_name: string;
    @IsString()
    last_name: string;
    

    
}