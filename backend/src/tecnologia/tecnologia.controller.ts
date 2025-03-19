import { Controller, Get } from '@nestjs/common';
import {Tecnologia} from "@core";
import {TecnologiaProvider} from "./tecnologia.provider";

@Controller('tecnologias')
export class TecnologiaController {
    constructor(private readonly repositorio: TecnologiaProvider) {}
    @Get()
    async findAll(): Promise<Tecnologia[]> {
        return this.repositorio.findAll();
    }

    @Get('/destaques')
    async findHighlights(): Promise<Tecnologia[]> {
        return this.repositorio.findHighlights();
    }
}
