// const faker=require('faker');
const { Products } = require("./models");

// const seed=()=>{
//     const products=[];
//     for (let i = 0; i < 20; i++) {
//         products.push({
//             name:faker.commerce.productName(),
//             price:parseInt(faker.commerce.price()),
//             image:faker.image.imageUrl(),
//             description: faker.commerce.productDescription(),
//             fraccionable: true
//         },)
//     },
//   return products
// },


const seed = [
  {
    name: "ACEITE DE OLIVA OLIVARES DG EXTRA VIRGEN 2LT",
    price: 1000,
    rating: null,
    stock: 8,
    desciption: "ACEITE DE OLIVA OLIVARES DG EXTRA VIRGEN 2LT",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/images-jpeg-31-3e90f4ddf2254fd25d16518911123070-640-0.jpg"
    
  
  },
  {
    name: "ACEITE DE OLVIA EXTRA VIRGEN BLEND MEDIO 500ML DELL ISOLA MENDOZA",
    price: 1260,
    rating: null,
    stock: 4,
    desciption: "ACEITE DE OLVIA EXTRA VIRGEN BLEND MEDIO 500ML DELL ISOLA MENDOZA",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/25be748e-7b7c-43b4-bc5b-76e2e1e074e51-c4b126b2d1fe541ed816372422848727-640-0.jpeg"
    
  
  },
  {
    name: "AACEITE DE OLVIA EXTRA VIRGEN BLEND FUERTE 500ML DELL ISOLA MENDOZA",
    price: 1260,
    rating: null,
    stock: 6,
    desciption: "ACEITE DE OLVIA EXTRA VIRGEN BLEND FUERTE 500ML DELL ISOLA MENDOZA",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/aceite-fuerte1-a05f2e500d73dd99f016370674923110-640-0.jpeg"
    
  
  },
  {
    name: "ACEITE DE OLIVA ORGANICO EXTRA VIRGEN 500CC FINCAS EL RENUEVO",
    price: 1000,
    rating: null,
    stock: 5,
    desciption: "ACEITE DE OLIVA ORGANICO EXTRA VIRGEN 500CC FINCAS EL RENUEVO",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/47724029-3c09-46d2-af4f-0ff166c5e3571-95221d1b91eddba43d16230890807764-640-0.jpeg"
    
  
  },
  {
    name: "ACEITE DE OLIVA ORGANICO EXTRA VIRGEN 250ML TERRASANA",
    price: 750,
    rating: null,
    stock: 12,
    desciption: "ACEITE DE OLIVA ORGANICO EXTRA VIRGEN 250ML TERRASANA",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/aceite-terra-sana-2501-95a424ea2363a50f2216194029358729-640-0.jpg "
    
  
  },
  {
    name: "ACEITE DE OLIVA EXTRA VIRGEN ORGANICO 500ML DICOMERE",
    price: 1155,
    rating: null,
    stock: 2,
    desciption: "ACEITE DE OLIVA EXTRA VIRGEN ORGANICO 500ML DICOMERE",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/aceite-terra-sana-2501-95a424ea2363a50f2216194029358729-640-0.jpg"
    
  
  },
  {
    name: "ACEITE DE DENDE 100ML CEPERA",
    price: 900,
    rating: null,
    stock: 2,
    desciption: "ACEITE DE DENDE 100ML CEPERA",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/22788787-e988-4932-a7c4-5772b71dc6451-a779b63bb48fe5ac1716030675131917-640-0.jpeg"
    
  
  },
  {
    name: "ACETO BALSAMICO ITALIANO ANTICHI COLLI DI MODENA",
    price: 1700,
    rating: null,
    stock: 2,
    desciption: "ACETO BALSAMICO ITALIANO ANTICHI COLLI DI MODENA 250 ML",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/9321131b-f76a-436c-8e1b-d15085f2c59e-9fc2ef33ee341cff6f16269186254765-640-0.jpeg"
  },
  {
    name: "ACEITE DE COCO EXTRA VIRGEN ORGANICO 200ML CEYLON NATURALS",
    price: 950,
    rating: null,
    stock: 9,
    desciption: "ACEITE DE COCO EXTRA VIRGEN ORGANICO 200ML CEYLON NATURALS",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/ae4308a5-9789-4af1-90f8-b27103f813391-1ca505a2986856ea1a16072984661420-640-0.jpeg"
  },
  {
    name: "ACEITE DE COCO VIRGEN 250ML GOLDFISH",
    price: 1870,
    rating: null,
    stock: 5,
    desciption: "ACEITE DE COCO VIRGEN 250ML GOLDFISH",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/2001-b03db1f38a5aac0a9616046213048899-640-01-ae0bec897fc357ee9f16541320459907-640-0.jpg"
  },
  {
    name: "ACEITE DE COCO EXTRA NEUTRO VEGANO 1LT OH YEAH ITS VEGAN",
    price: 1650,
    rating: null,
    stock: 9,
    desciption: "ACEITE DE COCO EXTRA NEUTRO VEGANO 1LT OH YEAH ITS VEGAN",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/oh-yeah-neutro-1lt1-e510530659cdadab9815974303911242-640-0.png"
  },
  {
    name: "ACEITE DE CANOLA Y LIMON PRENSADO EN FRIO 250ML KROL",
    price: 1650,
    rating: null,
    stock: 6,
    desciption: "ACEITE DE CANOLA Y LIMON PRENSADO EN FRIO 250ML KROL",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/krol_limon-removebg-preview1-6ebc4d7bd14808ca3015972007088954-640-0.png"
  },
  {
    name: "ACEITE DE CANOLA Y AJO PRENSADO EN FRIO 250ML KROL",
    price: 460,
    rating: null,
    stock: 6,
    desciption: "ACEITE DE CANOLA Y AJO PRENSADO EN FRIO 250ML KROL",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/krol_ajo-removebg-preview1-cae13ce49a82ad7c7915972006464089-640-0.png"
  },
  {
    name: "ACEITE DE CANOLA Y ALBAHACA PRENSADO EN FRIO 250ML KROL",
    price: 460,
    rating: null,
    stock: 9,
    desciption: "ACEITE DE CANOLA Y ALBAHACA PRENSADO EN FRIO 250ML KROL",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/krol_albahaca-removebg-preview1-28a330503b77f0e9a415972005970841-640-0.png"
  },
  {
    name: "ACEITE DE GIRASOL VIRGEN PRENSADO EN FRIO 1LT CAMPO CLARO",
    price: 1560,
    rating: null,
    stock: 1,
    desciption: "ACEITE DE GIRASOL VIRGEN PRENSADO EN FRIO 1LT CAMPO CLARO",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/campo-claro-aceite-de-girasol-1lt1-76ed511ac086d0bf0015971006080919-640-0.jpg"
  },
  {
    name: "MANTECA CLARIFICADA GHEE 270GR BY NA",
    price: 450,
    rating: null,
    stock: 1,
    desciption: "MANTECA CLARIFICADA GHEE 270GR BY NA",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/byna_ghee-removebg-preview1-0e62a1337f95b22ec015965874325204-640-0.png"
  },
  {
    name: "VINAGRE DE SIDRA DE MANZANA 70ML SAN GIORGIO",
    price: 760,
    rating: null,
    stock: 8,
    desciption: "VINAGRE DE SIDRA DE MANZANA 70ML SAN GIORGIO",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/descarga-jpeg-81-5ed0a4eb9f660438c716542093388131-640-0.jpg"
  },
  {
    name: "SALSA BARBACOA BBQ 388GR RECETAS DE ENTONCES",
    price: 560,
    rating: null,
    stock: 6,
    desciption: "SALSA BARBACOA BBQ 388GR RECETAS DE ENTONCES",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/barbacoa1-a2ce5f260d4292ae0216413207216594-640-0.jpg"
  },
  {
    name: "SALSA SRIRACHA 388ML HASHI",
    price: 570,
    rating: null,
    stock: 20,
    desciption: "SALSA SRIRACHA 388ML HASHI",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/sriracha1-01f8db1215ba075fed16413203618563-640-0.jpg"
  },
  {
    name: "SALSA DE OSTRAS PANDA 255GR LEE KUM KEE",
    price: 1000,
    rating: null,
    stock: 5,
    desciption: "SALSA DE OSTRAS PANDA 255GR LEE KUM KEE",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/lee1-f172486f8362392a5816269188755889-640-0.png"
  },
  {
    name: "SALSA DE HONGOS 220ML DARAMA",
    price: 410,
    rating: null,
    stock: 3,
    desciption: "SALSA DE HONGOS 220ML DARAMA",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/c700876b-0a63-4871-bea4-5dcaa149930f1-4d6d516cbf47a9f46b16269177832727-640-0.jpeg"
  },
  {
    name: "MOSTAZA CON MIEL 410GR KANSAS",
    price: 430,
    rating: null,
    stock: 3,
    desciption: "MOSTAZA CON MIEL 410GR KANSAS",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/0c85ce34-8803-4fea-b213-38d207108d111-61dae1f53d81f8833116073892041114-640-0.jpeg"
  },
  {
    name: "STEVIA EN POLVO 220GR JUAL",
    price: 500,
    rating: null,
    stock: 3,
    desciption: "STEVIA EN POLVO 220GR JUAL",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/jual1-224c5d3c2432274b5516413284541713-640-0.jpg"
  },
  {
    name: "STEVIA 500ML TREVER",
    price: 560,
    rating: null,
    stock: 9,
    desciption: "STEVIA 500ML TREVER",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/trever-stevia11-a5b635f523e8eb5d7616369816876252-640-0.png"
  },
  {
    name: "ERITRITOL + STEVIA EDULCORANTE 100% NATURAL 250GR WAW FOOD",
    price: 2000,
    rating: null,
    stock: 1,
    desciption: "ERITRITOL + STEVIA EDULCORANTE 100% NATURAL 250GR WAW FOOD",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/waw-food-eritritol-stevia1-85e4880cd090e59a0a15973640419707-640-0.jpeg"
  },
  {
    name: "AZUCAR NEGRA X 100GR",
    price: 25,
    rating: null,
    stock: 50,
    desciption: "AZUCAR NEGRA X 100GR",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/azucar-negra1-e00bd714f4ae4e81aa15852530546826-640-01-40ec77583cc3b7d95415962282364054-480-0.jpg"
  },
  {
    name: "AZUCAR RUBIA X 100GR",
    price: 25,
    rating: null,
    stock: 50,
    desciption: "AZUCAR RUBIA X 100GR",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/azucar-rubia1-654804ae1144d12e6315962278155080-640-0.jpg"
  },
  {
    name: "SOPA JULIANA x 100GR",
    price: 130,
    rating: null,
    stock: 20,
    desciption: "SOPA JULIANA x 100GR",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/b8b500d4-cf72-47b6-a7e6-87346cb3661a1-844779a749139a2eed16177633660444-480-0.jpeg"
  },
  {
    name: "CALDO DE VERDURAS SIN SAL AGREGADA 200GR ARGENDIET",
    price: 200,
    rating: null,
    stock: 20,
    desciption: "CALDO DE VERDURAS SIN SAL AGREGADA 200GR ARGENDIET",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/argendiet-caldo-de-verduras-sin-sal-agregada1-71d4fce34aa92d790815899950918980-640-0.jpg"
  },
  {
    name: "CALDO DE VERDURAS CON SAL MARINA 200GR ARGENDIET",
    price: 200,
    rating: null,
    stock: 5,
    desciption: "CALDO DE VERDURAS CON SAL MARINA 200GR ARGENDIET",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/argendiet-caldo-de-verduras-con-sal-marina-2001-870556add7ae839cef15899951586492-640-0.jpg"
  },
  {
    name: "CALDO DE VERDURAS DIETETICO 700GR CALDIET",
    price: 1250,
    rating: null,
    stock: 6,
    desciption: "CALDO DE VERDURAS DIETETICO 700GR CALDIET",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/caldiet-sin-sal-7001-b4f8a065efb512f87615906005168740-640-0.jpg"
  },
  {
    name: "CALDO DE VERDURAS SIN SAL AGREGADA 700GR CALDIET",
    price: 1250,
    rating: null,
    stock: 3,
    desciption: "CALDO DE VERDURAS SIN SAL AGREGADA 700GR CALDIET",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/caldiet-7001-10f6c0d441b9d3423315906004886537-640-0.jpg"
  },{
    name: "FITBITES CARROT KETO SIN AZUCAR LOW CARB 70% CACAO WEEKITFIT",
    price: 710,
    rating: null,
    stock: 3,
    desciption: "FITBITES CARROT KETO SIN AZUCAR LOW CARB 70% CACAO WEEKITFIT",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/whatsapp-image-2020-11-03-at-20-00-081-0717c13965e7f2464316046122659065-640-0-jpeg1-873095f3bf4a3b7acc16531026204235-640-0.jpg"
  },
  {
    name: "LECHE DE MANI SABOR A CHOCOLATE 200ML VRINK",
    price: 135,
    rating: null,
    stock: 4,
    desciption: "LECHE DE MANI SABOR A CHOCOLATE 200ML VRINK",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/d_nq_np_868568-mla47774540000_102021-o11-0e6a7fe562c99da32216485134986952-640-0.jpg"
  },
  {
    name: "TABLETA DE DULCE DE LECHE LIGHT 25GR DOÑA MAGDALENA",
    price: 60,
    rating: null,
    stock: 8,
    desciption: "TABLETA DE DULCE DE LECHE LIGHT 25GR DOÑA MAGDALENA",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/dona-magdalena-tableta-light-21-212e44fe8df8c7b39216479532868919-640-0.jpg"
  },
  {
    name: "GALLETITAS DE VAINILLA 170GR MARBE",
    price: 175,
    rating: null,
    stock: 5,
    desciption: "GALLETITAS DE VAINILLA 170GR MARBE",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/6-31-1355ec5f62652e3f1416263652990383-640-01-5eae811decf9f298fb16439431909286-640-0.jpg"
  },
  {
    name: "MERMELADA CON STEVIA FRUTILLA 380GR CABAÑA MICO",
    price: 550,
    rating: null,
    stock: 5,
    desciption: "MERMELADA CON STEVIA FRUTILLA 380GR CABAÑA MICO",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/frutilla-diet1-c41c4bb5bac757247a16390177918864-640-0.jpg"
  },
  {
    name: "CREMA DE AVELLANAS CON CACAO Y AZUCAR MASCABO INTEGRAL 170GR DICOMERE",
    price: 710,
    rating: null,
    stock: 5,
    desciption: "CREMA DE AVELLANAS CON CACAO Y AZUCAR MASCABO INTEGRAL 170GR DICOMERE",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/dicomere1-3ce1f25f65d166b21016304479141402-640-0.jpeg"
  },
  {
    name: "ALFAJOR MAX COOKIES RELLENAS DE CHIPS Y CHOCOLATE 30GR UN RINCON VEGANO",
    price: 70,
    rating: null,
    stock: 5,
    desciption: "ALFAJOR MAX COOKIES RELLENAS DE CHIPS Y CHOCOLATE 30GR UN RINCON VEGANO",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/img-20220131-wa00151-077338a1447a9902a016536206046345-640-0.jpg"
  },
  {
    name: "ALFAJOR MAX COOKIES RELLENAS DE MENTA Y CHOCOLATE 30GR UN RINCON VEGANO",
    price: 70,
    rating: null,
    stock: 5,
    desciption: "ALFAJOR MAX COOKIES RELLENAS DE MENTA Y CHOCOLATE 30GR UN RINCON VEGANO",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/img-20220131-wa00161-024295866306cb032416536207615531-640-0.jpg"
  },
  {
    name: "PITA CHIPS DE MASA MADRE HORNEADOS SABOR JALAPEÑO 170GR ALMADRE",
    price: 390,
    rating: null,
    stock: 5,
    desciption: "PITA CHIPS DE MASA MADRE HORNEADOS SABOR JALAPEÑO 170GR ALMADRE",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/almadre-chips-de-masa-madre-170-grs_961421-4955d376c0810e657816535023548341-640-0.jpg"
  },
  {
    name: "PITA CHIPS DE MASA MADRE HORNEADOS SABOR CEBOLLA 170GR ALMADRE",
    price: 390,
    rating: null,
    stock: 5,
    desciption: "PITA CHIPS DE MASA MADRE HORNEADOS SABOR CEBOLLA 170GR ALMADRE",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/almadre-chips-de-masa-madre-170-grs_961411-c9b71721569bd7c4d816535017980289-50-0.jpg"
  },
  {
    name: "BOCADITOS DE AVENA RELLENOS DE LIMON X 100GR",
    price: 130,
    rating: null,
    stock: 25,
    desciption: "BOCADITOS DE AVENA RELLENOS DE LIMON X 100GR",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/bocaditos-rellenos-de-limon-granix-bolsa-180-gr1-0fbe127e1ce714ebed16499038148295-640-0.jpg"
  },
  {
    name: "ALMENDRAS BANADAS EN CHOCOLATE X 100GR",
    price: 300,
    rating: null,
    stock: 25,
    desciption: "ALMENDRAS BANADAS EN CHOCOLATE X 100GR",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/almendracorte21-30d4ba420d18b006f216002786950774-1024-10241-b2e6b4004232a6d16216469630917590-640-0.jpg"
  },
  {
    name: "GALLETITAS GRANOLA CON AVELLANAS AVENA Y CACAO 145GR GRANIX",
    price: 200,
    rating: null,
    stock: 4,
    desciption: "GALLETITAS GRANOLA CON AVELLANAS AVENA Y CACAO 145GR GRANIX",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/38442278-f103d97e149bee4a6915649220286885-1024-1024_700x1-e3d40891b213b8d8bf16450633103310-640-0.jpg"
  },
  {
    name: "CHAMPIGNON SECO x 100GR",
    price: 800,
    rating: null,
    stock: 30,
    desciption: "CHAMPIGNON SECO x 100GR",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/08960561-c79f-4149-8ada-3dd11e54cef31-124fc20f4c8d05bb1f16372422712444-640-0.jpeg"
  },
  {
    name: "POROTOS PALLARES PERUANOS X 100GR",
    price: 105,
    rating: null,
    stock: 30,
    desciption: "POROTOS PALLARES PERUANOS X 100GR",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/a991f4ae-408f-447a-b64a-26a14eb2de881-e5b8cb2244d000347616269139497401-640-0.jpeg"
  },
  {
    name: "TRIGO MOTE x 100GR",
    price: 60,
    rating: null,
    stock: 30,
    desciption: "TRIGO MOTE x 100GR",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/08716e94-d738-495b-97d5-d70c457783101-15bbd29694ef4e42bd16073053316558-640-0.jpeg"
  },
  {
    name: "ARVEJAS PARTIDAS X 100GR",
    price: 15,
    rating: null,
    stock: 30,
    desciption: "ARVEJAS PARTIDAS X 100GR",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/arvejas-partidas1-2935b5b582ee7d7d5715887359029181-640-0.jpg"
  },
  {
    name: "CEBOLLA EN POLVO X 100GR",
    price: 170,
    rating: null,
    stock: 30,
    desciption: "CEBOLLA EN POLVO X 100GR",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/cebolla-en-polvo1-ca6fa3490324abc33715932290493918-640-01-40b7f85e673220ce2016543067947398-640-0.jpg"
  },
  {
    name: "GARRAPIÑADA DE ALMENDRAS x 100GR",
    price: 180,
    rating: null,
    stock: 30,
    desciption: "GARRAPIÑADA DE ALMENDRAS x 100GR",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/7ce6e5e3-1979-464a-8901-29e84ffa39621-84d164c00efc1a1acd16398467003886-640-0.jpeg"
  },
  {
    name: "ADOBO PARA PIZZA x 100GR",
    price: 70,
    rating: null,
    stock: 30,
    desciption: "MEZCLA DE ESPECIAS OREGANO PIMENTON AJI MOLIDO",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/adobo-de-pizza-x-500-gr1-20751eccae2fdd7d3c16400511820741-640-0.jpg"
  },
  {
    name: "BAYAS DE ENEBRO x 100GR",
    price: 200,
    rating: null,
    stock: 30,
    desciption: "BAYAS DE ENEBRO x 100GR",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/bayas-de-enebro1-ea4e936f6131dd283715900999321882-640-0.jpg"
  },
  {
    name: "PASAS DE CASSIS SECO x 100GR",
    price: 600,
    rating: null,
    stock: 30,
    desciption: "PASAS DE CASSIS x 100GR",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/f63aa1cd-9a5a-45db-b11a-e1228e48f1331-a021752bfcbde9a89016269166759981-640-0.jpeg"
  },
  {
    name: "HOJAS DE GUAYABA x 100GR",
    price: 150,
    rating: null,
    stock: 30,
    desciption: "HOJAS DE GUAYABA x 100GR",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/0d26ec81-e485-4b37-b041-bfda40de5e6a1-c811e20c0ce63f0e0f16269164781394-640-0.jpeg"
  },
  {
    name: "DATILES CHINOS x 100GR",
    price: 800,
    rating: null,
    stock: 30,
    desciption: "DATILES CHINOS x 100GR",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/e4b520ad-0d2a-40b8-b237-160b0944b7dc1-f1027992392782bb9e16268990042563-640-0.jpeg"
  },
  {
    name: "PETALOS DE ROSA X 100GR",
    price: 300,
    rating: null,
    stock: 30,
    desciption: "PETALOS DE ROSA X 100GR",
    fraccionable: true,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/25031191-0521-469c-bacc-2f0db3b321e11-b84e5f483def615af516141045355545-640-0.jpeg"
  },
  {
    name: "JUGO DE ARANDANOS CON STEVIA CON CHIA 1,5LT CERAL",
    price: 380,
    rating: null,
    stock: 5,
    desciption: "JUGO DE ARANDANOS CON STEVIA CON CHIA 1,5LT CERAL",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/jugo-nuevo-500x5001-8951995a949ab52e1916486929531730-640-0.jpg"
  },
  {
    name: "KOMBUCHA TE NEGRO SABOR CHAI 250ML NEPTUNE",
    price: 260,
    rating: null,
    stock: 3,
    desciption: "JKOMBUCHA TE NEGRO SABOR CHAI 250ML NEPTUNE",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/kombucha-chai1-aa2ca18cb9a5698bce16413315701201-640-0.jpg"
  },
  {
    name: "KOMBUCHA TE VERDE SABOR YERBA MATE 250ML NEPTUNE",
    price: 260,
    rating: null,
    stock: 3,
    desciption: "KOMBUCHA TE VERDE SABOR YERBA MATE 250ML NEPTUNE",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/kombucha-yerba1-4bd5f6fe6f7b0bd6fe16413314223869-640-0.jpg"
  },
  {
    name: "JUGO DE UVA 100% NATURAL 750ML LOS MEDANOS",
    price: 770,
    rating: null,
    stock: 3,
    desciption: "JUGO DE UVA 100% NATURAL 750ML LOS MEDANOS",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/7d6a2017-4730-45e6-9ee3-79eef15364df1-d47fbe5ef8163a414816132428176622-640-0.jp"
  },
  {
    name: "ADES LECHE DE SOJA 1LT ADES",
    price: 200,
    rating: null,
    stock: 8,
    desciption: "ADES LECHE DE SOJA 1LT ADES",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/7790895643859_0211-3d708eaf5935e60e8915906166985304-640-0.jpg"
  },
  {
    name: "ADES LECHE DE ALMENDRAS 1LT ADES",
    price: 360,
    rating: null,
    stock: 8,
    desciption: "ADES LECHE DE ALMENDRAS 1LT ADES",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/leche-de-almendras-ades-6-unidades-d_nq_np_969361-mla28761576674_112018-f31-7dad1309bdc9c52b2915906166069139-640-0.jpg"
  },
  {
    name: "LECHE DE COCO 400ML CELEBES",
    price: 580,
    rating: null,
    stock: 6,
    desciption: "LECHE DE COCO 400ML CELEBES",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/4804888940016-leche-de-coco-celebes1-de0ea1c7b19abf795915905038988771-640-0.jpg"
  },
  {
    name: "LECHE DE CABRA DESCREMADA EN POLVO 250GR LA PRIMERA",
    price: 1100,
    rating: null,
    stock: 6,
    desciption: "LECHE DE CABRA DESCREMADA EN POLVO 250GR LA PRIMERA",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/la-primera-leche-de-cabra-en-polvo-descremada1-32bc7fa3f8b29c3f7b15898217774445-640-0.jpg"
  },
  {
    name: "LECHE DE CABRA ENTERA EN POLVO 250GR LA PRIMERA",
    price: 430,
    rating: null,
    stock: 8,
    desciption: "LECHE DE CABRA ENTERA EN POLVO 250GR LA PRIMERA",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/ddlcabra1-ffd51d1a995405c97116482363369568-50-0.png"
  },
  {
    name: " PASTA DE MANI CON STEVIA Y CANELA 380GR LE FIT ",
    price: 310,
    rating: null,
    stock: 8,
    desciption: " PASTA DE MANI CON STEVIA Y CANELA 380GR LE FIT ",
    fraccionable: false,
    image: " https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/4487c53a-7965-4f52-a291-b49da2cca1401-9a00d14600e967532016413370644966-640-0.jpeg "
  },
  {
    name: "PASTA DE ALMENDRAS 170GR VRINK",
    price: 940,
    rating: null,
    stock: 6,
    desciption: "PASTA DE ALMENDRAS 170GR VRINK",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/pasta-vrink1-b381c9e4351eccd51416369821148031-640-0.jpeg "
  },
  {
    name: "MERMELADA ORGANICA MORA 280GR CUYEN",
    price: 470,
    rating: null,
    stock: 3,
    desciption: "MERMELADA ORGANICA MORA 280GR CUYEN",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/d0dcaf57-8e51-40dc-8ebd-2b96fc0238131-ad4724cf1fc33a9b0d16194016692809-640-0.jpeg "
  },
  {
    name: "VINO ORGANICO MALBEC 750ML BEEPURE ROSE",
    price: 700,
    rating: null,
    stock: 8,
    desciption: "VINO ORGANICO MALBEC 750ML BEEPURE ROSE",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/beepure-vino-rose1-d409a5e6fc5fcc190916052888989917-640-01-04e06c46e6cfc1317316536199684688-640-0.jpg "
  },
  {
    name: "BEBIDA PROBIOTICA SABOR FRUTILLA 500ML VITA BIOSA",
    price: 1040,
    rating: null,
    stock: 8,
    desciption: "BEBIDA PROBIOTICA SABOR FRUTILLA 500ML VITA BIOSA",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/d420dcd7-b3c8-4d2d-b722-b3d3522006b61-68af15afd31d08f39c16218092741126-640-0.jpeg "
  },
  {
    name: "VINO ORGANICO MALBEC ROSADO 750ML FAMILIA CECCHIN",
    price: 1250,
    rating: null,
    stock: 8,
    desciption: "VINO ORGANICO MALBEC ROSADO 750ML FAMILIA CECCHIN",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/9573b917-7c4a-4623-93bc-c959d3cfba961-27b31f4ae398347e7a16121483703402-640-0.jpeg "
  },
  {
    name: "VINO ORGANICO MALBEC ROBLE 750ML FAMILIA CECCHIN",
    price: 1250,
    rating: null,
    stock: 5,
    desciption: "VINO ORGANICO MALBEC ROBLE 750ML FAMILIA CECCHIN",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/89f17a59-4c99-464b-8898-668c7b5f267a1-b1069c17beb9fe6e1516121484378590-640-0.jpeg "
  },
  {
    name: "VINO ORGANICO MALBEC ROBLE 750ML BEEPURE",
    price: 840,
    rating: null,
    stock: 2,
    desciption: "VINO ORGANICO MALBEC ROBLE 750ML BEEPURE",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/cd7cbf7f-3d00-4701-b88d-521f09c9fb851-8f7a1fd4213591497416121484175550-640-0.jpeg "
  },
  {
    name: "COLONALIV CON ACEITES ESENCIALES 30CAPSULAS BLANDAS MENTA Y HINOJO CONTIENE VITAMINA E",
    price: 2200,
    rating: null,
    stock: 10,
    desciption: "COLONALIV CON ACEITES ESENCIALES 30CAPSULAS BLANDAS MENTA Y HINOJO CONTIENE VITAMINA E",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/inshot_20220606_23075228011-0423ba4e280698db4516545681792757-640-0.jpg "
  },
  {
    name: "SPIRULINA +CHLORELLA ORGANIKAL 60 CAPSULAS HYDRO GROW",
    price: 1160,
    rating: null,
    stock: 7,
    desciption: "SPIRULINA +CHLORELLA ORGANIKAL 60 CAPSULAS HYDRO GROW",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/spirulina-_chlorella_organikal_x_60_capsulas1-44ce076a10d0e4102416543900420025-640-0.jpg "
  },
  {
    name: "BEBIDA DE ALOE VERA MAXIMA DEFENSAS 250ML NATIER",
    price: 670,
    rating: null,
    stock: 3,
    desciption: "BEBIDA DE ALOE VERA MAXIMA DEFENSAS 250ML NATIER",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/aloe-vera-natural-125-cm-merge1-cff4b72e83590832c416154651238220-1024-10241-2bcf3067a0551b5a6716167991899817-640-01-ccd7e0ebcf822f015d16543063665301-640-0.jpg "
  },
  {
    name: "MASCARA CAPILAR REPARACION PROFUNDA OBLEPIKHA 300ML NATURA SIBERICA",
    price: 2600,
    rating: null,
    stock: 9,
    desciption: "MASCARA CAPILAR REPARACION PROFUNDA OBLEPIKHA 300ML NATURA SIBERICA",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/mascara-capilar-oblpeikha-vegana-cabello-debil-y-danado-biomille_1200x12001-b64de893fae2c7a0fd16539612432894-50-0.jpg "
  },
  {
    name: "CHIACAPS PREMIUM OIL 30 CAPSULAS ELEA",
    price: 1230,
    rating: null,
    stock: 5,
    desciption: "CHIACAPS PREMIUM OIL 30 CAPSULAS ELEA",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/images-jpeg-31-4bc4f8774fbbf572ba16531727583696-480-0.jpg "
  },
  {
    name: "ORGANIC SHOP EXFOLIANTE CORPORAL LEMONGRASS DE LA PROVENCE 250ML",
    price: 960,
    rating: null,
    stock: 5,
    desciption: "ORGANIC SHOP EXFOLIANTE CORPORAL LEMONGRASS DE LA PROVENCE 250ML",
    fraccionable: false,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/573/products/d_nq_np_881029-mla49150877633_022022-v1-0c8f4bd1ce283c22a616504182747056-640-0.jpg "
  },
];

const seedFn = () => {
  return Products.bulkCreate(seed);
};

seedFn();
