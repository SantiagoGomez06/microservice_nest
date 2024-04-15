import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { DataDto } from "src/dtos/data.dto";

@Injectable()
export class ApiService{
    private axiosInstance: AxiosInstance;
    constructor(){
        this.axiosInstance = axios.create()
    }
    async getData(): Promise<DataDto[]>{
        const response = await this.axiosInstance.get <DataDto[]>('https://reqres.in/api/users/2')
        return response.data;
    }
}