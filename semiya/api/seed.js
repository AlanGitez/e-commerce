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
//         })
//     }
//   return products
// }

// Products.bulkCreate(seed())

const seed = [
  {
    name: "nueces",
    price: 100,
    stock: 100,
    description: "nueces comunes guacho",
    fraccionable: true,
    image:
      " https://e7.pngegg.com/pngimages/501/463/png-clipart-walnut-walnut.png",
  },

  {
    name: "“almendras",
    price: 150,
    stock: 50,
    desciption: "Alta almendra",
    fraccionable: true,
    image:
      "https://e7.pngegg.com/pngimages/1022/1002/png-clipart-almond-almond.png",
  },

  {
    name: "“pasas de uva”",
    price: 200,
    stock: 1000,
    description: "“Son uvas disecadas”",
    fraccionable: true,
    image:
      "https://static4.depositphotos.com/1008041/353/i/600/depositphotos_3538346-stock-photo-raisins-and-grapes.jpg",
  },

  {
    name: "“bananas disecadas”",
    price: 100,
    stock: 100,
    description: "“Son bananas secas”",
    fraccionable: true,
    image:
      "https://e7.pngegg.com/pngimages/612/933/png-clipart-banana-bread-bxe1nh-chuu1ed1i-banana-chip-delicious-banana-slices-dried-fruit-food.png",
  },

  {
    name: "miel",
    price: 500,
    stock: 100,
    description: "Miel de abejitas”",
    fraccionable: false,
    image:
      "https://img.lovepik.com/free-png/20220125/lovepik-honey-png-image_401705779_wh860.png",
  },
  {
    name: "“arroz yammani”",
    price: 300,
    stock: 50000,
    description: "“Arroz mas saludable.”",
    fraccionable: true,
    image:
      "http://d3ugyf2ht6aenh.cloudfront.net/stores/099/082/products/arroz-yamani-512454664895d4d9e8891d81dee5e874-640-0.png",
  },
  {
    name: "“Tomate Seco”",
    price: 40,

    stock: 670000,
    description: "“Tomate sin humedad.”",
    fraccionable: true,
    image: "",
  },
  {
    name: "“aceite de coco”",
    price: 4000,
    stock: 6000,
    description: "“Aceite sacado de un coco.”",
    fraccionable: true,
    image:
      "https://img2.freepng.es/20180528/gka/kisspng-coconut-oil-food-cooking-oils-coco-5b0bb50e3adb34.3048846815274939022411.jpg",
  },
  {
    name: "“castanias de caju”",
    price: 700,

    stock: 99000,
    description: "“Muy ricas castanias.”",
    fraccionable: true,
    image:
      "https://w7.pngwing.com/pngs/147/261/png-transparent-chestnut-caju-salgado-brazil-nut-toast-food-fruit-toast.png",
  },
  {
    name: "“Dulce de Leche de Almendra”",
    price: 80,
    stock: 109000,
    description: "“Duulce muy rico y muy dulce.”",
    fraccionable: true,
    image:
      "https://laduvalina.com.ar/wp-content/uploads/2021/03/Diseno-sin-titulo-3-3.png",
  },
];
const seedFn=()=>{
return Products.bulkCreate(seed)}

seedFn();
