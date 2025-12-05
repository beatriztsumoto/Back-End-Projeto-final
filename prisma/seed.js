import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 🏷️ Categorias e produtos realistas
const categoriasComProdutos = {
  "Moda e Acessórios": [
  { nome: "Vestido Floral Longo", imagem: "https://img.ltwebstatic.com/v4/j/pi/2025/05/19/da/1747635291c61aa5027c7eedc255e01da7a3ecf2bf_thumbnail_405x.webp" },
  { nome: "Blusa Cropped Feminina", imagem: "https://www.youcom.com.br/_next/image?url=https%3A%2F%2Fimg.youcom.com.br%2FCustom%2FContent%2FProducts%2F11%2F38%2F1138545_blusa-solo-cropped-amplinha-101101151_l30_638557645588779749.webp&w=750&q=100" },
  { nome: "Calça Jeans Skinny", imagem: "https://vistadudalina.vtexassets.com/arquivos/ids/370009-1920-auto?v=638925308060070000&width=1920&height=auto&aspect=true" },
  { nome: "Jaqueta de Couro Sintético", imagem: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/lojamagoncouros/media/uploads/produtos/foto/nozjoefx/david-jaqueta-de-couro-legitimo-masculina-magon-couros-4.jpg" },
  { nome: "Saia Midi Plissada", imagem: "https://img.lojasrenner.com.br/item/929094632/original/2.jpg" },
  { nome: "Camiseta Oversized Masculina", imagem: "https://img.ltwebstatic.com/images3_spmp/2025/01/11/c1/1736534629d0c3eb08546ea7b994038621b1739154_thumbnail_405x.webp" },
  { nome: "Tênis Branco Casual", imagem: "https://www.usereise.com.br/cdn/shop/files/frete-gratis-shoppub.jpg?v=1744588191" },
  { nome: "Tênis Nike Air Max", imagem: "https://t-static.dafiti.com.br/dpKcgVnzuYPJef_-JaoDfWjyhkM=/fit-in/430x623/static.dafiti.com.br/p/nike-t%C3%AAnis-nike-air-max-excee-feminino-8156-36693841-1-zoom.jpg" },
  { nome: "Bota Feminina Cano Curto", imagem: "https://couropremium.com/cdn/shop/files/bota-feminina-cano-curto-confortavel-preto-34-968-412_859x.jpg?v=1710354192" },
  { nome: "Sandália Anabela", imagem: "https://t-static.dafiti.com.br/NgtwSgq-eK_K0chlX-m824dZdCA=/fit-in/430x623/static.dafiti.com.br/p/vizzano-sand%C3%A1lia-anabela-vizzano-espadrilhe-off-white-4394-26636731-1-zoom.jpg" },
  { nome: "Mochila de Couro", imagem: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/majorano/media/uploads/produtos/foto/ybkpovew/mochila-em-couro-preta1.jpg" },
  { nome: "Bolsa Tiracolo Pequena", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5bcme01ksviDNtkyILAdh66C9sUF_fvf5w&s" },
  { nome: "Boné Aba Reta", imagem: "https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/11/02/110212_bone-aba-reta-new-era-mbi22bon068134883_m1_637885629247036714.webp" },
  { nome: "Relógio de Pulso Masculino", imagem: "https://imgmarketplace.lojasrenner.com.br/20001/3839/7010704184670/7510708685185/0.jpeg" },
  { nome: "Óculos de Sol Feminino", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9h0J0WYP8aFij-wJECPVBwxVXYJHg7ER5Ng&s" },
  { nome: "Pulseira de Prata 925", imagem: "https://images.tcdn.com.br/img/img_prod/836588/pulseira_trancada_6_fios_prata_925_581_1_5150a0b7dc5ca87156dd46aa6dfa4217.jpg" },
  { nome: "Colar Dourado Minimalista", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWb3QrFIp_m697uzKKK3GQq7GTqQFQmTWkrA&s" },
  { nome: "Brinco Argola Média", imagem: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/joytojoy/media/uploads/produtos/foto/qouephph/brinco-argola-media-meia-lua-banhado-a-ouro-18k-01.jpeg" },
  { nome: "Carteira de Couro Masculina", imagem: "https://img.irroba.com.br/fit-in/2000x2000/filters:fill(fff):quality(80)/monbranc/catalog/2024/carteiras-2024/mb2006p/carteira-masculina-preto-couro-legitimo-monbran-dressyprancheta-1-copiar-3.jpg" },
  { nome: "Cinto Feminino Fino", imagem: "https://images.tcdn.com.br/img/img_prod/559497/cinto_feminino_fino_de_couro_com_fivela_dourada_1_5_cm_1071_1_933d773b6451084c03cb8ccd78adb915.jpg" },
  { nome: "Chapéu de Palha Verão", imagem: "https://kouk.com.br/cdn/shop/files/01.01_ac1dc2ec-da17-4368-95b5-820d4c2bda26.jpg?v=1734465010" },
  { nome: "Blazer Alfaiataria", imagem: "https://cdn.awsli.com.br/800x800/364/364933/produto/295917655/maxi-blazer-feminino-alfaiataria-linho-elastano-azul-g8l7gjvzr0.jpg" },
  { nome: "Short Jeans Desfiado", imagem: "https://cdn.awsli.com.br/800x800/2459/2459342/produto/165897147/5-(1)-c13cb3699d.jpg" },
  { nome: "Casaco Moletom Unissex", imagem: "https://images.tcdn.com.br/img/img_prod/1260641/casaco_moletom_oversized_marrom_unissex_1_20250815102639_8408caec7a13.jpeg" },
  { nome: "Meia Colorida Estampada", imagem: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfyxdqowc4xx45_tn.webp" },
  { nome: "Relógio Smartwatch", imagem: "https://images.tcdn.com.br/img/img_prod/1087072/relogio_smartwatch_x_watch_preto_com_alexa_1460_1_acdfd0a488affed854938b88c640670c.jpg" },
  { nome: "Tênis Esportivo Adidas", imagem: "https://assets.adidas.com/images/w_600,f_auto,q_auto/fb4c28cdca314d488ef5013fed683e16_9366/Tenis_Corrida_Runfalcon_5_Preto_JJ7823_01_00_standard.jpg" },
  { nome: "Camisa Polo Masculina", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtz4skqNoMiw03X-2lnsYn2F4A2dyygVk5w&s" },
  { nome: "Vestido de Festa Curto", imagem: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lnkoqzqu14uk59" },
  { nome: "Jaqueta Jeans Feminina", imagem: "https://www.revanche.com.br/media/catalog/product/cache/8e5872966dd88cc0e998d2d2c4eec43a/j/a/jaqueta-jeans-cropped-com-capuz-atacado-feminina-revanche-crom_nia1512003-_8_.jpg" },
  { nome: "Macacão Pantalona", imagem: "https://infinifashion.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/m/cm__86_.jpg" },
  { nome: "Saia Jeans Curta", imagem: "https://cdn.awsli.com.br/600x450/2459/2459342/produto/306725634/1--2--8hnb74zwor.jpg" },
  { nome: "Bolsa de Praia", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60EwG43VKMkQ9VtDdojXxIjPYijr--grYnw&s" },
  { nome: "Tênis All Star Branco", imagem: "https://acdn-us.mitiendanube.com/stores/003/723/478/products/img_9392_facetune_17-08-2021-14-59-57_jpg-8a47d6e34dbe21705116971116810514-1024-1024.jpeg" },
  { nome: "Luvas de Inverno", imagem: "https://m.media-amazon.com/images/I/91OIAJzcOIL.jpg" },
  { nome: "Touca de Lã Unissex", imagem: "https://images.yampi.me/assets/stores/lefipe/uploads/images/touca-gorro-de-la-para-inverno-lisa-unissex-quente-conforto-preto-65ecc9c224a6a-large.png" },
  { nome: "Blusa Canelada Manga Longa", imagem: "https://rosaprosa.cdn.magazord.com.br/img/2023/04/produto/4598/blusa-caneladada-feminina-rosa-prosa-14.png?ims=630x945" },
  { nome: "Calça Jogger Moletom", imagem: "https://bluhen.cdn.magazord.com.br/img/2023/06/produto/3800/calca-moletom-jogger-masculina-preto-escuro-inverno-outono-frio-masculino-algodao-passeio-esporte-esportiva-treino-academia-casual.png?ims=fit-in/425x635/filters:fill(white)" },
  { nome: "Vestido Midi Liso", imagem: "https://smk.vteximg.com.br/arquivos/ids/202848-1000-1500/20130556_060_1-SMK-VESTIDO-CASUAL-MIDI-MARTHA.jpg?v=638445625653400000" },
  { nome: "Bermuda Masculina Sarja", imagem: "https://images.tcdn.com.br/img/img_prod/857241/copia_bermuda_sarja_masculina_plus_size_sumaia_gabriel_809_1_2431ea1538d4df0c9694c4d770f75552.jpeg" }
],

  "Tecnologia e Eletrônicos": [
  { nome: "Smartphone Samsung Galaxy S23", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_881250-MLU78472529781_082024-F.webp" },
  { nome: "iPhone 15 Pro", imagem: "https://trocafone.vtexassets.com/arquivos/ids/378256-1200-auto?v=638737544246800000&width=1200&height=auto&aspect=true" },
  { nome: "Notebook Dell Inspiron i7", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_612216-MLA95687200890_102025-F.webp" },
  { nome: "Fone Bluetooth JBL Wave 200TWS", imagem: "https://images4.kabum.com.br/produtos/fotos/sync_mirakl/319394/xlarge/Fone-De-Ouvido-JBL-Wave-200-Tws-Bluetooth-Intra-auriculares-Preto-28913519_1740513039.jpg" },
  { nome: "Caixa de Som Alexa Echo Dot", imagem: "https://m.magazineluiza.com.br/a-static/420x420/echo-dot-5a-geracao-amazon-com-alexa-smart-speaker-preto-b09b8vgcr8/kabum/460471/b19eeef827d0b1d7acd2590b1a7b442c.jpeg" },
  { nome: "Tablet Samsung Galaxy Tab S9", imagem: "https://images4.kabum.com.br/produtos/fotos/sync_mirakl/505174/xlarge/Tablet-Samsung-Galaxy-Tab-S9-256GB-12GB-RAM-5G-WiFi-Tela-11-Android-13-Octa-Core-Marfim_1759997015.jpg" },
  { nome: "Monitor Gamer LG Ultrawide", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_673178-MLA95693493312_102025-F.webp" },
  { nome: "Smartwatch Amazfit Bip 5", imagem: "https://m.media-amazon.com/images/I/61pksVxKn7L._AC_SX679_.jpg" },
  { nome: "Teclado Mecânico Redragon Kumara", imagem: "https://images0.kabum.com.br/produtos/fotos/93160/93160_1523969683_index_gg.jpg" },
  { nome: "Mouse Gamer Logitech G Pro", imagem: "https://images9.kabum.com.br/produtos/fotos/149989/mouse-sem-fio-gamer-logitech-g-pro-x-superlight-lightspeed-25000-dpi-5-botoes-preto-910-005879_1727272012_gg.jpg" },
  { nome: "Câmera GoPro Hero 12", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlPF8Df_H-2YNsqpOKYFaJCguAPsQn9j3Zg&s" },
  { nome: "Headset HyperX Cloud II", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvbKPAT4mQmteFxp8YFemKLCwEDO0vCrFHA&s" },
  { nome: "Smart TV LG 50 Polegadas 4K", imagem: "https://a-static.mlcdn.com.br/470x352/smart-tv-4k-led-50-lg-50um7360psa-wi-fi-inteligencia-artificial-controle-smart-magic/magazineluiza/193430000/ab595f22a21efa7b7f3fd92072aa0cc7.jpg" },
  { nome: "HD Externo 2TB Seagate", imagem: "https://m.media-amazon.com/images/I/51ctZMlK-LL.jpg" },
  { nome: "Pendrive SanDisk 64GB", imagem: "https://img.kalunga.com.br/fotosdeprodutos/253538z_3.jpg" },
  { nome: "Webcam Logitech C920", imagem: "https://m.media-amazon.com/images/I/71eGb1FcyiL.jpg" },
  { nome: "Carregador Portátil Powerbank 20.000mAh", imagem: "https://static.kadri.com.br/produto/106113-MAIN.png" },
  { nome: "Console PlayStation 5", imagem: "https://m.media-amazon.com/images/I/51+qnZm7V7L.jpg" },
  { nome: "Controle Xbox Series X", imagem: "https://cms-assets.xboxservices.com/assets/27/e5/27e54205-f444-42b8-886c-7a7f5069d02a.jpg?n=Xbox-Wireless-Controller_Image-Hero-768_957848-1_1920x831_01.jpg" },
  { nome: "Placa de Vídeo RTX 4060", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxoeX360wtoGeu8e5hpN5j2okGNXTltp_0EQ&s" },
  { nome: "Roteador TP-Link Wi-Fi 6", imagem: "https://images.kabum.com.br/produtos/fotos/384400/roteador-wifi-6-tp-link-ax3000-padrao-ac-2976mbps-dual-band-4-antenas-archer-ax53_1662747479_gg.jpg" },
  { nome: "Impressora Multifuncional Epson EcoTank", imagem: "https://m.media-amazon.com/images/I/818P+qYvSHS.jpg" },
  { nome: "Drone DJI Mini 4 Pro", imagem: "https://m.media-amazon.com/images/I/51YDGGsBOCL.jpg" },
  { nome: "Câmera de Segurança Intelbras Wi-Fi", imagem: "https://eletrorastro.fbitsstatic.net/img/p/camera-de-seguranca-wifi-full-hd-360%C2%B0-im7-intelbras-96464/287168.jpg?w=800&h=800&v=no-change&qs=ignore" },
  { nome: "Caixa de Som JBL Flip 6", imagem: "https://m.media-amazon.com/images/I/61pVu6ootbL._AC_UF1000,1000_QL80_.jpg" }
],

"Casa, Decoração e Utensílios": [
  { nome: "Sofá Retrátil 3 Lugares", imagem: "https://static.mobly.com.br/p/Mobly-SofC3A1-3-Lugares-RetrC3A1til-e-ReclinC3A1vel-Lupin-Linho-Cru-214-cm-8025-5391811-10.jpg" },
  { nome: "Cortina Blackout 2,80m", imagem: "https://images.yampi.me/assets/stores/eddicasa/uploads/images/cortina-blackout-pvc-com-tecido-voil-280-m-x-230-m-avela-62e91a5b358e2-medium.jpg" },
  { nome: "Jogo de Panelas Tramontina 5 Peças", imagem: "https://m.media-amazon.com/images/I/61nYWmn3EOL._AC_SX679_.jpg" },
  { nome: "Tapete Shaggy 2x3m", imagem: "https://m.media-amazon.com/images/I/91cAEevnSrL._AC_SX679_.jpg" },
  { nome: "Kit Organizadores de Gaveta", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_784253-MLA93968883763_102025-F.webp" },
  { nome: "Espelho Decorativo Redondo", imagem: "https://m.magazineluiza.com.br/a-static/420x420/espelho-redondo-de-mesa-alca-em-couro-60cm-c-pino-suporte-rei-dos-vidros/reidosvidrosnet/15846948215/6e3536f64214b475feb147c794e33e42.jpeg" },
  { nome: "Relógio de Parede Moderno", imagem: "https://casaamarella.com.br/cdn/shop/files/Sf58e2928e9cb41948d5c2e059b48e0ffL.jpg?v=1695229100&width=800" },
  { nome: "Abajur de Mesa Madeira", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_776297-MLB93711821532_102025-F-luminaria-abajur-de-mesa-quarto-sala-moderno.webp" },
  { nome: "Quadro Decorativo Floral", imagem: "https://casalinda.cdn.magazord.com.br/img/2024/02/produto/13029/sem-borda.png?ims=fit-in/800x800/filters:fill(white)" },
  { nome: "Colcha Queen 3 Peças", imagem: "https://dohler.vtexassets.com/arquivos/ids/166570-1200-auto?v=638603879575700000&width=1200&height=auto&aspect=true" },
  { nome: "Travesseiro de Fibra Siliconada", imagem: "https://images.tcdn.com.br/img/img_prod/842194/travesseiro_fibra_de_silicone_casa_di_valle_suporte_extra_firme_50_x_70_cm_153_2_64c28d0b5ffd99eac7d644c47e59ac7a.jpg" },
  { nome: "Prateleira de Madeira Rústica", imagem: "https://www.marcenarianavarro.com.br/upload/projetos-galeria/original/T_0_S5wGML5Ja09.jpg" },
  { nome: "Jogo de Toalhas de Banho", imagem: "https://shopcama.vteximg.com.br/arquivos/ids/401156-650-650/Jogo-de-Toalhas-de-Banho-4-Pecas-Jacquard-Trento-Corttex-Branca-Cinza.jpg?v=638564161289070000" },
  { nome: "Cadeira de Jantar Estofada", imagem: "https://decoreibem.cdn.magazord.com.br/img/2023/09/produto/563/cadeira-de-jantar-lisboa-estofada-decorei-bem.jpg?ims=600x600" },
  { nome: "Mesa Lateral de Apoio", imagem: "https://dkadidecor.cdn.magazord.com.br/img/2024/04/produto/7090/01-mesa-de-apoio-lateral-oval-bel-100-mdf-off-white.jpeg" },
  { nome: "Kit Potes Herméticos Cozinha", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9097DQcuHWqJ5tgjEy0cXyZ7A-gWiQeCbw&s" },
  { nome: "Cesto de Roupa Dobrável", imagem: "https://cdn.awsli.com.br/2500x2500/19/19830/produto/19903584/f9571463cb.jpg" },
  { nome: "Jogo de Copos de Vidro", imagem: "https://images.tcdn.com.br/img/img_prod/584235/jogo_6_copos_de_vidro_dubai_530ml_nadir_438983924_1_fa43134db4641243d973ca699f9d5221_20250317123318.jpg" }
],

  "Eletrodomésticos e Móveis": [
  { nome: "Geladeira Brastemp Frost Free 400L", imagem: "https://www.frigelar.com.br/ccstore/v1/images/?source=/file/v3805366089731048195/products/kit9201_1.jpg&height=600&width=900" },
  { nome: "Fogão 4 Bocas Atlas", imagem: "https://carrefourbr.vtexassets.com/arquivos/ids/205352311/image-0.jpg?v=638965644181600000" },
  { nome: "Micro-ondas Electrolux 20L", imagem: "https://m.magazineluiza.com.br/a-static/420x420/micro-ondas-electrolux-20l-cor-inox-espelhado-com-funcao-tira-odor-mt30s/electrolux/2001808/e48dfd9ecc506084ec8dd9ba28ea6d3f.jpeg" },
  { nome: "Máquina de Lavar 12kg", imagem: "https://imgs.casasbahia.com.br/1547004091/1xg.jpg?imwidth=500" },
  { nome: "Cafeteira Nespresso Essenza", imagem: "https://m.media-amazon.com/images/I/51QP72LhToL._AC_SX679_.jpg" },
  { nome: "Liquidificador Philips Walita", imagem: "https://imgs.casasbahia.com.br/55067671/1g.jpg?imwidth=500" },
  { nome: "Aspirador de Pó Vertical", imagem: "https://m.media-amazon.com/images/I/61Jk2TCU8NL._AC_SL1500_.jpg" },
  { nome: "Fritadeira Airfryer 4L", imagem: "https://www.midea.com.br/_next/image?url=https%3A%2F%2Fmideabr.vtexassets.com%2Farquivos%2Fids%2F168249%2F01.Fritadeira-MAF400P0APK1.MAF400P0APK2-Frente.jpg%3Fv%3D638471399773070000&w=1440&q=90" },
  { nome: "Sofá Retrátil 3 Lugares", imagem: "https://mpozenato.fbitsstatic.net/img/p/sofa-retratil-e-reclinavel-3-lugares-200cm-viena-a12-suede-cinza-mpozenato-111872/277804-1.jpg?w=1000&h=1000&v=no-value" },
  { nome: "Mesa de Jantar 4 Cadeiras", imagem: "https://homedock.com.br/cdn/shop/files/Bege-Moveis-Provincia-314999518.jpg?v=1753100523&width=1100" },
  { nome: "Cama Box Casal", imagem: "https://images.tcdn.com.br/img/img_prod/1083165/cama_box_casal_molas_max_force_perola_bege_fortezza_6369_1_a886a88d89447e7b0263524087ded9c2.jpg" },
  { nome: "Colchão Ortobom Casal", imagem: "https://mpozenato.fbitsstatic.net/img/p/colchao-casal-highfoam-bordado-espuma-hr45-138x188x28cm-ortobom-140885/305531-1.jpg?w=1000&h=1000&v=202501231556" },
  { nome: "Guarda-Roupa 6 Portas", imagem: "https://imgs.casasbahia.com.br/1565187474/1xg.jpg?imwidth=500" },
  { nome: "Ventilador de Mesa 40cm", imagem: "https://images.tcdn.com.br/img/img_prod/1153563/ventilador_de_mesa_turbo_6p_40cm_preto_220v_ventisol_1779_1_cf490d424653134d98bb8706244f6003.jpg" },
  { nome: "Ferro de Passar a Vapor", imagem: "https://lojaarno.vtexassets.com/arquivos/ids/164822-800-auto?v=638564141395970000&width=800&height=auto&aspect=true" },
  { nome: "Batedeira Planetária", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOIAYWbxh1h7D5blxHVEEq7gFp9MKp7Xh0-w&s" },
  { nome: "Panela de Pressão Elétrica", imagem: "https://m.media-amazon.com/images/I/51429bjUOCL._AC_UF894,1000_QL80_.jpg" },
  { nome: "Aquecedor de Ar Elétrico", imagem: "https://images.tcdn.com.br/img/img_prod/784214/aquecedor_ab1200w_127v_64701019_britania_17705_5_d037a0940675239e8b64e1895d8f1719.png" },
  { nome: "Torradeira Elétrica", imagem: "https://electrolux.vtexassets.com/arquivos/ids/212403/Toaster_ETS25_Perspective_Electrolux_1000x1000_principal.jpg?v=638872565857530000" },
  { nome: "Aparador de Barba Philips", imagem: "https://gazin-images.gazin.com.br/48uM-1AKcLtmS0aht2GL9Vo976o=/1920x/filters:format(webp):quality(75)/https://gazin-marketplace.s3.amazonaws.com/midias/imagens/2020/08/aparador-de-pelos-philips-multigroom-series-3000-resistente-a-agua-112008092905.jpg" }
],

  "Beleza e Cosméticos": [
  { nome: "Base Líquida Matte Vult", imagem: "https://m.media-amazon.com/images/I/51qX7vHs4ML._AC_SY300_SX300_QL70_ML2_.jpg" },
  { nome: "Batom Vermelho Intenso", imagem: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw060db7ce/Produtos/NATBRA-87468_1.jpg" },
  { nome: "Perfume Carolina Herrera 212", imagem: "https://m.media-amazon.com/images/I/5123vOIh3DL._AC_SX679_.jpg" },
  { nome: "Paleta de Sombras Ruby Rose", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_992559-MLB91636482979_092025-F-paleta-de-sombras-falling-leaves-ruby-rose.webp" },
  { nome: "Máscara de Cílios Maybelline", imagem: "https://m.media-amazon.com/images/I/51rTd-hhlGL._AC_SY300_SX300_QL70_ML2_.jpg" },
  { nome: "Creme Hidratante Nivea", imagem: "https://drogariasp.vteximg.com.br/arquivos/ids/1185468-500-500/631400_0007_67352768278e880014755394_1.png.png?v=638693498112100000" },
  { nome: "Protetor Solar FPS 50", imagem: "https://m.media-amazon.com/images/I/61m3UNkGFmL._AC_SX679_.jpg" },
  { nome: "Esmalte Colorama Nude", imagem: "https://epocacosmeticos.vteximg.com.br/arquivos/ids/330981-450-450/Nude.jpg?v=636904129019570000" },
  { nome: "Kit Pincéis de Maquiagem", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_638039-MLB93425550662_092025-F-kit-pinceis-necessaire-hello-kitty-klass-vough.webp" },
  { nome: "Sabonete Facial Neutrogena", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Rge-R3iqhEBY5psJwCRIg6c1llVT38_ptA&s" },
  { nome: "Shampoo L’Oréal Professionnel", imagem: "https://epocacosmeticos.vteximg.com.br/arquivos/ids/537948-800-800/loreal-professionnel-pro-longer-shampoo-reparador-300ml--1-.jpg?v=638131899891700000" },
  { nome: "Condicionador Dove Nutritivo", imagem: "https://www.drogariaminasbrasil.com.br/media/webp/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/image/5366107c9/condicionador-dove-oleo-nutricao-400ml_jpg.webp" },
  { nome: "Óleo Capilar Moroccanoil", imagem: "https://br.moroccanoil.com/cdn/shop/files/MO_Treatment.jpg?v=1687867966&width=1946" },
  { nome: "Creme Anti-Idade Nivea Q10", imagem: "https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F10725252.webp&w=3840&q=40" },
  { nome: "Desodorante Rexona Clinical", imagem: "https://product-data.raiadrogasil.io/images/3536706.webp" },
  { nome: "Bálsamo Pós-Barba Gillette", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNS4j57-XUdRNCHVNgj-bq_j6UgaKs0gb6Hg&s" },
  { nome: "Kit Skincare Completo", imagem: "https://www.bcmed.com.br/upload/produto/imagem/kit-skincare-completo-presente-brinde-eccos-cosm-ticos.webp" },
  { nome: "Perfume Dior Sauvage", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJQK1ZDx-aDQCDw0DF6LElsWjL5TbNTCtiw&s" }
],

  "Saúde e Farmácia": [
  { nome: "Suplemento Vitamínico Centrum Mulher", imagem: "https://drogariasp.vteximg.com.br/arquivos/ids/1178774-1000-1000/729418---Suplemento-Vitaminico-Centrum-Essentials-Mulher-de-A-a-Zinco-30-Comprimidos_0004_7896009498657_1.png.png?v=638670133379930000" },
  { nome: "Protetor Solar Nivea Sun FPS 60", imagem: "https://drogal.vtexassets.com/arquivos/ids/265674-1200-900?v=638920059888570000&width=1200&height=900&aspect=true" },
  { nome: "Termômetro Digital G-Tech", imagem: "https://images.tcdn.com.br/img/img_prod/746795/termometro_clinico_digital_th1027_g_tech_3238_1_f32194c94517d117a5c5586be4b02245_20240715151213.jpg" },
  { nome: "Aparelho de Pressão Omron Automático", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_991223-MLA87311670704_072025-F.webp" },
  { nome: "Máscara Descartável Tripla Proteção", imagem: "https://cdn.utilidadesclinicas.com.br/produtos/550/mascara-descartavel-tripla-com-clipe-nasal-branca-spp-27856a.jpg" },
  { nome: "Álcool em Gel Antisséptico 500ml", imagem: "https://img.kalunga.com.br/fotosdeprodutos/324307d.jpg" }
],

  "Alimentação e Delivery": [
  { nome: "Pizza Grande Calabresa", imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvbigSE9HdCcD88Q_tYiApJaMBhleORe6nQ377UnlCRnrYE-PSiNwtpFjAr-6lv74dF8zgkvTUZy12UdM6HLhxlj_KoZuiXepwXwMxXGY" },
  { nome: "Hambúrguer Duplo com Queijo", imagem: "https://cdn.nsite.com.br/uploads/2350/product/photo_60b7cd4223936.jpeg" },
  { nome: "Sushi Combo 20 Peças", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqXG3e5Hz2xWNgRKMsnC18c6ZAJLXvE32Vg&s" },
  { nome: "Açaí com Granola 500ml", imagem: "https://storage.deliveryvip.com.br/HJC5pDWdhYXfDBUt_vT01dK8EQp4C99eOJXbKUqE9KU/h:256/Z3M6Ly9kZWxpdmVy/eXZpcC8xYWNvczJo/aHI1cmZia3VsOXk0/cjRoeGk0Y2Zn" },
  { nome: "Marmita Fit Frango e Batata Doce", imagem: "https://acdn-us.mitiendanube.com/stores/002/491/154/products/file-de-frango-c-batata-doce11-4afbc2dc4f5e7d605716855622293813-640-0.webp" },
  { nome: "Coxinha de Frango com Catupiry", imagem: "https://salgadosparavender.com.br/wp-content/uploads/2024/05/coxinha-de-frango-com-catupiry.webp" },
  { nome: "Brownie de Chocolate Artesanal", imagem: "https://www.estadao.com.br/resizer/v2/AVCDNFW4ERIQBBMXF33MLHKNSU.jpg?quality=80&auth=b4945d0bbe684c6919218d0cb630195728f9e49a11a19ae82d0aaa5b1378b7c9&width=1200" },
  { nome: "Refrigerante Lata 350ml", imagem: "https://sachefmio.blob.core.windows.net/fotos/refrigerante-lata-350ml-98091.jpg" },
  { nome: "Suco Natural de Laranja 500ml", imagem: "https://static.wixstatic.com/media/1fa9c4_3b5df73805534103a274350581b31dd2~mv2.jpg/v1/fill/w_520,h_354,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1fa9c4_3b5df73805534103a274350581b31dd2~mv2.jpg" },
  { nome: "Lasanha à Bolonhesa", imagem: "https://guiadacozinha.com.br/wp-content/uploads/2014/01/lasanha-bolonhesa-na-pressao.jpg" },
  { nome: "Esfiha Aberta de Carne", imagem: "https://blog.biglar.com.br/wp-content/uploads/2022/10/iStock-537521984-1.jpeg" },
  { nome: "Hot Dog Completo", imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/d91d2793afc1e2281971343ae9f4138f_L.jpg" },
  { nome: "Sorvete Artesanal 2 Sabores", imagem: "https://placehold.co/300x300?text=Sorvete+Artesanal+2+Sabores" },
  { nome: "Tapioca de Queijo com Coco", imagem: "https://painacozinha.com/wp-content/uploads/294.Tapioca-de-Queijo-com-Coco.webp" },
  { nome: "Combo Pastel e Caldo de Cana", imagem: "https://i0.wp.com/bernadetealves.com/wp-content/uploads/2021/12/Pastel-e-caldo-de-cana-combinacao-que-resiste-ao-tempo-e-movimenta-a-economia-Bernadete-Alves.jpg?fit=1448%2C778&ssl=1" },
  { nome: "Café Espresso + Pão de Queijo", imagem: "https://media-cdn.tripadvisor.com/media/photo-s/0c/1a/18/35/pao-de-queijo-e-cafe.jpg" },
  { nome: "Salgados Sortidos 25 Unidades", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cPVndxnwdnHiH3gTVOYDa6d_UuPDiCHh9A&s" },
  { nome: "Torta de Frango Caseira", imagem: "https://guiadacozinha.com.br/wp-content/uploads/2020/11/Torta-de-frango-de-liquidificador.jpg" },
  { nome: "Pão Artesanal Integral", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi597Ni7HL583CygxXRIYn618_gQDX4fhdGA&s" },
  { nome: "Batata Frita com Cheddar e Bacon", imagem: "https://minhasreceitinhas.com.br/wp-content/uploads/2017/06/Batatosa-scaled.jpg" },
  { nome: "Crepe Doce de Morango e Chocolate", imagem: "https://www.comidaereceitas.com.br/wp-content/uploads/2020/10/crepe_chocolate-780x450.jpg" },
  { nome: "Combo Sushi e Yakisoba", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrSic3OUrwt7u0UcTMsjh1q1KJKaeuUpGcQ&s" },
  { nome: "Macarrão à Carbonara", imagem: "https://renata.com.br/images/receitas/5/renata-imagem-receitas-macarrao-ao-molho-carbonara-share.jpg" },
  { nome: "Frango Frito Crocante 10 Unidades", imagem: "https://receitatodahora.com.br/wp-content/uploads/2024/09/frango-frito-crocante-0609.jpg" },
  { nome: "Panqueca de Carne com Molho", imagem: "https://s2-receitas.glbimg.com/FZCchDODWWJFpc9bPfcJhmfIq-A=/0x0:5472x3648/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/3/P/HV1MmWRteNAq7NwsCUHQ/panqueca-de-carne-moida-com-molho-de-tomate.jpg" },
  { nome: "Milkshake de Ovomaltine 500ml", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZrpjniOMtCJ07_dgVOqAudzC5fzvdRmCLuw&s" },
  { nome: "Salada Caesar com Frango", imagem: "https://cdn0.tudoreceitas.com/pt/posts/0/9/2/salada_caesar_com_frango_e_croutons_1290_orig.jpg" },
  { nome: "Empadão de Frango com Catupiry", imagem: "https://guiadacozinha.com.br/wp-content/uploads/2019/10/empadao-frango-tradicional-catupiry.jpg" },
  { nome: "Combo Hambúrguer + Refrigerante", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OJrYUX1gJ7pZKqtanyfy3RpVx-MxKux5_HxhwmcYPKnuI2s-5A61NMeLFr1tofyr-VA&s" },
  { nome: "Tábua de Frios Premium", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5JRpkPvrPmjn-C2H-QpnQ3gGRnceqEt9EA&s" }
],

  "Esporte e Lazer": [
  { nome: "Bola de Futebol Adidas Oficial", imagem: "https://m.magazineluiza.com.br/a-static/420x420/bola-de-futebol-campo-adidas-adiversal/netshoes/fb8-9405-014-01/0aa2ecbbb140ec16577fc1f3ebc909ca.jpeg" },
  { nome: "Bicicleta Caloi Aro 29", imagem: "https://m.magazineluiza.com.br/a-static/420x420/bicicleta-aro-29-colli-nantes-aco-carbono-21-marchas/magazineluiza/237943700/3dea703b319c7cd11de78b8f1374d790.jpg" },
  { nome: "Tênis de Corrida Asics Gel", imagem: "https://imgcentauro-a.akamaihd.net/800x800/990051X8A8.jpg" },
  { nome: "Colchonete para Yoga", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_651735-MLA95532844312_102025-F.webp" },
  { nome: "Raquete de Tênis Wilson", imagem: "https://static.prospin.com.br/media/catalog/product/cache/405628f615b5edf579edd0ef4cc16c7a/w/r/wrt301400-raquete-de-tenis-wilson-advantage-xl-preta-e-limao_1.jpg" },
  { nome: "Kit Halteres 10kg", imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRTCddt2vRNXd2XBFqHE99jqD2k1Zrc-PcF0n90E_OY1Nj9wyUvUoj2jM4OV3F7aU34l1v7yyx-I4b4OjqNupbi8S6FBoQ3lKGqhdEBThMT2_ATRO7DwAEpQQECgS2yPFmMnJfFJ80BFw&usqp=CAc" },
  { nome: "Mochila Esportiva Nike", imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSl1M87M6BqH70nMeXlfv5ZwSvO2A-h7n8hsEsjWWGJ4BR-axmgGGIuD5RxYGMBIcrXYK7D9aKhHp7EedjGyd-a5CG0LUd0BijEHMb_ABH2E6piPiNP6bw9vQ" },
  { nome: "Óculos de Natação Speedo", imagem: "https://m.media-amazon.com/images/I/51FSZMFy07L._AC_SY300_SX300_QL70_ML2_.jpg" },
  { nome: "Camiseta Dry Fit Adidas", imagem: "https://images.tcdn.com.br/img/img_prod/1053679/camiseta_adidas_dry_fit_branca_gm2156_3255_1_bcdaaecb19740115d050adcfff0d3594.jpg" },
  { nome: "Skate Completo Profissional", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_680166-MLB89291097918_082025-F-skate-completo-profissional-montado-maple-street-abec7.webp" },
  { nome: "Corda de Pular Emborrachada", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_967556-MLA93507256453_092025-F.webp" },
  { nome: "Barraca de Camping 4 Pessoas", imagem: "https://imgs.casasbahia.com.br/5186233/1xg.jpg?imwidth=1000" }
],

  "Pet Shop e Produtos para Animais": [
  { nome: "Ração Premium Cães Adultos 10kg", imagem: "https://cobasi.vteximg.com.br/arquivos/ids/1037683-368-368/Choice-Frango-e-Carne-Caes-Adultos-Frente.jpg?v=638793634478100000" },
  { nome: "Areia Higiênica Gatos 4kg", imagem: "https://cobasi.vteximg.com.br/arquivos/ids/1065082-368-368/areia-higienica-kets-gatissimo-4kg.jpg?v=638690954771700000" },
  { nome: "Brinquedo Mordedor Cães", imagem: "https://images.petz.com.br/fotos/1664479135165.jpg" },
  { nome: "Coleira Antipulgas Bayer", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_773069-MLB88713337866_072025-F.webp" }
],

  "Educação e Livraria": [
  { nome: "Livro: O Pequeno Príncipe", imagem: "https://cdn.awsli.com.br/300x300/1821/1821095/produto/331119543/1650545533-livro-o-pequeno-principe-antoine-de-saint-exupery-editora-harpercolli-fttskaq86j.jpg" },
  { nome: "Caderno Universitário 200 folhas", imagem: "https://m.media-amazon.com/images/I/41vFvyET7WL._AC_UF894,1000_QL80_.jpg" },
  { nome: "Dicionário de Português Moderno", imagem: "https://m.media-amazon.com/images/I/51nJlorba4L._AC_UF1000,1000_QL80_.jpg" },
  { nome: "Curso Online de Programação Web", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mKKgcb7cqLQEwc9NqqceLmqsWhHaReSUsg&s" }
],

  "Bebê e Criança": [
  { nome: "Carrinho de Bebê Galzerano Maranello", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_705358-MLA96149192489_102025-F.webp" },
  { nome: "Kit Mamadeira Avent Philips", imagem: "https://m.media-amazon.com/images/I/51+lIzLoNQL._AC_SX679_.jpg" },
  { nome: "Brinquedo Educativo de Montar", imagem: "https://cdn.awsli.com.br/405/405408/produto/221091479/2-70taufn6f1.png" }
],

  "Papelaria e Escritório": [
  { nome: "Caneta Esferográfica Azul Bic", imagem: "https://imagens.gimba.com.br/objetosmidia/ExibirObjetoMidia?Id=295454" },
  { nome: "Agenda 2025 Capa Dura", imagem: "https://down-br.img.susercontent.com/file/br-11134258-7r98o-mbpr92sw6g6132" },
  { nome: "Pacote de Folhas A4 500 Unidades", imagem: "https://centerlar.vtexassets.com/arquivos/ids/161641-1200-1200?v=638902746710170000&width=1200&height=1200&aspect=true" },
  { nome: "Grampeador Metálico Pequeno", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_790614-MLA93509139981_092025-F.webp" }
],

"Serviços e Financeiros": [
  { nome: "Plano de Saúde Familiar", imagem: "https://static.wixstatic.com/media/f063d9_d408fc7b56f34b0a9f9bb8f7e00c2279~mv2.png/v1/fill/w_2500,h_2500,al_c/f063d9_d408fc7b56f34b0a9f9bb8f7e00c2279~mv2.png" },
  { nome: "Seguro Automotivo Completo", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFB8BCgROuwnmuY22gL00QyQbj5gUMv1DXwg&s" },
  { nome: "Curso de Inglês Online", imagem: "https://portalpadrao.ufma.br/site/noticias/ageufma-promove-curso-de-ingles-on-line-e-gratuito-para-toda-a-comunidade-academica/curso-online-gratuito.png/@@images/828b5ada-ae30-4196-97cc-460e65e95f17.png" },
  { nome: "Consultoria Financeira Pessoal", imagem: "https://cdn1.vintepila.com.br/arquivos/2020/03/30183034/Folder-2.jpeg" },
  { nome: "Plano de Academia Mensal", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUje6b0um-I55UVGbXOOjcZA7r_AmLSLuMeg&s" },
  { nome: "Serviço de Streaming Anual", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJPrFNJ8dqhSIKMKx4gh6NtEJwCVTXuTnJA&s" },
  { nome: "Revisão de Currículo Profissional", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhOgi_s9v485dAbpLuJGDX73zlwron9T_iyw&s" },
  { nome: "Seguro Viagem Internacional", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfwEneKdaE5n6Twhd9Pbx2By0Efu7M9OFgw&s" },
  { nome: "Curso de Marketing Digital", imagem: "https://m.media-amazon.com/images/I/61MMaNT1AJL._AC_UF1000,1000_QL80_.jpg" },
  { nome: "Consultoria Jurídica Online", imagem: "https://img.cdndsgni.com/preview/10405443.jpg" },
  { nome: "Serviço de Limpeza Residencial", imagem: "https://houseshine.com.br/imagens/HouseShine_residencial.jpg" },
  { nome: "Plano de Internet Fibra 500MB", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjmftd9vt-Bja-xEVKWJ2OlCldDNk56Mn7g&s" },
  { nome: "Manutenção de Computadores", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudQ-OxNh2fLaICb9PBpnQVAxbgVnUpxAKIA&s" },
  { nome: "Aulas Particulares Online", imagem: "https://freelaweb.com.br/wp-content/uploads/2023/02/Aula-Particular-10.png" },
  { nome: "Assessoria Contábil Mensal", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZLQuiSBnnTCiltzClcoquqMFt9MjmQwjjQ&s" },
  { nome: "Curso de Finanças Pessoais", imagem: "https://static-media.hotmart.com/fx3YpEUWMD0i7RL5eLB4L8Y5JfY=/filters:background_color(white)/hotmart/product_pictures/194ad130-fa21-4c9f-ba5f-aeec065bc487/cursosbannerinvencivelFINANCAS.png" },
  { nome: "Consultoria de Imagem e Estilo", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQtL29FFBFwfVCxMRCxFtIUUXQi61iHjkUw&s" },
  { nome: "Serviço de Entrega Expressa", imagem: "https://www.reexpress.com.br/images/Motoboy-esporadico.webp" }
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

// 🧾 Modelos de cupons (50 variações realistas)
const modelosDeCupons = [
  { titulo: "10% OFF em toda a loja {LOJA}", descricao: "Aproveite 10% de desconto em qualquer compra feita na {LOJA}. Válido por tempo limitado!" },
  { titulo: "15% OFF em produtos selecionados da {LOJA}", descricao: "Desconto especial de 15% em itens selecionados da {LOJA}. Não perca!" },
  { titulo: "Frete grátis nas compras acima de R$99 na {LOJA}", descricao: "Economize no frete! Compras acima de R$99 têm envio grátis na {LOJA}." },
  { titulo: "R$20 OFF em compras acima de R$150 na {LOJA}", descricao: "Ganhe R$20 de desconto em pedidos acima de R$150 na {LOJA}." },
  { titulo: "25% OFF na categoria de Moda da {LOJA}", descricao: "Desconto imperdível de 25% em roupas e acessórios na {LOJA}." },
  { titulo: "Ganhe um brinde nas compras acima de R$200 na {LOJA}", descricao: "A {LOJA} vai te mimar! Brinde especial em compras a partir de R$200." },
  { titulo: "30% OFF em produtos de tecnologia na {LOJA}", descricao: "Ofertas incríveis em eletrônicos e gadgets. 30% de desconto na {LOJA}!" },
  { titulo: "40% OFF em itens de beleza da {LOJA}", descricao: "Renove seu visual com 40% de desconto nos produtos de beleza da {LOJA}." },
  { titulo: "Desconto progressivo na {LOJA}", descricao: "Compre mais e pague menos! Descontos crescentes em compras na {LOJA}." },
  { titulo: "5% OFF na sua primeira compra na {LOJA}", descricao: "Novo por aqui? Ganhe 5% OFF na sua primeira compra na {LOJA}!" },
  { titulo: "50% OFF em produtos selecionados da {LOJA}", descricao: "Metade do preço em itens especiais! Confira na {LOJA}." },
  { titulo: "Cupom de R$10 OFF em qualquer pedido da {LOJA}", descricao: "Use o cupom e ganhe R$10 de desconto em qualquer pedido na {LOJA}." },
  { titulo: "20% OFF em móveis e decoração na {LOJA}", descricao: "Deixe sua casa mais bonita com 20% de desconto na {LOJA}." },
  { titulo: "Até 70% OFF no saldão da {LOJA}", descricao: "Saldão de oportunidades! Descontos de até 70% em produtos na {LOJA}." },
  { titulo: "Ganhe cashback de 10% em compras na {LOJA}", descricao: "Compre e receba 10% do valor de volta em cashback na {LOJA}." },
  { titulo: "Frete grátis + 10% OFF na {LOJA}", descricao: "Combo perfeito: frete grátis e 10% de desconto em toda a {LOJA}." },
  { titulo: "R$50 OFF em compras acima de R$300 na {LOJA}", descricao: "Descontão de R$50 em pedidos acima de R$300 na {LOJA}. Aproveite!" },
  { titulo: "Desconto exclusivo para membros na {LOJA}", descricao: "Faça login e aproveite descontos secretos e exclusivos na {LOJA}." },
  { titulo: "15% OFF em livros e papelaria da {LOJA}", descricao: "Desconto especial em papelaria e leitura na {LOJA}. Válido até o fim do mês!" },
  { titulo: "25% OFF em cosméticos naturais na {LOJA}", descricao: "Cuide de você com 25% OFF em produtos naturais e veganos na {LOJA}." },
  { titulo: "30% OFF em roupas de inverno da {LOJA}", descricao: "Prepare-se para o frio com descontos de 30% em roupas da {LOJA}." },
  { titulo: "Ganhe frete grátis para todo o Brasil na {LOJA}", descricao: "Sem taxa de entrega! A {LOJA} garante frete grátis para todo o país." },
  { titulo: "10% OFF para pagamentos via PIX na {LOJA}", descricao: "Pagou com PIX? Ganhe 10% OFF automaticamente na {LOJA}." },
  { titulo: "R$30 OFF em pedidos acima de R$200 na {LOJA}", descricao: "Use o cupom e economize R$30 em pedidos a partir de R$200 na {LOJA}." },
  { titulo: "20% OFF em produtos esportivos na {LOJA}", descricao: "Descontos especiais em tênis, roupas e acessórios esportivos na {LOJA}." },
  { titulo: "Desconto de aniversário da {LOJA}", descricao: "A {LOJA} está em festa! Celebre com descontos exclusivos de até 50%." },
  { titulo: "Ganhe 2 por 1 em produtos selecionados da {LOJA}", descricao: "Leve 2 e pague 1 em produtos selecionados da {LOJA}. Imperdível!" },
  { titulo: "40% OFF em eletrodomésticos na {LOJA}", descricao: "Ofertas quentes em produtos de casa e cozinha. 40% OFF na {LOJA}!" },
  { titulo: "R$15 OFF em qualquer compra acima de R$100 na {LOJA}", descricao: "Cupom válido para qualquer categoria na {LOJA}." },
  { titulo: "10% OFF + brinde exclusivo na {LOJA}", descricao: "Ganhe desconto e um mimo especial em compras na {LOJA}!" },
  { titulo: "25% OFF em itens para pets na {LOJA}", descricao: "Seu pet também merece! 25% de desconto na {LOJA}." },
  { titulo: "30% OFF em serviços financeiros da {LOJA}", descricao: "Economize em planos e serviços com 30% OFF na {LOJA}." },
  { titulo: "Cupom especial de Natal da {LOJA}", descricao: "Entre no clima natalino com descontos incríveis na {LOJA}." },
  { titulo: "50% OFF no outlet da {LOJA}", descricao: "Descontos de até 50% em produtos fora de linha na {LOJA}." },
  { titulo: "R$25 OFF em pedidos acima de R$120 na {LOJA}", descricao: "Economize ainda mais com este cupom exclusivo da {LOJA}." },
  { titulo: "Desconto especial para compras no app da {LOJA}", descricao: "Baixe o app e ganhe 15% OFF na sua primeira compra na {LOJA}." },
  { titulo: "10% OFF em itens infantis na {LOJA}", descricao: "Descontos para os pequenos! 10% OFF em produtos infantis na {LOJA}." },
  { titulo: "20% OFF em livros didáticos na {LOJA}", descricao: "Economize nos estudos com 20% OFF em materiais escolares na {LOJA}." },
  { titulo: "Frete grátis em compras acima de R$80 na {LOJA}", descricao: "Aproveite frete grátis e descontos exclusivos na {LOJA}." },
  { titulo: "15% OFF em produtos premium da {LOJA}", descricao: "Desconto exclusivo de 15% em produtos selecionados premium na {LOJA}." },
  { titulo: "Descontos secretos da {LOJA}", descricao: "Ative o cupom misterioso e descubra o desconto surpresa na {LOJA}!" },
  { titulo: "35% OFF em perfumes e fragrâncias da {LOJA}", descricao: "Perfumes importados com até 35% de desconto na {LOJA}." },
  { titulo: "Ganhe R$40 OFF em compras acima de R$250 na {LOJA}", descricao: "Desconto automático aplicado no carrinho da {LOJA}." },
  { titulo: "Cupom relâmpago de 1h na {LOJA}", descricao: "Corra! Cupom válido por apenas 1 hora com 20% OFF na {LOJA}." },
  { titulo: "25% OFF em produtos sustentáveis da {LOJA}", descricao: "Compre consciente e economize com 25% OFF em produtos eco na {LOJA}." },
  { titulo: "10% OFF em produtos para pets da {LOJA}", descricao: "Mimos e descontos para o seu bichinho na {LOJA}." },
  { titulo: "R$60 OFF em compras acima de R$300 na {LOJA}", descricao: "Desconto válido em qualquer categoria dentro da {LOJA}." },
  { titulo: "Desconto de 15% em brinquedos na {LOJA}", descricao: "Garanta a diversão da criançada com 15% OFF em brinquedos na {LOJA}." },
  { titulo: "40% OFF em móveis planejados na {LOJA}", descricao: "Transforme sua casa com descontos de até 40% na {LOJA}." },
  { titulo: "Cupom especial Black Friday da {LOJA}", descricao: "Prepare-se para os maiores descontos do ano na {LOJA}!" },
  { titulo: "20% OFF + cashback de 5% na {LOJA}", descricao: "Desconto duplo: economize e receba cashback na {LOJA}!" },
]

// 🎟️ Geração de código e validade de cupom
function gerarCodigoCupom() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  return Array.from({ length: 10 }, () => caracteres[Math.floor(Math.random() * caracteres.length)]).join('')
}

function gerarValidadeCupom() {
  const dataBase = new Date('2025-12-10')
  const diasExtras = Math.floor(Math.random() * 90) // até 3 meses depois
  dataBase.setDate(dataBase.getDate() + diasExtras)
  return dataBase
}

// 🚀 Função para gerar cupom
function gerarCupom(loja) {
  const modelo = modelosDeCupons[Math.floor(Math.random() * modelosDeCupons.length)]
  return {
    TITULO: modelo.titulo.replace('{LOJA}', loja.NOME_FANTASIA),
    DESCRICAO: modelo.descricao.replace('{LOJA}', loja.NOME_FANTASIA),
    CODIGO: gerarCodigoCupom(),
    VALIDADE: gerarValidadeCupom(),
    ID_LOJA: loja.ID_LOJA,
  }
}

async function main() {
  console.log('🚀 Iniciando seed do banco de dados...')

const lojas = [
  { nome: 'Magazine Luiza', logo: 'https://logodownload.org/wp-content/uploads/2014/06/magalu-logo-0.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Mercado Livre', logo: 'https://www.sindirepabrasil.org.br/wp-content/uploads/2023/10/logo-mercado-livre-1536.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png', categoria: 'Moda e Acessórios' },
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
  { nome: 'Cacau Show', logo: 'https://mainstreet200.com.br/wp-content/uploads/2022/02/logo-cacau-show-1024.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Natura', logo: 'https://upload.wikimedia.org/wikipedia/pt/c/cb/Natura_Logo.png', categoria: 'Beleza e Cosméticos' },
  { nome: 'Steam', logo: 'https://play-lh.googleusercontent.com/52_DMY5417awaEgJf3_9mWgEuO2t1JfkGab8kM-LD6l5u6cGm_1-GsoQ_IyWFHdbkA', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Shein', logo: 'https://lenscope.com.br/blog/wp-content/uploads/2021/09/Shein-logo-930x576.png', categoria: 'Moda e Acessórios' },
  { nome: 'Renner', logo: 'https://www.royalplaza.com.br/Sistema/fotos/renner-logo-0.png', categoria: 'Moda e Acessórios' },
  { nome: 'Burger King', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1101px-Burger_King_2020.svg.png', categoria: 'Alimentação e Delivery' },
  { nome: 'McDonald’s', logo: 'https://shoppingcerrado.com.br/wp-content/uploads/2025/01/mcdonalds-shopping-cerrado.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Lacoste', logo: 'https://elephant-file-storage.nyc3.digitaloceanspaces.com/public/files/Boulevard-Belem/Arquivos-Wise-It/Lojas-logos/21035455/695848.png', categoria: 'Moda e Acessórios' },
  { nome: 'Drogasil', logo: 'https://www.abrigo.org.br/sites/default/files/2021-07/logo-drogasil-512.png', categoria: 'Saúde e Farmácia' },
  { nome: 'Carrefour', logo: 'https://miriangasparin.com.br/wp-content/uploads/2019/10/Carrefour-logo.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Gucci', logo: 'https://images.seeklogo.com/logo-png/49/2/gucci-logo-png_seeklogo-499824.png', categoria: 'Moda e Acessórios' },
  { nome: 'Pandora', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Pandora-Logo.png', categoria: 'Moda e Acessórios' },
  { nome: 'Avon', logo: 'https://images.squarespace-cdn.com/content/v1/53756cd0e4b0cf50765ac928/1617000927780-EY4FF8V0CQL1WM4CVAT6/avonlogo3.png', categoria: 'Beleza e Cosméticos' },
  { nome: 'Starbucks', logo: 'https://upload.wikimedia.org/wikipedia/pt/thumb/0/0f/Starbucks_Corporation_Logo_2011.svg.png/250px-Starbucks_Corporation_Logo_2011.svg.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Centauro', logo: 'https://elephant-file-storage.nyc3.digitaloceanspaces.com/public/images/mos/centauro-logo-01___t-yFoPYqeNeykOKpNHRaF___xcb1wl1JIWn0AB7fC8bqu.png', categoria: 'Esporte e Lazer' },
  { nome: 'Samsung', logo: 'https://logodownload.org/wp-content/uploads/2014/01/samsung-logo-4.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Submarino', logo: 'https://logodownload.org/wp-content/uploads/2014/06/submarino-logo-1-1.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Ponto', logo: 'https://logodownload.org/wp-content/uploads/2021/04/ponto-logo-0.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Extra', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Extra_2023_st.svg/250px-Extra_2023_st.svg.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Fast Shop', logo: 'https://logodownload.org/wp-content/uploads/2017/11/fast-shop-logo.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Americanas', logo: 'https://logodownload.org/wp-content/uploads/2019/10/americanas-logo-0.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Netshoes', logo: 'https://logodownload.org/wp-content/uploads/2020/02/netshoes-logo-0.png', categoria: 'Esporte e Lazer' },
  { nome: 'Aliexpress', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Aliexpress_logo.svg/2560px-Aliexpress_logo.svg.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Havan', logo: 'https://logodownload.org/wp-content/uploads/2015/05/havan-logo-0.png', categoria: 'Casa, Decoração e Utensílios' },
  { nome: 'Tok&Stok', logo: 'https://logodownload.org/wp-content/uploads/2019/11/tok-stok-logo-0.png', categoria: 'Casa, Decoração e Utensílios' },
  { nome: 'Etna', logo: 'https://www.idator.gr/wp-content/uploads/2021/06/etna-01.png', categoria: 'Casa, Decoração e Utensílios' },
  { nome: 'Pernambucanas', logo: 'https://logodownload.org/wp-content/uploads/2014/07/pernambucanas-logo.png', categoria: 'Moda e Acessórios' },
  { nome: 'Ri Happy', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/RIHAPPY_Logo.svg/2560px-RIHAPPY_Logo.svg.png', categoria: 'Bebê e Criança' },
  { nome: 'Camicado', logo: 'https://logodownload.org/wp-content/uploads/2020/01/camicado-logo-0.png', categoria: 'Casa, Decoração e Utensílios' },
  { nome: 'Decathlon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Decathlon_Logo.png/1200px-Decathlon_Logo.png', categoria: 'Esporte e Lazer' },
  { nome: 'Polishop', logo: 'https://polishop.vtexassets.com/assets/vtex.file-manager-graphql/images/b2de82b7-45d7-4d17-86f9-050b416f8a8a___1839e60960814b6dfa5d8147b51f4554.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Motorola', logo: 'https://logodownload.org/wp-content/uploads/2014/10/motorola-logo-1-1.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Vivo', logo: 'https://uploads.capitalreset.com/wp-content/uploads/2023/06/Logo-Vivo-Site2-1.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Claro', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Logo_de_Claro.svg/1200px-Logo_de_Claro.svg.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Tim', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/TIM_logo_%281999-2004%29.svg/1200px-TIM_logo_%281999-2004%29.svg.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Amazon Fresh', logo: 'https://m.media-amazon.com/images/G/01/omaha/images/merch/2019/Banyan/Email/f3vx-1400-AmazonFresh_Logo.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Riachuelo', logo: 'https://logospng.org/download/lojas-riachuelo/riachuelo-2048.png', categoria: 'Moda e Acessórios' },
  { nome: 'Youcom', logo: 'https://jkshoppingdf.com.br/pycmokse/bfi_thumb/JK-SHOPPING-LOGO-YOUCOM-400X400-09.11-7c73zt9oaimm7xip9l4ikd5hb3sfumvnmr4db5jnfdm.png', categoria: 'Moda e Acessórios' },
  { nome: 'Arezzo', logo: 'https://elephant-file-storage.nyc3.digitaloceanspaces.com/public/files/Boulevard-BH/Arquivos-Wise-It/Lojas-logos/20292074/701153.png', categoria: 'Moda e Acessórios' },
  { nome: 'Melissa', logo: 'https://images.seeklogo.com/logo-png/34/2/melissa-logo-png_seeklogo-348124.png', categoria: 'Moda e Acessórios' },
  { nome: 'Schutz', logo: 'https://logospng.org/download/schutz/logo-schutz-1024.png', categoria: 'Moda e Acessórios' },
  { nome: 'Vans', logo: 'https://images.seeklogo.com/logo-png/27/2/vans-logo-png_seeklogo-275034.png', categoria: 'Moda e Acessórios' },
  { nome: 'Converse', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Converse_logo.svg/2560px-Converse_logo.svg.png', categoria: 'Moda e Acessórios' },
  { nome: 'Puket', logo: 'https://arquivos-brb.infra.gopoints.com.br/galeria/sku/1608210405206.png', categoria: 'Moda e Acessórios' },
  { nome: 'C&A', logo: 'https://www.shoppingdomeier.com.br/wp-content/uploads/2019/10/c-a-2-logo-png-transparent.png', categoria: 'Moda e Acessórios' },
  { nome: 'Reserva', logo: 'https://logodownload.org/wp-content/uploads/2020/02/reserva-logo-0.png', categoria: 'Moda e Acessórios' },
  { nome: 'Lojas Americanas Express', logo: 'https://cdn-sites-assets.mziq.com/wp-content/uploads/sites/339/2023/09/logotipo_americanas_v3-01-300x169.png', categoria: 'Serviços e Financeiros' },
  { nome: 'Drogaria São Paulo', logo: 'https://aojesp.org.br/wp-content/uploads/2023/12/drogariasp.png', categoria: 'Saúde e Farmácia' },
  { nome: 'Chilli Beans', logo: 'https://jardimdasamericas.com.br/uploads/2018/08/chillibeans-9bc1a-large.png', categoria: 'Moda e Acessórios' },
  { nome: 'Swift', logo: 'https://www.jbs.com.br/wp-content/uploads/2023/10/marca-swift-2.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Subway', logo: 'https://public.esperienza.com.br/boulevardvilavelha-H8Rr3TPmDkz4cyzpnHEsXKRXEEYT2Fsg/loja/120-1-2-2024-VF9E6J0YFG.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Pizza Hut', logo: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/3ba71356998433.59c455556b853.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Pão de Açúcar', logo: 'https://upload.wikimedia.org/wikipedia/pt/d/dd/Logomarca_do_P%C3%A3o_de_A%C3%A7%C3%BAcar_%28supermercado%29.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Carrefour Express', logo: 'https://sal.madnezz.com.br/api/site/upload/Loja/201808171640201.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Roldão Atacadista', logo: 'https://images-service.weare365.io/h:0/w:1920/f:webp/plain/gs://agentgoat-prod-strapi-images/Roldao_cc1dbc7c66.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Assaí Atacadista', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Assa%C3%AD_Atacadista_logo_2024.svg/1200px-Assa%C3%AD_Atacadista_logo_2024.svg.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Droga Raia', logo: 'https://www.masterambiental.com.br/wp-content/uploads/2023/07/droga-raia.png', categoria: 'Saúde e Farmácia' },
  { nome: "L'Occitane", logo: 'https://logosmarcas.net/wp-content/uploads/2020/11/LOccitane-Logo.png', categoria: 'Beleza e Cosméticos' },
  { nome: 'Quem Disse, Berenice?', logo: 'https://media.cuponeria.com.br/loyalty/content/image/store/quem-disse-berenice/secondaryLogo-quem-disse-berenice-115x115.secondaryLogo', categoria: 'Beleza e Cosméticos' },
  { nome: 'Osklen', logo: 'https://logodownload.org/wp-content/uploads/2019/08/osklen-logo-0.png', categoria: 'Moda e Acessórios' },
  { nome: 'Colcci', logo: 'https://logodownload.org/wp-content/uploads/2014/11/colcci-logo-0.png', categoria: 'Moda e Acessórios' },
  { nome: 'Hering', logo: 'https://logodownload.org/wp-content/uploads/2018/06/hering-logo-0.png', categoria: 'Moda e Acessórios' },
  { nome: 'Luigi Bertolli', logo: 'https://images.seeklogo.com/logo-png/26/2/luigi-bertolli-logo-png_seeklogo-265027.png', categoria: 'Moda e Acessórios' },
  { nome: 'TNG', logo: 'https://shoppingmueller.com.br/wp-content/uploads/2021/11/70capa_446x315.png', categoria: 'Moda e Acessórios' },
  { nome: 'Kipling', logo: 'https://logodownload.org/wp-content/uploads/2017/08/kipling-logo-1.png', categoria: 'Moda e Acessórios' },
  { nome: 'Oakley', logo: 'https://images.seeklogo.com/logo-png/20/2/oakley-logo-png_seeklogo-201503.png', categoria: 'Moda e Acessórios' },
  { nome: "Bob’s", logo: 'https://logodownload.org/wp-content/uploads/2019/11/bobs-logo-1.png', categoria: 'Alimentação e Delivery' },
  { nome: "Domino’s Pizza", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png', categoria: 'Alimentação e Delivery' },
  { nome: 'Cinemark', logo: 'https://images.seeklogo.com/logo-png/38/2/cinemark-logo-png_seeklogo-388497.png', categoria: 'Esporte e Lazer' },
  { nome: 'Petz', logo: 'https://www.petz.com.br/images/logo.png', categoria: 'Pet Shop e Produtos para Animais' },
  { nome: 'Cobasi', logo: 'https://storage.googleapis.com/agentgoat-prod-strapi-images/Cobasi_41ac8d9970.png', categoria: 'Pet Shop e Produtos para Animais' },
  { nome: 'Livraria Cultura', logo: 'https://i0.wp.com/www.mindsetfrasson.com.br/wp-content/uploads/2018/06/logo-livraria-cultura.png?ssl=1', categoria: 'Educação e Livraria' },
  { nome: 'Saraiva', logo: 'https://i0.wp.com/gobots.ai/wp-content/uploads/2022/04/saraiva-logo-cliente-gobots-solucao-de-vendas-para-marketplaces-case-de-sucesso-min.png?fit=871%2C594&ssl=1', categoria: 'Educação e Livraria' },
  { nome: 'Kalunga Express', logo: 'https://assets.multiplan.com.br/Multiplan/filer_public/58/d8/58d812f1-81b1-4e69-a0a0-d88f139c65f3/kalunga.webp', categoria: 'Papelaria e Escritório' },
  { nome: 'Brastemp', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Brastemp.svg/1200px-Brastemp.svg.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Consul', logo: 'https://logodownload.org/wp-content/uploads/2014/04/consul-logo-1.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Philco', logo: 'https://logodownload.org/wp-content/uploads/2017/04/philco-logo-8.png', categoria: 'Eletrodomésticos e Móveis' },
  { nome: 'Panasonic', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Panasonic_logo_%28Blue%29.svg/2560px-Panasonic_logo_%28Blue%29.svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Canon', logo: 'https://cdn.media.amplience.net/i/canon/canon-press-centre-canon-logo_301414581785538?w=550&qlt=100', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1200px-Sony_logo.svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'GoPro', logo: 'https://download.logo.wine/logo/GoPro/GoPro-Logo.wine.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Intelbras', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Logomarca_Intelbras_verde.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Multilaser', logo: 'https://lh6.googleusercontent.com/proxy/c7S0wAnEWx1XjxNSh0O4YREzUqOPzqWdY0ozIGcoLnuhflXJay6qRfbJJshcTDq8XDL73fJBxyt2Hjhu0bXr6rYHT2V0PMSumoCWJrP_yus1z1SfqoN4mg', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LG_logo_%282014%29.svg/2560px-LG_logo_%282014%29.svg.png', categoria: 'Tecnologia e Eletrônicos' },
  { nome: 'Philips', logo: 'https://www.anahp.com.br/wp-content/uploads/2025/06/Logo_philips_site.png', categoria: 'Tecnologia e Eletrônicos' }
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

   // 3️⃣ Criar cupons para cada loja
  for (const loja of todasLojas) {
    const cuponsExistentes = await prisma.cUPONS.count({
      where: { ID_LOJA: loja.ID_LOJA },
    })

    if (cuponsExistentes === 0) {
      const cupons = Array.from({ length: 3 }, () => gerarCupom(loja))
      await prisma.cUPONS.createMany({ data: cupons })
      console.log(`🎟️ Criados 3 cupons para a loja: ${loja.NOME_FANTASIA}`)
    } else {
      console.log(`⏩ Loja ${loja.NOME_FANTASIA} já possui cupons, pulando...`)
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