import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const listarTodos = async (filtros) => {
    return await prisma.dESCONTOS.findMany({
        where: filtros,
        include: { LOJA: true}
    });
};

export const buscarPorId = async (id) => {
    return await prisma.dESCONTOS.findUnique({
        where: { ID_DESCONTO: id }
    })
}

export const criar = (dado) => {
    return prisma.dESCONTOS.create({
        data: dado
    })
}

export const deletar = async (id) => {
    return await prisma.dESCONTOS.delete({
        where: { ID_DESCONTO: id }
    });
}