import * as descontosModel from "../models/descontosModel.js";
import * as lojaModel from "../models/lojasModels.js"

const categoriasPermitidas = [
    'Moda e Acessórios',
    'Tecnologia e Eletrônicos',
    'Casa, Decoração e Utensílios',
    'Eletrodomésticos e Móveis',
    'Beleza e Cosméticos',
    'Saúde e Farmácia',
    'Alimentação e Delivery',
    'Esporte e Lazer',
    'Pet Shop e Produtos para Animais',
    'Educação e Livraria',
    'Bebê e Criança',
    'Papelaria e Escritório',
    'Serviços e Financeiros'
];

export const listarTodos = async (req, res) => {
    try {
        const { nome_loja , categoria, endereco_loja } = req.query;

        const filtros = {};

        //Filtro por nome da loja
        if (nome_loja) {
            filtros.LOJA = {
                OR: [
                  { NOME_SOCIAL: { contains: nome_loja, mode: "insensitive" } },
                  { NOME_FANTASIA: { contains: nome_loja, mode: "insensitive" } },
                ],
              };
        }

        //Filtro por categoria
        if (categoria) {
            const permitido = categoriasPermitidas
                .map(c => c.toLowerCase())
                .includes(categoria.toLowerCase());

            if (!permitido) {
                return res.status(400).json({
                    status: 400,
                    error: "Categoria inválida",
                    suggestion: [
                        "procure por uma das categorias permitidas"
                    ],
                    categoriasPermitidas,
                });
            }

            filtros.CATEGORIA = {
                contains: categoria,
                mode: "insensitive"
            };
        }

        //Filtro por endereco
        if (endereco_loja) {
            filtros.LOJA = {
              ENDERECO: { contains: endereco_loja, mode: "insensitive" },
            };
          }


        const descontos = await descontosModel.listarTodos(filtros);

        if (!descontos || descontos.length === 0) {
            return res.status(404).json({
                status: 404,
                total: 0,
                message: "Não há descontos na lista",
                suggestion: [
                    "Verifique se a informação inserida está correta",
                    "Verifique se há descontos registrados com a informação inserida"
                ]
            });
        }

        //Mostra o VALOR_DESCONTO com só 2 casas decimais
        const descontosFormatados = descontos.map(d => ({
            ...d,
            VALOR_DESCONTO: Number(d.VALOR_DESCONTO).toFixed(2)
        }));

        return res.status(200).json({
            status: 200,
            success: true,
            total: descontos.length,
            message: "Descontos encontrados com sucesso!",
            data: descontosFormatados
        });

    } catch (error) {
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Erro ao listar descontos",
            error: error.message
        })
    }
}

export const buscarPorId = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "O valor inserido não é um número válido",
                suggestion: "Verifique o ID e tente novamente"
            });
        }

        const desconto = await descontosModel.buscarPorId(id);

        if (!desconto) {
            return res.status(404).json({
                status: 404,
                seccess: false,
                message: "Desconto não encontrado",
                error: "DESCONTO_NOT_FOUND",
                suggestion: "Verifique se o desconto está registrado"
            });
        }

        //Mostra o VALOR_DESCONTO com só 2 casas decimais
        const descontosFormatados = {
            ...desconto,
            VALOR_DESCONTO: Number(desconto.VALOR_DESCONTO).toFixed(2)
        };

        return res.status(200).json({
            status: 200,
            seccess: true,
            message: "Desconto encontrado com sucesso!",
            desconto: descontosFormatados
        });

    } catch(error) {
        return res.status(500).json({
            status: 500,
            error: "Erro interno de servidor",
            details: error.message
        })
    }
}

