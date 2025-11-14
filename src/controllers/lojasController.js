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
]

export const listarTodos = async (req, res) => {
    try {
        const {nome, endereco, categoria} = req.query

        const filtros = {};

        if (nome) {
            filtros.OR = [
                {NOME_SOCIAL: { contains: nome, mode: "insensitive"}},
                {NOME_FANTASIA: { contains: nome, mode: "insensitive"}}
            ]
        }

        if (endereco) {
            filtros.ENDERECO = {contains: endereco, mode: "insensitive"}
        }

        if (categoria) {

            const permitido = categoriasPermitidas
            .map(c => c.toLowerCase())
            .includes(categoria.toLowerCase());

            if (!permitido){
                return res.status(400).json({
                    erro: "Categoria inválida",
                    categoriasPermitidas
                });
            }
            
            filtros.CATEGORIA = {
                contains: categoria,
                mode: "insensitive"
        };
        }

        const lojas = await lojaModel.listarTodos(filtros);

        if(!lojas || lojas.length === 0) {
            return res.status(404).json({
                total:lojas.length,
                mensagem:"Não há lojas na lista"
            })
    }

        return res.status(200).json({
            total: lojas.length,
            mensagem:"Lista de lojas disponíveis",
            lojas
        })

    } catch (error) {
        return res.status(500).json({
            erro:`Erro interno de servidor`,
            detalhes:error.message,
            status:500
        }) 
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if(isNaN(id)) {
            return res.status(400).json({
                erro: "ID inválido"
            });
        }

        const loja = await lojaModel.buscarPorId(id);

        if(!loja) {
            return res.status(200).json({
                sucesso: true,
                loja
            });
        }

        } catch (error) {
            return res.status(500).json({
                erro: "Erro interno de servidor",
                detalhes: error.message
            })
        }  
}