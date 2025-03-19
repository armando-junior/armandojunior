import {Controller, Get, Param} from '@nestjs/common';
import {ProjetoPrisma} from "./projeto.prisma";
import {Projeto} from "@core";

@Controller('projetos')
export class ProjetoController {
    constructor(private readonly repositorio: ProjetoPrisma) {}

    @Get()
    async findAll(): Promise<any[]> {
        return this.repositorio.findAll();
    }

    @Get('/destaques')
    async findHighlights(): Promise<any[]> {
        return this.repositorio.findHighlights();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Projeto | null> {
        return this.repositorio.findById(Number(id));
    }

}
