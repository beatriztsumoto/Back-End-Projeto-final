import * as lojaModel from '../models/lojasModels.js';

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
        const { nome, endereco, categoria } = req.query;

        const filtros = {};

        // Filtro por nome
        if (nome) {
            filtros.OR = [
                { NOME_SOCIAL: { contains: nome, mode: "insensitive" } },
                { NOME_FANTASIA: { contains: nome, mode: "insensitive" } }
            ];
        }

        // Filtro por endereço
        if (endereco) {
            filtros.ENDERECO = {
                contains: endereco,
                mode: "insensitive"
            };
        }

        // Filtro por categoria
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

        const lojas = await lojaModel.listarTodos(filtros);

        if (!lojas || lojas.length === 0) {
            return res.status(404).json({
                total: 0,
                message: "Não há lojas na lista",
                suggestion: [
                    "Verifique se a informação inserida está correta",
                    "Verifique se há lojas registradas com a informação inserida"
                ]
            });
        }

        return res.status(200).json({
            status: 200,
            success: true,
            total: lojas.length,
            message: "Lista de lojas disponíveis",
            lojas
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro interno de servidor",
            details: error.message,
            status: 500
        });
    }
};

export const buscarPorId  = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                error: "ID inválido"
            });
        }

        const loja = await lojaModel.buscarPorId(id)

        if (!loja) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "Loja não encontrada",
                error: "LOJA_NOT_FOUND",
                suggestion: [
                    "Verifique se a loja está registrada"
                ]
            });
        }

        return res.status(200).json({
            status: 200,
            success: true,
            message: "Loja encontrada com sucesso!",
            loja
        })

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

        const camposObrigatorios = ["NOME_SOCIAL", "NOME_FANTASIA", "LOGO", "CNPJ", "TELEFONE_COMERCIAL", "ENDERECO", "CATEGORIA"];
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

        //Validade se cnpj já existe
        const cnpjExiste = await lojaModel.buscarPorCnpj(dado.CNPJ);

        if (cnpjExiste) {
            return res.status(409).json({
                status: 409,
                success: false,
                message: "Não é possível registrar mais de uma loja com o mesmo CNPJ",
                error: "DUPLICATE_LOJA"
            })
        }

        //Valida se a categoria é válida
        const categoriaValida = categoriasPermitidas.map(c => c.toLowerCase()).includes(dado.CATEGORIA.toLowerCase());

        if (!categoriaValida) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "Categoria inválida",
                sugestao: [
                    "Verifique se a categoria está escrita corretamente",
                    "Escolha uma das categorias válidas"
                ],
                categoriasPermitidas
            })
        }

        const novaLoja = await lojaModel.criar(dado);

        return res.status(201).json({
            status: 201,
            success: true,
            message: "Nova loja cadastrada com sucesso",
            loja: novaLoja
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
        const id = Number(req.params.id);

        if(!id) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "ID inválido"
            });
        }

       const loja = await lojaModel.buscarPorId(id);
       if (!loja) {
        return res.status(404).json({
            status: 404,
            success: false,
            message: "Loja não encontrada",
            error: "LOJA_NOT_FOUND",
            suggestion: [
                    "Verifique se a loja está registrada"
                ]
        })
       }

       await lojaModel.deletar(id);

       return res.status(200).json({
            status: 200, 
            success: true,
            message: "Loja deletada com sucesso"
       });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            error: "Erro interno de servidor",
            details: error.message
        });
    }
};