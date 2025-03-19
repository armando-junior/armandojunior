import { Injectable } from '@nestjs/common';
import { PrismaProvider } from "../db/prisma.provider";
import { Tecnologia } from "@core";

@Injectable()
export class TecnologiaProvider {
    constructor(private readonly prisma: PrismaProvider ) {}

    async findAll(): Promise<Tecnologia[]> {
        return this.prisma.tecnologia.findMany();
    }

    async findHighlights(): Promise<Tecnologia[]> {
        return this.prisma.tecnologia.findMany({
            where: {
                destaque: true
            }
        });
    }

}
