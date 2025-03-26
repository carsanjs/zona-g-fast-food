export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
  spicy?: number; // 0-3, indica el nivel de picor
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "hamburguesas",
    name: "Hamburguesas",
    description:
      "Deliciosas hamburguesas con ingredientes frescos y salsas caseras",
  },
  {
    id: "tacos",
    name: "Tacos",
    description:
      "Auténticos tacos mexicanos con diferentes opciones de proteínas y salsas",
  },
  {
    id: "bebidas",
    name: "Bebidas",
    description: "Refrescantes bebidas para acompañar tu comida favorita",
  },
  {
    id: "pizzas",
    name: "Pizzas",
    description: "Pizzas artesanales con masa fermentada y toppings gourmet",
  },
  {
    id: "burritos",
    name: "Burritos",
    description:
      "Burritos grandes llenos de sabor y con ingredientes de calidad",
  },
  {
    id: "ensaladas",
    name: "Ensaladas",
    description: "Ensaladas frescas y saludables para complementar tu comida",
  },
  {
    id: "postres",
    name: "Postres",
    description: "Deliciosos postres para el final perfecto",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Super Hamburguesa",
    description:
      "Deliciosa hamburguesa con doble carne, queso cheddar, tocino, lechuga, tomate y nuestra salsa especial.",
    price: 9.99,
    image: "/img/hb1.webp",
    category: "Hamburguesas",
    popular: true,
    spicy: 1,
  },
  {
    id: 2,
    name: "Hamburguesa Vegetariana",
    description:
      "Hamburguesa con medallón de lentejas, queso, lechuga, tomate, cebolla caramelizada y salsa de aguacate.",
    price: 8.99,
    image: "/img/hb2.webp",
    category: "Hamburguesas",
    vegetarian: true,
    vegan: false,
    glutenFree: false,
  },
  {
    id: 3,
    name: "Hamburguesa BBQ",
    description:
      "Hamburguesa con carne a la parrilla, queso, cebolla crujiente, tocino y salsa BBQ.",
    price: 10.5,
    image: "/img/hb3.webp",
    category: "Hamburguesas",
    popular: true,
  },
  {
    id: 4,
    name: "Tacos Especiales",
    description:
      "Tres tacos con carne marinada, cebolla, cilantro y salsa picante casera.",
    price: 8.5,
    image: "/img/taco1.webp",
    category: "Tacos",
    popular: true,
    spicy: 2,
  },
  {
    id: 5,
    name: "Tacos Vegetarianos",
    description:
      "Tres tacos con hongos, elote, frijoles, guacamole y queso fresco.",
    price: 7.99,
    image: "/img/tacos2.webp",
    category: "Tacos",
    vegetarian: true,
    vegan: false,
    spicy: 1,
  },
  {
    id: 6,
    name: "Tacos de Pescado",
    description:
      "Tres tacos con pescado rebozado, repollo morado, salsa de chipotle y limón.",
    price: 9.5,
    image: "/img/tacos3.webp",
    category: "Tacos",
    glutenFree: false,
    spicy: 1,
  },
  // {
  //   id: 7,
  //   name: "Malteada Premium",
  //   description:
  //     "Cremosa malteada con helado artesanal, crema batida y toppings a elección.",
  //   price: 5.99,
  //   image:
  //     "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/malteadas.jpg",
  //   category: "Bebidas",
  //   popular: true,
  //   vegetarian: true,
  // },
  // {
  //   id: 8,
  //   name: "Limonada Casera",
  //   description:
  //     "Refrescante limonada preparada al momento con limones frescos y hierbabuena.",
  //   price: 3.5,
  //   image:
  //     "https://www.pngkit.com/png/detail/403-4036782_limonada-natural-imagenes-de-limonada-png.png",
  //   category: "Bebidas",
  //   vegan: true,
  //   vegetarian: true,
  //   glutenFree: true,
  // },
  // {
  //   id: 9,
  //   name: "Cerveza Artesanal",
  //   description:
  //     "Variedad de cervezas artesanales locales para acompañar tu comida.",
  //   price: 4.99,
  //   image:
  //     "",
  //   category: "Bebidas",
  //   glutenFree: false,
  //   vegan: true,
  // },
  {
    id: 10,
    name: "Pizza Gourmet",
    description:
      "Pizza artesanal con masa fermentada 48 horas, mozzarella fresca, tomate y albahaca.",
    price: 12.99,
    image: "/img/pizza1.webp",
    category: "Pizzas",
    popular: true,
    vegetarian: true,
  },
  {
    id: 11,
    name: "Pizza Carnívora",
    description:
      "Pizza con salami, jamón, tocino, carne molida y queso mozzarella.",
    price: 14.5,
    image: "/img/pizza2.webp",
    category: "Pizzas",
  },
  {
    id: 12,
    name: "Pizza Vegana",
    description:
      "Pizza con queso vegano, pimientos, champiñones, cebolla y aceitunas.",
    price: 13.99,
    image: "/img/pizza3.webp",
    category: "Pizzas",
    vegetarian: true,
    vegan: true,
  },
  {
    id: 13,
    name: "Burrito Supremo",
    description:
      "Burrito grande con arroz, frijoles, guacamole, crema agria y tu elección de proteína.",
    price: 10.5,
    image: "/img/brito1.webp",
    category: "Burritos",
    popular: true,
    spicy: 2,
  },
  {
    id: 14,
    name: "Burrito Vegetariano",
    description:
      "Burrito con arroz, frijoles, pimientos, calabacín, maíz y aguacate.",
    price: 9.5,
    image: "/img/brito2.webp",
    category: "Burritos",
    vegetarian: true,
    vegan: true,
    spicy: 1,
  },
  {
    id: 15,
    name: "Burrito de Pollo",
    description:
      "Burrito con pollo a la parrilla, arroz, frijoles, queso y pico de gallo.",
    price: 10.99,
    image: "/img/brito3.webp",
    category: "Burritos",
    spicy: 1,
  },
  {
    id: 16,
    name: "Ensalada César",
    description:
      "Fresca ensalada con lechuga romana, crutones, aderezo césar y pollo a la parrilla.",
    price: 8.99,
    image: "/img/enslda1.webp",
    category: "Ensaladas",
  },
  {
    id: 17,
    name: "Ensalada Mediterránea",
    description:
      "Ensalada con lechuga, tomate, pepino, aceitunas, queso feta y aderezo de limón.",
    price: 8.5,
    image: "/img/enslda2.webp",
    category: "Ensaladas",
    vegetarian: true,
    glutenFree: true,
  },
  {
    id: 18,
    name: "Ensalada de Quinoa",
    description:
      "Ensalada nutritiva con quinoa, aguacate, tomate, pepino y aderezo de hierbas.",
    price: 9.99,
    image: "/img/ensalada1.webp",
    category: "Ensaladas",
    vegetarian: true,
    vegan: true,
    glutenFree: true,
  },
  {
    id: 19,
    name: "Cheesecake",
    description: "Cremoso cheesecake con mermelada de frutos rojos casera.",
    price: 6.5,
    image: "/img/postr3.webp",
    category: "Postres",
    vegetarian: true,
  },
  {
    id: 20,
    name: "Brownie con Helado",
    description:
      "Caliente brownie de chocolate con helado de vainilla y salsa de chocolate.",
    price: 7.5,
    image: "/img/postr2.webp",
    category: "Postres",
    popular: true,
    vegetarian: true,
  },
  {
    id: 21,
    name: "Flan Casero",
    description: "Suave y delicioso flan casero con caramelo.",
    price: 5.99,
    image: "/img/potr1.webp",
    category: "Postres",
    vegetarian: true,
    glutenFree: true,
  },
];

// Función para obtener los elementos populares del menú
export const getPopularItems = (): MenuItem[] => {
  return menuItems.filter((item) => item.popular);
};

// Función para obtener elementos por categoría
export const getItemsByCategory = (categoryId: string): MenuItem[] => {
  return menuItems.filter(
    (item) => item.category.toLowerCase() === categoryId.toLowerCase()
  );
};

// Función para buscar elementos por texto
export const searchItems = (searchTerm: string): MenuItem[] => {
  const term = searchTerm.toLowerCase();
  return menuItems.filter(
    (item) =>
      item.name.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
  );
};

// Función para obtener un elemento específico por ID
export const getItemById = (id: number): MenuItem | undefined => {
  return menuItems.find((item) => item.id === id);
};
