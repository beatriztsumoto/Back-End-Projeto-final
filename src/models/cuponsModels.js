import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const listarTodos = async (filtros) => {
    return await prisma.cUPONS.findMany({
        where: filtros,
        include: { LOJA: true}
    });
};

export const buscarPorId = async (id) => {
    return await prisma.cUPONS.findUnique({
        where: { ID_CUPOM: id },
    });
}

export const deletarPorId = async (id) => {
    return await prisma.cUPONS.delete({
        where: { ID_CUPOM: id },
    });
}