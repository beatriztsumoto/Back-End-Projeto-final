import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 🏷️ Categorias e produtos realistas
const categoriasComProdutos = {
  "Moda e Acessórios": [
    { nome: "Vestido Floral Longo", imagem: "https://placehold.co/300x300?text=Vestido+Floral+Longo" },
    { nome: "Blusa Cropped Feminina", imagem: "https://placehold.co/300x300?text=Blusa+Cropped+Feminina" },
    { nome: "Calça Jeans Skinny", imagem: "https://placehold.co/300x300?text=Calça+Jeans+Skinny" },
    { nome: "Jaqueta de Couro Sintético", imagem: "https://placehold.co/300x300?text=Jaqueta+de+Couro+Sintético" },
    { nome: "Saia Midi Plissada", imagem: "https://placehold.co/300x300?text=Saia+Midi+Plissada" },
    { nome: "Camiseta Oversized Masculina", imagem: "https://placehold.co/300x300?text=Camiseta+Oversized+Masculina" },
    { nome: "Tênis Branco Casual", imagem: "https://placehold.co/300x300?text=Tênis+Branco+Casual" },
    { nome: "Tênis Nike Air Max", imagem: "https://placehold.co/300x300?text=Tênis+Nike+Air+Max" },
    { nome: "Bota Feminina Cano Curto", imagem: "https://placehold.co/300x300?text=Bota+Feminina+Cano+Curto" },
    { nome: "Sandália Anabela", imagem: "https://placehold.co/300x300?text=Sandália+Anabela" },
    { nome: "Mochila de Couro", imagem: "https://placehold.co/300x300?text=Mochila+de+Couro" },
    { nome: "Bolsa Tiracolo Pequena", imagem: "https://placehold.co/300x300?text=Bolsa+Tiracolo+Pequena" },
    { nome: "Boné Aba Reta", imagem: "https://placehold.co/300x300?text=Boné+Aba+Reta" },
    { nome: "Relógio de Pulso Masculino", imagem: "https://placehold.co/300x300?text=Relógio+de+Pulso+Masculino" },
    { nome: "Óculos de Sol Feminino", imagem: "https://placehold.co/300x300?text=Óculos+de+Sol+Feminino" },
    { nome: "Pulseira de Prata 925", imagem: "https://placehold.co/300x300?text=Pulseira+de+Prata+925" },
    { nome: "Colar Dourado Minimalista", imagem: "https://placehold.co/300x300?text=Colar+Dourado+Minimalista" },
    { nome: "Brinco Argola Média", imagem: "https://placehold.co/300x300?text=Brinco+Argola+Média" },
    { nome: "Carteira de Couro Masculina", imagem: "https://placehold.co/300x300?text=Carteira+de+Couro+Masculina" },
    { nome: "Cinto Feminino Fino", imagem: "https://placehold.co/300x300?text=Cinto+Feminino+Fino" },
    { nome: "Chapéu de Palha Verão", imagem: "https://placehold.co/300x300?text=Chapéu+de+Palha+Verão" },
    { nome: "Blazer Alfaiataria", imagem: "https://placehold.co/300x300?text=Blazer+Alfaiataria" },
    { nome: "Short Jeans Desfiado", imagem: "https://placehold.co/300x300?text=Short+Jeans+Desfiado" },
    { nome: "Casaco Moletom Unissex", imagem: "https://placehold.co/300x300?text=Casaco+Moletom+Unissex" },
    { nome: "Meia Colorida Estampada", imagem: "https://placehold.co/300x300?text=Meia+Colorida+Estampada" },
    { nome: "Relógio Smartwatch", imagem: "https://placehold.co/300x300?text=Relógio+Smartwatch" },
    { nome: "Tênis Esportivo Adidas", imagem: "https://placehold.co/300x300?text=Tênis+Esportivo+Adidas" },
    { nome: "Camisa Polo Masculina", imagem: "https://placehold.co/300x300?text=Camisa+Polo+Masculina" },
    { nome: "Vestido de Festa Curto", imagem: "https://placehold.co/300x300?text=Vestido+de+Festa+Curto" },
    { nome: "Jaqueta Jeans Feminina", imagem: "https://placehold.co/300x300?text=Jaqueta+Jeans+Feminina" },
    { nome: "Macacão Pantalona", imagem: "https://placehold.co/300x300?text=Macacão+Pantalona" },
    { nome: "Saia Jeans Curta", imagem: "https://placehold.co/300x300?text=Saia+Jeans+Curta" },
    { nome: "Bolsa de Praia", imagem: "https://placehold.co/300x300?text=Bolsa+de+Praia" },
    { nome: "Tênis All Star Branco", imagem: "https://placehold.co/300x300?text=Tênis+All+Star+Branco" },
    { nome: "Luvas de Inverno", imagem: "https://placehold.co/300x300?text=Luvas+de+Inverno" },
    { nome: "Touca de Lã Unissex", imagem: "https://placehold.co/300x300?text=Touca+de+Lã+Unissex" },
    { nome: "Blusa Canelada Manga Longa", imagem: "https://placehold.co/300x300?text=Blusa+Canelada+Manga+Longa" },
    { nome: "Calça Jogger Moletom", imagem: "https://placehold.co/300x300?text=Calça+Jogger+Moletom" },
    { nome: "Vestido Midi Liso", imagem: "https://placehold.co/300x300?text=Vestido+Midi+Liso" },
    { nome: "Bermuda Masculina Sarja", imagem: "https://placehold.co/300x300?text=Bermuda+Masculina+Sarja" }
  ],

  "Tecnologia e Eletrônicos": [
    { nome: "Smartphone Samsung Galaxy S23", imagem: "https://placehold.co/300x300?text=Smartphone+Samsung+Galaxy+S23" },
    { nome: "iPhone 15 Pro", imagem: "https://placehold.co/300x300?text=iPhone+15+Pro" },
    { nome: "Notebook Dell Inspiron i7", imagem: "https://placehold.co/300x300?text=Notebook+Dell+Inspiron+i7" },
    { nome: "Fone Bluetooth JBL Wave 200TWS", imagem: "https://placehold.co/300x300?text=Fone+Bluetooth+JBL+Wave+200TWS" },
    { nome: "Caixa de Som Alexa Echo Dot", imagem: "https://placehold.co/300x300?text=Caixa+de+Som+Alexa+Echo+Dot" },
    { nome: "Tablet Samsung Galaxy Tab S9", imagem: "https://placehold.co/300x300?text=Tablet+Samsung+Galaxy+Tab+S9" },
    { nome: "Monitor Gamer LG Ultrawide", imagem: "https://placehold.co/300x300?text=Monitor+Gamer+LG+Ultrawide" },
    { nome: "Smartwatch Amazfit Bip 5", imagem: "https://placehold.co/300x300?text=Smartwatch+Amazfit+Bip+5" },
    { nome: "Teclado Mecânico Redragon Kumara", imagem: "https://placehold.co/300x300?text=Teclado+Mecânico+Redragon+Kumara" },
    { nome: "Mouse Gamer Logitech G Pro", imagem: "https://placehold.co/300x300?text=Mouse+Gamer+Logitech+G+Pro" },
    { nome: "Câmera GoPro Hero 12", imagem: "https://placehold.co/300x300?text=Câmera+GoPro+Hero+12" },
    { nome: "Headset HyperX Cloud II", imagem: "https://placehold.co/300x300?text=Headset+HyperX+Cloud+II" },
    { nome: "Smart TV LG 50 Polegadas 4K", imagem: "https://placehold.co/300x300?text=Smart+TV+LG+50+Polegadas+4K" },
    { nome: "HD Externo 2TB Seagate", imagem: "https://placehold.co/300x300?text=HD+Externo+2TB+Seagate" },
    { nome: "Pendrive SanDisk 64GB", imagem: "https://placehold.co/300x300?text=Pendrive+SanDisk+64GB" },
    { nome: "Webcam Logitech C920", imagem: "https://placehold.co/300x300?text=Webcam+Logitech+C920" },
    { nome: "Carregador Portátil Powerbank 20.000mAh", imagem: "https://placehold.co/300x300?text=Powerbank+20000mAh" },
    { nome: "Console PlayStation 5", imagem: "https://placehold.co/300x300?text=Console+PlayStation+5" },
    { nome: "Controle Xbox Series X", imagem: "https://placehold.co/300x300?text=Controle+Xbox+Series+X" },
    { nome: "Placa de Vídeo RTX 4060", imagem: "https://placehold.co/300x300?text=Placa+de+Vídeo+RTX+4060" },
    { nome: "Roteador TP-Link Wi-Fi 6", imagem: "https://placehold.co/300x300?text=Roteador+TP-Link+Wi-Fi+6" },
    { nome: "Impressora Multifuncional Epson EcoTank", imagem: "https://placehold.co/300x300?text=Impressora+Epson+EcoTank" },
    { nome: "Drone DJI Mini 4 Pro", imagem: "https://placehold.co/300x300?text=Drone+DJI+Mini+4+Pro" },
    { nome: "Câmera de Segurança Intelbras Wi-Fi", imagem: "https://placehold.co/300x300?text=Câmera+de+Segurança+Intelbras" },
    { nome: "Caixa de Som JBL Flip 6", imagem: "https://placehold.co/300x300?text=Caixa+de+Som+JBL+Flip+6" }
  ],

  "Casa, Decoração e Utensílios": [
    { nome: "Sofá Retrátil 3 Lugares", imagem: "https://placehold.co/300x300?text=Sofá+Retrátil+3+Lugares" },
    { nome: "Cortina Blackout 2,80m", imagem: "https://placehold.co/300x300?text=Cortina+Blackout+2,80m" },
    { nome: "Jogo de Panelas Tramontina 5 Peças", imagem: "https://placehold.co/300x300?text=Jogo+de+Panelas+Tramontina+5+Peças" },
    { nome: "Tapete Shaggy 2x3m", imagem: "https://placehold.co/300x300?text=Tapete+Shaggy+2x3m" },
    { nome: "Kit Organizadores de Gaveta", imagem: "https://placehold.co/300x300?text=Kit+Organizadores+de+Gaveta" },
    { nome: "Espelho Decorativo Redondo", imagem: "https://placehold.co/300x300?text=Espelho+Decorativo+Redondo" },
    { nome: "Relógio de Parede Moderno", imagem: "https://placehold.co/300x300?text=Relógio+de+Parede+Moderno" },
    { nome: "Abajur de Mesa Madeira", imagem: "https://placehold.co/300x300?text=Abajur+de+Mesa+Madeira" },
    { nome: "Quadro Decorativo Floral", imagem: "https://placehold.co/300x300?text=Quadro+Decorativo+Floral" },
    { nome: "Colcha Queen 3 Peças", imagem: "https://placehold.co/300x300?text=Colcha+Queen+3+Peças" },
    { nome: "Travesseiro de Fibra Siliconada", imagem: "https://placehold.co/300x300?text=Travesseiro+de+Fibra+Siliconada" },
    { nome: "Prateleira de Madeira Rústica", imagem: "https://placehold.co/300x300?text=Prateleira+de+Madeira+Rústica" },
    { nome: "Jogo de Toalhas de Banho", imagem: "https://placehold.co/300x300?text=Jogo+de+Toalhas+de+Banho" },
    { nome: "Cadeira de Jantar Estofada", imagem: "https://placehold.co/300x300?text=Cadeira+de+Jantar+Estofada" },
    { nome: "Mesa Lateral de Apoio", imagem: "https://placehold.co/300x300?text=Mesa+Lateral+de+Apoio" },
    { nome: "Kit Potes Herméticos Cozinha", imagem: "https://placehold.co/300x300?text=Kit+Potes+Herméticos+Cozinha" },
    { nome: "Cesto de Roupa Dobrável", imagem: "https://placehold.co/300x300?text=Cesto+de+Roupa+Dobrável" },
    { nome: "Jogo de Copos de Vidro", imagem: "https://placehold.co/300x300?text=Jogo+de+Copos+de+Vidro" }
  ],

  "Eletrodomésticos e Móveis": [
    { nome: "Geladeira Brastemp Frost Free 400L", imagem: "https://placehold.co/300x300?text=Geladeira+Brastemp+Frost+Free+400L" },
    { nome: "Fogão 4 Bocas Atlas", imagem: "https://placehold.co/300x300?text=Fogão+4+Bocas+Atlas" },
    { nome: "Micro-ondas Electrolux 20L", imagem: "https://placehold.co/300x300?text=Micro-ondas+Electrolux+20L" },
    { nome: "Máquina de Lavar 12kg", imagem: "https://placehold.co/300x300?text=Máquina+de+Lavar+12kg" },
    { nome: "Cafeteira Nespresso Essenza", imagem: "https://placehold.co/300x300?text=Cafeteira+Nespresso+Essenza" },
    { nome: "Liquidificador Philips Walita", imagem: "https://placehold.co/300x300?text=Liquidificador+Philips+Walita" },
    { nome: "Aspirador de Pó Vertical", imagem: "https://placehold.co/300x300?text=Aspirador+de+Pó+Vertical" },
    { nome: "Fritadeira Airfryer 4L", imagem: "https://placehold.co/300x300?text=Fritadeira+Airfryer+4L" },
    { nome: "Sofá Retrátil 3 Lugares", imagem: "https://placehold.co/300x300?text=Sofá+Retrátil+3+Lugares" },
    { nome: "Mesa de Jantar 4 Cadeiras", imagem: "https://placehold.co/300x300?text=Mesa+de+Jantar+4+Cadeiras" },
    { nome: "Cama Box Casal", imagem: "https://placehold.co/300x300?text=Cama+Box+Casal" },
    { nome: "Colchão Ortobom Casal", imagem: "https://placehold.co/300x300?text=Colchão+Ortobom+Casal" },
    { nome: "Guarda-Roupa 6 Portas", imagem: "https://placehold.co/300x300?text=Guarda-Roupa+6+Portas" },
    { nome: "Ventilador de Mesa 40cm", imagem: "https://placehold.co/300x300?text=Ventilador+de+Mesa+40cm" },
    { nome: "Ferro de Passar a Vapor", imagem: "https://placehold.co/300x300?text=Ferro+de+Passar+a+Vapor" },
    { nome: "Batedeira Planetária", imagem: "https://placehold.co/300x300?text=Batedeira+Planetária" },
    { nome: "Panela de Pressão Elétrica", imagem: "https://placehold.co/300x300?text=Panela+de+Pressão+Elétrica" },
    { nome: "Aquecedor de Ar Elétrico", imagem: "https://placehold.co/300x300?text=Aquecedor+de+Ar+Elétrico" },
    { nome: "Torradeira Elétrica", imagem: "https://placehold.co/300x300?text=Torradeira+Elétrica" },
    { nome: "Aparador de Barba Philips", imagem: "https://placehold.co/300x300?text=Aparador+de+Barba+Philips" }
  ],

  "Beleza e Cosméticos": [
    { nome: "Base Líquida Matte Vult", imagem: "https://placehold.co/300x300?text=Base+Líquida+Matte+Vult" },
    { nome: "Batom Vermelho Intenso", imagem: "https://placehold.co/300x300?text=Batom+Vermelho+Intenso" },
    { nome: "Perfume Carolina Herrera 212", imagem: "https://placehold.co/300x300?text=Perfume+Carolina+Herrera+212" },
    { nome: "Paleta de Sombras Ruby Rose", imagem: "https://placehold.co/300x300?text=Paleta+de+Sombras+Ruby+Rose" },
    { nome: "Máscara de Cílios Maybelline", imagem: "https://placehold.co/300x300?text=Máscara+de+Cílios+Maybelline" },
    { nome: "Creme Hidratante Nivea", imagem: "https://placehold.co/300x300?text=Creme+Hidratante+Nivea" },
    { nome: "Protetor Solar FPS 50", imagem: "https://placehold.co/300x300?text=Protetor+Solar+FPS+50" },
    { nome: "Esmalte Colorama Nude", imagem: "https://placehold.co/300x300?text=Esmalte+Colorama+Nude" },
    { nome: "Kit Pincéis de Maquiagem", imagem: "https://placehold.co/300x300?text=Kit+Pincéis+de+Maquiagem" },
    { nome: "Sabonete Facial Neutrogena", imagem: "https://placehold.co/300x300?text=Sabonete+Facial+Neutrogena" },
    { nome: "Shampoo L’Oréal Professionnel", imagem: "https://placehold.co/300x300?text=Shampoo+L’Oréal+Professionnel" },
    { nome: "Condicionador Dove Nutritivo", imagem: "https://placehold.co/300x300?text=Condicionador+Dove+Nutritivo" },
    { nome: "Óleo Capilar Moroccanoil", imagem: "https://placehold.co/300x300?text=Óleo+Capilar+Moroccanoil" },
    { nome: "Creme Anti-Idade Nivea Q10", imagem: "https://placehold.co/300x300?text=Creme+Anti-Idade+Nivea+Q10" },
    { nome: "Desodorante Rexona Clinical", imagem: "https://placehold.co/300x300?text=Desodorante+Rexona+Clinical" },
    { nome: "Bálsamo Pós-Barba Gillette", imagem: "https://placehold.co/300x300?text=Bálsamo+Pós-Barba+Gillette" },
    { nome: "Kit Skincare Completo", imagem: "https://placehold.co/300x300?text=Kit+Skincare+Completo" },
    { nome: "Perfume Dior Sauvage", imagem: "https://placehold.co/300x300?text=Perfume+Dior+Sauvage" }
  ],

  "Saúde e Farmácia": [
    { nome: "Suplemento Vitamínico Centrum Mulher", imagem: "https://placehold.co/300x300?text=Suplemento+Vitamínico+Centrum+Mulher" },
    { nome: "Protetor Solar Nivea Sun FPS 60", imagem: "https://placehold.co/300x300?text=Protetor+Solar+Nivea+Sun+FPS+60" },
    { nome: "Termômetro Digital G-Tech", imagem: "https://placehold.co/300x300?text=Termômetro+Digital+G-Tech" },
    { nome: "Aparelho de Pressão Omron Automático", imagem: "https://placehold.co/300x300?text=Aparelho+de+Pressão+Omron+Automático" },
    { nome: "Máscara Descartável Tripla Proteção", imagem: "https://placehold.co/300x300?text=Máscara+Descartável+Tripla+Proteção" },
    { nome: "Álcool em Gel Antisséptico 500ml", imagem: "https://placehold.co/300x300?text=Álcool+em+Gel+Antisséptico+500ml" }
  ],

  "Alimentação e Delivery": [
    { nome: "Pizza Grande Calabresa", imagem: "https://placehold.co/300x300?text=Pizza+Grande+Calabresa" },
    { nome: "Hambúrguer Duplo com Queijo", imagem: "https://placehold.co/300x300?text=Hambúrguer+Duplo+com+Queijo" },
    { nome: "Sushi Combo 20 Peças", imagem: "https://placehold.co/300x300?text=Sushi+Combo+20+Peças" },
    { nome: "Açaí com Granola 500ml", imagem: "https://placehold.co/300x300?text=Açaí+com+Granola+500ml" },
    { nome: "Marmita Fit Frango e Batata Doce", imagem: "https://placehold.co/300x300?text=Marmita+Fit+Frango+e+Batata+Doce" },
    { nome: "Coxinha de Frango com Catupiry", imagem: "https://placehold.co/300x300?text=Coxinha+de+Frango+com+Catupiry" },
    { nome: "Brownie de Chocolate Artesanal", imagem: "https://placehold.co/300x300?text=Brownie+de+Chocolate+Artesanal" },
    { nome: "Refrigerante Lata 350ml", imagem: "https://placehold.co/300x300?text=Refrigerante+Lata+350ml" },
    { nome: "Suco Natural de Laranja 500ml", imagem: "https://placehold.co/300x300?text=Suco+Natural+de+Laranja+500ml" },
    { nome: "Lasanha à Bolonhesa", imagem: "https://placehold.co/300x300?text=Lasanha+à+Bolonhesa" },
    { nome: "Esfiha Aberta de Carne", imagem: "https://placehold.co/300x300?text=Esfiha+Aberta+de+Carne" },
    { nome: "Hot Dog Completo", imagem: "https://placehold.co/300x300?text=Hot+Dog+Completo" },
    { nome: "Sorvete Artesanal 2 Sabores", imagem: "https://placehold.co/300x300?text=Sorvete+Artesanal+2+Sabores" },
    { nome: "Tapioca de Queijo com Coco", imagem: "https://placehold.co/300x300?text=Tapioca+de+Queijo+com+Coco" },
    { nome: "Combo Pastel e Caldo de Cana", imagem: "https://placehold.co/300x300?text=Combo+Pastel+e+Caldo+de+Cana" },
    { nome: "Café Espresso + Pão de Queijo", imagem: "https://placehold.co/300x300?text=Café+Espresso+e+Pão+de+Queijo" },
    { nome: "Salgados Sortidos 25 Unidades", imagem: "https://placehold.co/300x300?text=Salgados+Sortidos+25+Unidades" },
    { nome: "Torta de Frango Caseira", imagem: "https://placehold.co/300x300?text=Torta+de+Frango+Caseira" },
    { nome: "Pão Artesanal Integral", imagem: "https://placehold.co/300x300?text=Pão+Artesanal+Integral" },
    { nome: "Batata Frita com Cheddar e Bacon", imagem: "https://placehold.co/300x300?text=Batata+Frita+com+Cheddar+e+Bacon" },
    { nome: "Crepe Doce de Morango e Chocolate", imagem: "https://placehold.co/300x300?text=Crepe+Doce+de+Morango+e+Chocolate" },
    { nome: "Combo Sushi e Yakisoba", imagem: "https://placehold.co/300x300?text=Combo+Sushi+e+Yakisoba" },
    { nome: "Macarrão à Carbonara", imagem: "https://placehold.co/300x300?text=Macarrão+à+Carbonara" },
    { nome: "Frango Frito Crocante 10 Unidades", imagem: "https://placehold.co/300x300?text=Frango+Frito+Crocante+10+Unidades" },
    { nome: "Panqueca de Carne com Molho", imagem: "https://placehold.co/300x300?text=Panqueca+de+Carne+com+Molho" },
    { nome: "Milkshake de Ovomaltine 500ml", imagem: "https://placehold.co/300x300?text=Milkshake+de+Ovomaltine+500ml" },
    { nome: "Salada Caesar com Frango", imagem: "https://placehold.co/300x300?text=Salada+Caesar+com+Frango" },
    { nome: "Empadão de Frango com Catupiry", imagem: "https://placehold.co/300x300?text=Empadão+de+Frango+com+Catupiry" },
    { nome: "Combo Hambúrguer + Refrigerante", imagem: "https://placehold.co/300x300?text=Combo+Hambúrguer+e+Refrigerante" },
    { nome: "Tábua de Frios Premium", imagem: "https://placehold.co/300x300?text=Tábua+de+Frios+Premium" }
  ],

  "Esporte e Lazer": [
    { nome: "Bola de Futebol Adidas Oficial", imagem: "https://placehold.co/300x300?text=Bola+de+Futebol+Adidas+Oficial" },
    { nome: "Bicicleta Caloi Aro 29", imagem: "https://placehold.co/300x300?text=Bicicleta+Caloi+Aro+29" },
    { nome: "Tênis de Corrida Asics Gel", imagem: "https://placehold.co/300x300?text=Tênis+de+Corrida+Asics+Gel" },
    { nome: "Colchonete para Yoga", imagem: "https://placehold.co/300x300?text=Colchonete+para+Yoga" },
    { nome: "Raquete de Tênis Wilson", imagem: "https://placehold.co/300x300?text=Raquete+de+Tênis+Wilson" },
    { nome: "Kit Halteres 10kg", imagem: "https://placehold.co/300x300?text=Kit+Halteres+10kg" },
    { nome: "Mochila Esportiva Nike", imagem: "https://placehold.co/300x300?text=Mochila+Esportiva+Nike" },
    { nome: "Óculos de Natação Speedo", imagem: "https://placehold.co/300x300?text=Óculos+de+Natação+Speedo" },
    { nome: "Camiseta Dry Fit Adidas", imagem: "https://placehold.co/300x300?text=Camiseta+Dry+Fit+Adidas" },
    { nome: "Skate Completo Profissional", imagem: "https://placehold.co/300x300?text=Skate+Completo+Profissional" },
    { nome: "Corda de Pular Emborrachada", imagem: "https://placehold.co/300x300?text=Corda+de+Pular+Emborrachada" },
    { nome: "Barraca de Camping 4 Pessoas", imagem: "https://placehold.co/300x300?text=Barraca+de+Camping+4+Pessoas" }
  ],

  "Pet Shop e Produtos para Animais": [
    { nome: "Ração Premium Cães Adultos 10kg", imagem: "https://placehold.co/300x300?text=Ração+Premium+Cães+Adultos+10kg" },
    { nome: "Areia Higiênica Gatos 4kg", imagem: "https://placehold.co/300x300?text=Areia+Higiênica+Gatos+4kg" },
    { nome: "Brinquedo Mordedor Cães", imagem: "https://placehold.co/300x300?text=Brinquedo+Mordedor+Cães" },
    { nome: "Coleira Antipulgas Bayer", imagem: "https://placehold.co/300x300?text=Coleira+Antipulgas+Bayer" }
  ],

  "Educação e Livraria": [
    { nome: "Livro: O Pequeno Príncipe", imagem: "https://placehold.co/300x300?text=Livro+O+Pequeno+Príncipe" },
    { nome: "Caderno Universitário 200 folhas", imagem: "https://placehold.co/300x300?text=Caderno+Universitário+200+folhas" },
    { nome: "Dicionário de Português Moderno", imagem: "https://placehold.co/300x300?text=Dicionário+de+Português+Moderno" },
    { nome: "Curso Online de Programação Web", imagem: "https://placehold.co/300x300?text=Curso+Online+de+Programação+Web" }
  ],

  "Bebê e Criança": [
    { nome: "Carrinho de Bebê Galzerano Maranello", imagem: "https://placehold.co/300x300?text=Carrinho+de+Bebê+Galzerano+Maranello" },
    { nome: "Kit Mamadeira Avent Philips", imagem: "https://placehold.co/300x300?text=Kit+Mamadeira+Avent+Philips" },
    { nome: "Brinquedo Educativo de Montar", imagem: "https://placehold.co/300x300?text=Brinquedo+Educativo+de+Montar" }
  ],

  "Papelaria e Escritório": [
    { nome: "Caneta Esferográfica Azul Bic", imagem: "https://placehold.co/300x300?text=Caneta+Esferográfica+Azul+Bic" },
    { nome: "Agenda 2025 Capa Dura", imagem: "https://placehold.co/300x300?text=Agenda+2025+Capa+Dura" },
    { nome: "Pacote de Folhas A4 500 Unidades", imagem: "https://placehold.co/300x300?text=Pacote+de+Folhas+A4+500+Unidades" },
    { nome: "Grampeador Metálico Pequeno", imagem: "https://placehold.co/300x300?text=Grampeador+Metálico+Pequeno" }
  ],

  "Serviços e Financeiros": [
    { nome: "Plano de Saúde Familiar", imagem: "https://placehold.co/300x300?text=Plano+de+Saúde+Familiar" },
    { nome: "Seguro Automotivo Completo", imagem: "https://placehold.co/300x300?text=Seguro+Automotivo+Completo" },
    { nome: "Curso de Inglês Online", imagem: "https://placehold.co/300x300?text=Curso+de+Inglês+Online" },
    { nome: "Consultoria Financeira Pessoal", imagem: "https://placehold.co/300x300?text=Consultoria+Financeira+Pessoal" },
    { nome: "Plano de Academia Mensal", imagem: "https://placehold.co/300x300?text=Plano+de+Academia+Mensal" },
    { nome: "Serviço de Streaming Anual", imagem: "https://placehold.co/300x300?text=Serviço+de+Streaming+Anual" },
    { nome: "Revisão de Currículo Profissional", imagem: "https://placehold.co/300x300?text=Revisão+de+Currículo+Profissional" },
    { nome: "Seguro Viagem Internacional", imagem: "https://placehold.co/300x300?text=Seguro+Viagem+Internacional" },
    { nome: "Curso de Marketing Digital", imagem: "https://placehold.co/300x300?text=Curso+de+Marketing+Digital" },
    { nome: "Consultoria Jurídica Online", imagem: "https://placehold.co/300x300?text=Consultoria+Jurídica+Online" },
    { nome: "Serviço de Limpeza Residencial", imagem: "https://placehold.co/300x300?text=Serviço+de+Limpeza+Residencial" },
    { nome: "Plano de Internet Fibra 500MB", imagem: "https://placehold.co/300x300?text=Plano+de+Internet+Fibra+500MB" },
    { nome: "Manutenção de Computadores", imagem: "https://placehold.co/300x300?text=Manutenção+de+Computadores" },
    { nome: "Aulas Particulares Online", imagem: "https://placehold.co/300x300?text=Aulas+Particulares+Online" },
    { nome: "Assessoria Contábil Mensal", imagem: "https://placehold.co/300x300?text=Assessoria+Contábil+Mensal" },
    { nome: "Curso de Finanças Pessoais", imagem: "https://placehold.co/300x300?text=Curso+de+Finanças+Pessoais" },
    { nome: "Consultoria de Imagem e Estilo", imagem: "https://placehold.co/300x300?text=Consultoria+de+Imagem+e+Estilo" },
    { nome: "Serviço de Entrega Expressa", imagem: "https://placehold.co/300x300?text=Serviço+de+Entrega+Expressa" }
  ]
}

