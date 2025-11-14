import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient ();

export const listarTodos = async (filtros = {}) => {
    return await prisma.lOJA.findMany({
        where: filtros,
        orderBy: {NOME_FANTASIA: 'asc'}
    });
};