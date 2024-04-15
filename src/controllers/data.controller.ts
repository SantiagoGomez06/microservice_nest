import { Controller, Get } from "@nestjs/common";
import { ApiService } from "src/services/api.service";
import { DataDto } from "src/dtos/data.dto";

@Controller('data')
export class DataController {
    constructor (private readonly ApiService: ApiService){}
    @Get()
    async getData(): Promise<DataDto[]>{
        return this.ApiService.getData();
    }
}