export const criar = async (req, res) => {
    try {
        const dado = req.body;

        const camposObrigatorios = ["TITULO", "FOTO_ITEM", "VALOR_DESCONTO", "DESCRICAO", "CATEGORIA", "ID_LOJA"];
        const faltandoCampo = camposObrigatorios.filter(campo => !dado[campo]);

        //Campos obrigatórios
        if (faltandoCampo.length > 0) {
            return res.status(400).json({
            status: 400,
            success: false,
            message: "Criação mal executada, verifique os campos",
            error: "VALIDATION_ERROR",
            details: `O campo ${faltandoCampo} é obrigatório`
            });
        }

        //Valida se a categoria é válida
        const categoriaValida = categoriasPermitidas.map(c => c.toLowerCase()).includes(dado.CATEGORIA.toLowerCase());

        if (!categoriaValida) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "Categoria inválida",
                suggestion: [
                    "Verifique se a categoria está escrita corretamente",
                    "Escolha uma das categorias válidas"
                ],
                categoriasPermitidas
            })
        }

        //Verifica se loja existe
        const lojaExiste = await lojaModel.buscarPorId(parseInt(dado.ID_LOJA));

        if (!lojaExiste) {
            return res.status(404).json({
                status: 404,
                success: false,
                error: "LOJA_NOT_FOUND",
                message:  "Não é possível criar desconto para uma loja inexistente",
                suggestion: "Verifique se o ID_LOJA inserido pertence a uma loja cadastrada"
            })
        }

        //Verifica se o título do desconto já existe
        const tituloExiste = await descontosModel.buscarPorTitulo(dado.TITULO);

        if (tituloExiste) {
            return res.status(409).json({
                status: 409,
                success: false,
                message: "Não é possível criar um desconto com um título já existente",
                error: "DUPLICATE_TITLE",
                suggestion: [
                    "Tente usar um título diferente",
                    "Verifique os descontos já cadastrados"
                ]
            })
        }

        //Verifica o formato de VALOR_DESCONTO

        const valor = dado.VALOR_DESCONTO

        //Tem que ser numero
        if (isNaN(valor)) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "O VALOR_DESCONTO deve ser um número válido",
                suggestion: "Siga esse formato para VALOR_DESCONTO: 100.00"
            })
        }

        //Tem que ser positivo
        if (parseFloat(valor) <= 0) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "O VALOR_DESCONTO deve ser maior que zero"
            })
        }

        //Cria
        const novoDesconto = await descontosModel.criar(dado);

        return res.status(201).json({
            status: 201,
            success: true,
            message: "Nova desconto criado com sucesso",
            desconto: {
                ...novoDesconto,
                VALOR_DESCONTO: Number(novoDesconto.VALOR_DESCONTO).toFixed(2)
            }
        })

        } catch (error) {
            return res.status(500).json({
            status: 500,
            error: "Erro interno de servidor",
            details: error.message
        })
        }
    }


export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if(isNaN(id)) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "O valor inserido não é um número válido",
                suggestion: "Verifique o ID e tente novamente"
            });
        }

       const descontoExiste = await descontosModel.buscarPorId(id);
       if (!descontoExiste) {
        return res.status(404).json({
            status: 404,
            success: false,
            message: "Desconto não encontrado",
            error: "DESCONTO_NOT_FOUND",
            suggestion: [
                    "Verifique se o desconto está registrado"
                ]
        })
       }

       await descontosModel.deletar(id);

       return res.status(200).json({
            status: 200, 
            success: true,
            message: "Desconto deletado com sucesso"
       });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            error: "Erro interno de servidor",
            details: error.message
        });
    }
};

export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dado = req.body;

        if (isNaN(id)) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "O valor inserido não é um número válido",
                suggestion: "Verifique o ID e tente novamente"
            }); 
        }

        const descontoExiste = await lojaModel.buscarPorId(id);
        if (!descontoExiste) {
            return res.status(404).json({
                status: 404,
            success: false,
            message: "Desconto não encontrado",
            error: "DESCONTO_NOT_FOUND",
            suggestion: "Verifique se o desconto está registrado"
                
            })
        }

        //Impede alterar o ID_LOJA
        if (dado.ID_LOJA && dado.ID_LOJA !== descontoExiste.ID_LOJA) {
            return res.status(400).json({
                status: 400,
                success: false,
                error: "CANNOT_CHANGE_STORE",
                message: "Não é possível alterar a loja proprietária do desconto",
                suggestion: "Use apenas o mesmo ID_LOJA do desconto original"
            });
        }

        //Valida se a categoria é válida
        if (dado.CATEGORIA) {
        const categoriaValida = categoriasPermitidas.map(c => c.toLowerCase()).includes(dado.CATEGORIA.toLowerCase());

        if (!categoriaValida) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "Categoria inválida",
                suggestion: [
                    "Verifique se a categoria está escrita corretamente",
                    "Escolha uma das categorias válidas"
                ],
                categoriasPermitidas
            })
        }
    }

    //Verifica se o título do desconto já existe
    if (dado.TITULO && dado.TITULO !== descontoExiste.TITULO) {
        const tituloExiste = await descontosModel.buscarPorTitulo(dado.TITULO);

        if (tituloExiste) {
            return res.status(409).json({
                status: 409,
                success: false,
                message: "Não é possível criar um desconto com um título já existente",
                error: "DUPLICATE_TITLE",
                suggestion: [
                    "Tente usar um título diferente",
                    "Verifique os descontos já cadastrados"
                ]
            })
        }
    }

        //Atualiza 
        const descontoAtualizado = await descontosModel.atualizar(id, dado);

        return res.status(200).json({
            status: 200,
            success: true,
            message: "Desconto atualizado com sucesso!",
            desconto: {
                ...descontoAtualizado,
                VALOR_DESCONTO: Number(descontoAtualizado.VALOR_DESCONTO).toFixed(2)
        }
        });

    } catch (error) {
        return res.status(500).json({
            status: 500,
            error: "Erro interno de servidor",
            details: error.message
        });
    }
};