// 💰 Faixa de preço por categoria
function gerarPrecoPorCategoria(categoria) {
  const ranges = {
    'Moda e Acessórios': [50, 300],
    'Tecnologia e Eletrônicos': [100, 2000],
    'Casa, Decoração e Utensílios': [80, 800],
    'Eletrodomésticos e Móveis': [200, 3000],
    'Beleza e Cosméticos': [30, 200],
    'Saúde e Farmácia': [20, 150],
    'Alimentação e Delivery': [20, 100],
    'Esporte e Lazer': [80, 1000],
    'Pet Shop e Produtos para Animais': [30, 500],
    'Educação e Livraria': [40, 300],
    'Bebê e Criança': [50, 800],
    'Papelaria e Escritório': [10, 200],
    'Serviços e Financeiros': [50, 1000],
  }

  const [min, max] = ranges[categoria] || [50, 500]
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// 🚀 Função para gerar desconto
function gerarDesconto(loja) {
  const categoria = loja.CATEGORIA
  const produtos = categoriasComProdutos[categoria] || []
  const produto = produtos[Math.floor(Math.random() * produtos.length)] || { nome: 'Produto Genérico', imagem: 'https://placehold.co/300x300?text=Promoção' }
  const preco = gerarPrecoPorCategoria(categoria)

  return {
    TITULO: produto.nome,
    FOTO_ITEM: produto.imagem,
    VALOR_DESCONTO: preco,
    DESCRICAO: `Oferta exclusiva na loja ${loja.NOME_FANTASIA}! Desconto imperdível em ${produto.nome} da categoria ${categoria}.`,
    CATEGORIA: categoria,
    ID_LOJA: loja.ID_LOJA,
  }
}

async function main() {
  console.log('🚀 Iniciando seed do banco de dados...')

const lojas = [
  { nome: 'Magazine Luiza', logo: 'https://logodownload.org/wp-content/uploads/2014/06/magalu-logo-0.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Mercado Livre', logo: 'https://images.seeklogo.com/logo-png/26/1/mercado-livre-logo-png_seeklogo-264236.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Adidas', logo: 'https://images.seeklogo.com/logo-png/16/1/adidas-logo-png_seeklogo-168370.png', categoria: 'Moda e Acessórios' },
  { nome: 'Shopee', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/845px-Shopee_logo.svg.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Amazon', logo: 'https://logodownload.org/wp-content/uploads/2020/12/amazon-com-br-logo-0.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Casas Bahia', logo: 'https://images.seeklogo.com/logo-png/36/2/casas-bahia-logo-png_seeklogo-364898.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Nike', logo: 'https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png', categoria: 'Moda e Acessórios' },
  { nome: 'O Boticário', logo: 'https://logodownload.org/wp-content/uploads/2014/10/boticario-logo-0.png', categoria: 'Beleza e Cosméticos' },
  { nome: 'Kalunga', logo: 'https://assets.multiplan.com.br/Multiplan/filer_public/58/d8/58d812f1-81b1-4e69-a0a0-d88f139c65f3/kalunga.webp', categoria: 'Papelaria e Escritório' },
  { nome: 'Leroy Merlin', logo: 'https://logodownload.org/wp-content/uploads/2017/05/leroy-merlin-logo-1.png', categoria: 'Casa, Decoração e Utensílios' },
  { nome: 'Eletrolux', logo: 'https://logodownload.org/wp-content/uploads/2017/04/electrolux-logo-4.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/768px-Dell_Logo.svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Sephora', logo: 'https://escolhaseucosmetico.com.br/wp-content/uploads/2022/08/SEPHORA-LOGO.png', categoria: 'Beleza e Cosméticos' },
  { nome: 'Zara', logo: 'https://logodownload.org/wp-content/uploads/2014/05/zara-logo-0.png', categoria: 'Moda e Acessórios' },
  { nome: 'Marisa', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Logo-marisa.svg/2560px-Logo-marisa.svg.png', categoria: 'Moda e Acessórios' },
  { nome: 'Cacau Show', logo: 'https://logospng.org/wp-content/uploads/cacau-show.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Natura', logo: 'https://img1.gratispng.com/20180426/uce/avtlpzalt.webp', categoria: 'Beleza e Cosméticos' },
  { nome: 'Steam', logo: 'https://w7.pngwing.com/pngs/407/234/png-transparent-steam-mervils-a-vr-adventure-computer-icons-personal-computer-valve-corporation-steam-engine-game-logo-windows-thumbnail.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Shein', logo: 'https://w7.pngwing.com/pngs/625/778/png-transparent-shein-logo.png', categoria: 'Moda e Acessórios' },
  { nome: 'Renner', logo: 'https://logospng.org/wp-content/uploads/renner.png', categoria: 'Moda e Acessórios' },
  { nome: 'Burger King', logo: 'https://e7.pngegg.com/pngimages/110/824/png-clipart-hamburger-logo-burger-king-fast-food-brand-burger-king-food-text.png', categoria: 'Alimentação e Delivery' },
  { nome: 'McDonald’s', logo: 'https://i.pinimg.com/736x/3e/cb/a8/3ecba88bff841698cef03d71220adaf6.jpg', categoria: 'Alimentação e Delivery' },
  { nome: 'Lacoste', logo: 'https://i.pinimg.com/originals/ed/ac/43/edac4315fc32d6bf76c2e88807b189c6.jpg', categoria: 'Moda e Acessórios' },
  { nome: 'Drogasil', logo: 'https://logospng.org/wp-content/uploads/drogasil.png', categoria: 'Saúde e Farmácia' },
  { nome: 'Carrefour', logo: 'https://e7.pngegg.com/pngimages/854/353/png-clipart-logo-counter-carrefour-typography-font-logo-corel-draw-blue-text-thumbnail.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Gucci', logo: 'https://e7.pngegg.com/pngimages/379/839/png-clipart-gucci-logo-gucci-logo-fashion-logo-gucci-text-trademark.png', categoria: 'Moda e Acessórios' },
  { nome: 'Pandora', logo: 'https://e7.pngegg.com/pngimages/260/89/png-clipart-pandora-logo-pandora-logo-icons-logos-emojis-shop-logos.png', categoria: 'Moda e Acessórios' },
  { nome: 'Avon', logo: 'https://w7.pngwing.com/pngs/932/887/png-transparent-avon-products-logo-business-cosmetics-business-angle-text-people-thumbnail.png', categoria: 'Beleza e Cosméticos' },
  { nome: 'Starbucks', logo: 'https://logospng.org/wp-content/uploads/starbucks.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Centauro', logo: 'https://logospng.org/wp-content/uploads/centauro.png', categoria: 'Esporte e Lazer' },
  { nome: 'Samsung', logo: 'https://logodownload.org/wp-content/uploads/2014/01/samsung-logo-4.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Submarino', logo: 'https://logodownload.org/wp-content/uploads/2014/06/submarino-logo-1-1.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Ponto', logo: 'https://logodownload.org/wp-content/uploads/2021/04/ponto-logo-0.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Extra', logo: 'https://www.extra-imagens.com.br/HotSite/2015/manual-identidade/images/marca-extra-01.gif', categoria: 'Alimentação e Delivery' },
  { nome: 'Fast Shop', logo: 'https://logodownload.org/wp-content/uploads/2017/11/fast-shop-logo.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Americanas', logo: 'https://logodownload.org/wp-content/uploads/2019/10/americanas-logo-0.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Netshoes', logo: 'https://logodownload.org/wp-content/uploads/2020/02/netshoes-logo-0.png', categoria: 'Esporte e Lazer' },
  { nome: 'Aliexpress', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Aliexpress_logo.svg/2560px-Aliexpress_logo.svg.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Havan', logo: 'https://logodownload.org/wp-content/uploads/2015/05/havan-logo-0.png', categoria: 'Casa, Decoração e Utensílios' },
  { nome: 'Tok&Stok', logo: 'https://logodownload.org/wp-content/uploads/2019/11/tok-stok-logo-0.png', categoria: 'Casa, Decoração e Utensílios' },
  { nome: 'Etna', logo: 'https://sommelier.com.pe/wp-content/uploads/03_Etna.jpg', categoria: 'Casa, Decoração e Utensílios' },
  { nome: 'Pernambucanas', logo: 'https://logodownload.org/wp-content/uploads/2014/07/pernambucanas-logo.png', categoria: 'Moda e Acessórios' },
  { nome: 'Ri Happy', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/RIHAPPY_Logo.svg/2560px-RIHAPPY_Logo.svg.png', categoria: 'Bebê e Criança' },
  { nome: 'Camicado', logo: 'https://logodownload.org/wp-content/uploads/2020/01/camicado-logo-0.png', categoria: 'Casa, Decoração e Utensílios' },
  { nome: 'Decathlon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Decathlon_Logo.png/1200px-Decathlon_Logo.png', categoria: 'Esporte e Lazer' },
  { nome: 'Polishop', logo: 'https://logodownload.org/wp-content/uploads/2019/08/polishop-logo-1.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Motorola', logo: 'https://logodownload.org/wp-content/uploads/2014/10/motorola-logo-1-1.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Vivo', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRSnbu-b-VTVlPxS9DEq16cU_0qn8D6dcqg&s', categoria: 'Serviços e Financeiros' },
  { nome: 'Claro', logo: 'https://logospng.org/wp-content/uploads/claro.jpg', categoria: 'Serviços e Financeiros' },
  { nome: 'Tim', logo: 'https://www.logospng.org/wp-content/uploads/tim.jpg', categoria: 'Serviços e Financeiros' },
  { nome: 'Amazon Fresh', logo: 'https://toppng.com/uploads/preview/amazon-fresh-logo-png-clipart-stock-amazon-echo-the-updated-2017-guide-book-11563015258zawsl9ls9d.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Riachuelo', logo: 'https://vetores.org/wp-content/uploads/riachuelo.png', categoria: 'Moda e Acessórios' },
  { nome: 'Youcom', logo: 'https://publicimages.brmalls.com.br/shoppings/ATEA-EW2LK.jpeg', categoria: 'Moda e Acessórios' },
  { nome: 'Arezzo', logo: 'https://logospng.org/wp-content/uploads/arezzo.png', categoria: 'Moda e Acessórios' },
  { nome: 'Melissa', logo: 'https://logospng.org/wp-content/uploads/melissa.png', categoria: 'Moda e Acessórios' },
  { nome: 'Schutz', logo: 'https://logospng.org/download/schutz/logo-schutz-1024.png', categoria: 'Moda e Acessórios' },
  { nome: 'Vans', logo: 'https://logospng.org/wp-content/uploads/vans.jpg', categoria: 'Moda e Acessórios' },
  { nome: 'Converse', logo: 'https://w7.pngwing.com/pngs/821/119/png-transparent-converse-sneakers-chuck-taylor-all-stars-shoe-logo-company-logo-angle-text-triangle.png', categoria: 'Moda e Acessórios' },
  { nome: 'Puket', logo: 'https://e7.pngegg.com/pngimages/367/267/png-clipart-yellow-logo-brand-fundacao-sistel-de-seguridade-social-others-purple-text-thumbnail.png', categoria: 'Moda e Acessórios' },
  { nome: 'C&A', logo: 'https://w7.pngwing.com/pngs/347/970/png-transparent-c-a-logo-california-miscellaneous-company-text.png', categoria: 'Moda e Acessórios' },
  { nome: 'Reserva', logo: 'https://logodownload.org/wp-content/uploads/2020/02/reserva-logo-0.png', categoria: 'Moda e Acessórios' },
  { nome: 'Lojas Americanas Express', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF63TYq4bbAydMFb9djBB8pY1PFWF8q6eCzw&s', categoria: 'Serviços e Financeiros' },
  { nome: 'Drogaria São Paulo', logo: 'https://logospng.org/wp-content/uploads/drogaria-sao-paulo.png', categoria: 'Saúde e Farmácia' },
  { nome: 'Chilli Beans', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxX08V3Y6XS961q7uKBUa6Go7mdabOjzSxg&s', categoria: 'Moda e Acessórios' },
  { nome: 'Swift', logo: 'https://vetores.org/wp-content/uploads/swift.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Subway', logo: 'https://e7.pngegg.com/pngimages/278/320/png-clipart-subway-logo-sandwich-restaurant-food-subway-food-text.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Pizza Hut', logo: 'https://e7.pngegg.com/pngimages/259/572/png-clipart-logo-kfc-pizza-hut-scalable-graphics-pizza-text-trademark.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Pão de Açúcar', logo: 'https://upload.wikimedia.org/wikipedia/pt/d/dd/Logomarca_do_P%C3%A3o_de_A%C3%A7%C3%BAcar_%28supermercado%29.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Carrefour Express', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxEXkl8onHb1jgbPJMSI9Cmo6-ehJ37TMOA&s', categoria: 'Alimentação e Delivery' },
  { nome: 'Roldão Atacadista', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sJzg-sdVX2vOyADAWti2GK-UorffcrugXQ&s', categoria: 'Alimentação e Delivery' },
  { nome: 'Assaí Atacadista', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoNQHH2v_q6JvQhjYqgeqIShewMAhX99ywA&s', categoria: 'Alimentação e Delivery' },
  { nome: 'Droga Raia', logo: 'https://images.seeklogo.com/logo-png/24/1/droga-raia-logo-png_seeklogo-243034.png', categoria: 'Saúde e Farmácia' },
  { nome: "L'Occitane", logo: 'https://logosmarcas.net/wp-content/uploads/2020/11/LOccitane-Logo.png', categoria: 'Beleza e Cosméticos' },
  { nome: 'Quem Disse, Berenice?', logo: 'https://i.pinimg.com/736x/b8/75/bb/b875bb276a0f62507c2f4c930e2641f2.jpg', categoria: 'Beleza e Cosméticos' },
  { nome: 'Osklen', logo: 'https://logodownload.org/wp-content/uploads/2019/08/osklen-logo-0.png', categoria: 'Moda e Acessórios' },
  { nome: 'Colcci', logo: 'https://logodownload.org/wp-content/uploads/2014/11/colcci-logo-0.png', categoria: 'Moda e Acessórios' },
  { nome: 'Hering', logo: 'https://logodownload.org/wp-content/uploads/2018/06/hering-logo-0.png', categoria: 'Moda e Acessórios' },
  { nome: 'Luigi Bertolli', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Images_luigi.png', categoria: 'Moda e Acessórios' },
  { nome: 'TNG', logo: 'https://gsobmidia.com.br/uploads/lojas/463/logo-tng-01_1705340987.png', categoria: 'Moda e Acessórios' },
  { nome: 'Kipling', logo: 'https://portaldasmalas.com.br/blog-portal/wp-content/uploads/2017/07/marcas-kipling-300x225.jpg', categoria: 'Moda e Acessórios' },
  { nome: 'Oakley', logo: 'https://images.seeklogo.com/logo-png/20/2/oakley-logo-png_seeklogo-201503.png', categoria: 'Moda e Acessórios' },
  { nome: "Bob’s", logo: 'https://logodownload.org/wp-content/uploads/2019/11/bobs-logo-1.png', categoria: 'Alimentação e Delivery' },
  { nome: "Domino’s Pizza", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Cinemark', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cinemark_logo.svg/2560px-Cinemark_logo.svg.png', categoria: 'Esporte e Lazer' },
  { nome: 'Petz', logo: 'https://logodownload.org/wp-content/uploads/2019/08/petz-logo-0.png', categoria: 'Pet Shop e Produtos para Animais' },
  { nome: 'Cobasi', logo: 'https://logodownload.org/wp-content/uploads/2021/03/cobasi-logo.png', categoria: 'Pet Shop e Produtos para Animais' },
  { nome: 'Livraria Cultura', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Livraria_Cultura_logo.svg/1280px-Livraria_Cultura_logo.svg.png', categoria: 'Educação e Livraria' },
  { nome: 'Saraiva', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Saraiva_logo_2022.png', categoria: 'Educação e Livraria' },
  { nome: 'Kalunga Express', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKNRfN6F4hRbaHghvRh0A2Pw_OiBqRJ4nFkg&s', categoria: 'Papelaria e Escritório' },
  { nome: 'Brastemp', logo: 'https://logodownload.org/wp-content/uploads/2014/03/brastemp-logo-0.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Consul', logo: 'https://logodownload.org/wp-content/uploads/2014/04/consul-logo-1.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Philco', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Philco_logo.svg/1280px-Philco_logo.svg.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Panasonic', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Panasonic_logo_(Blue).svg/2560px-Panasonic_logo_(Blue).svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Canon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Canon_wordmark.svg/1280px-Canon_wordmark.svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Sony_wordmark.svg/1280px-Sony_wordmark.svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'GoPro', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/GoPro_logo.svg/2560px-GoPro_logo.svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Intelbras', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Intelbras_logo.svg/2560px-Intelbras_logo.svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Multilaser', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Multilaser_logo.svg/2560px-Multilaser_logo.svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/LG_logo_(2015).svg/1280px-LG_logo_(2015).svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Philips', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Philips_logo.svg/1280px-Philips_logo.svg.png', categoria: 'Tecnologia e Eletrônicos' }
];

  const cidadesSP = [
    'Campinas', 'Hortolândia', 'Indaiatuba', 'Itatiba',
    'Paulínia', 'Pedreira', 'Sumaré', 'Valinhos', 'Vinhedo'
  ]

  // 1️⃣ Criar todas as lojas
  for (let i = 0; i < lojas.length; i++) {
    const cidade = cidadesSP[Math.floor(Math.random() * cidadesSP.length)]
    const endereco = `${cidade} - SP`

    await prisma.lOJA.create({
      data: {
        NOME_SOCIAL: `${lojas[i].nome} LTDA`,
        NOME_FANTASIA: lojas[i].nome,
        LOGO: lojas[i].logo,
        CNPJ: String(10000000000000 + i).padStart(14, '0'),
        TELEFONE_COMERCIAL: `11${String(900000000 + i).padStart(9, '0')}`,
        ENDERECO: endereco,
        CATEGORIA: lojas[i].categoria
      }
    })
  }

  console.log(`✅ ${lojas.length} lojas criadas com sucesso!`)

  // 2️⃣ Criar descontos para cada loja
  const todasLojas = await prisma.lOJA.findMany()

  for (const loja of todasLojas) {
    const descontosExistentes = await prisma.dESCONTOS.count({
      where: { ID_LOJA: loja.ID_LOJA },
    })

    if (descontosExistentes === 0) {
      const descontos = Array.from({ length: 3 }, () => gerarDesconto(loja))
      await prisma.dESCONTOS.createMany({ data: descontos })
      console.log(`✅ Criados 3 descontos para a loja: ${loja.NOME_FANTASIA}`)
    } else {
      console.log(`⏩ Loja ${loja.NOME_FANTASIA} já possui descontos, pulando...`)
    }
  }

  console.log('🎉 Seed finalizado com sucesso!')
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })