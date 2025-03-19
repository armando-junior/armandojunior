import { Injectable } from '@nestjs/common';
import { PrismaProvider } from "../db/prisma.provider";
import {Projeto, Tecnologia} from "@core";

@Injectable()
export class ProjetoPrisma {
    constructor(private readonly prisma: PrismaProvider ) {}

    async findAll(): Promise<Projeto[]> {
        // @ts-ignore
        return this.prisma.projeto.findMany();
    }

    async findHighlights(): Promise<Projeto[]> {
        // @ts-ignore
        return this.prisma.projeto.findMany({
            where: {
                destaque: true
            },
            include: {
                tecnologias: true
            }
        });
    }

    async findById(id: number): Promise<Projeto | null> {
        // @ts-ignore
        return this.prisma.projeto.findUnique({
            where: {id},
            include: {
                tecnologias: true
            }
        });
    }

}
