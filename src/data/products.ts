
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  stock: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "cervejas",
    name: "Cervejas",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=2070"
  },
  {
    id: "vinhos",
    name: "Vinhos",
    image: "https://images.unsplash.com/photo-1546944517-4f38480ff03c?q=80&w=2070"
  },
  {
    id: "bebidas_espirituosas",
    name: "Bebidas Espirituosas",
    image: "https://images.unsplash.com/photo-1514218869824-1cda1c12217a?q=80&w=2070"
  },
  {
    id: "refrigerantes",
    name: "Refrigerantes",
    image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?q=80&w=2070"
  },
  {
    id: "snacks",
    name: "Petiscos",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=2070"
  },
  {
    id: "gelo",
    name: "Gelo",
    image: "https://images.unsplash.com/photo-1487147147368-d46e3c7849d3?q=80&w=2070"
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Super Bock Original",
    description: "Cerveja portuguesa premium, com sabor equilibrado e refrescante.",
    price: 1.29,
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=2070",
    category: "cervejas",
    featured: true,
    stock: 100
  },
  {
    id: "2",
    name: "Sagres Branca",
    description: "Cerveja loira com aroma e sabor intensos, de cor dourada.",
    price: 1.25,
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=2070",
    category: "cervejas",
    featured: true,
    stock: 100
  },
  {
    id: "3",
    name: "Vinho Tinto Douro",
    description: "Vinho tinto encorpado da região do Douro, com notas de frutos vermelhos.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1546944517-4f38480ff03c?q=80&w=2070",
    category: "vinhos",
    featured: true,
    stock: 50
  },
  {
    id: "4",
    name: "Vinho Verde Alvarinho",
    description: "Vinho branco fresco e aromático da região do Minho.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1546944517-4f38480ff03c?q=80&w=2070",
    category: "vinhos",
    featured: false,
    stock: 40
  },
  {
    id: "5",
    name: "Whisky Jack Daniel's",
    description: "Whisky americano com sabor suave e notas de carvalho.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1514218869824-1cda1c12217a?q=80&w=2070",
    category: "bebidas_espirituosas",
    featured: true,
    stock: 30
  },
  {
    id: "6",
    name: "Vodka Absolut",
    description: "Vodka premium sueca, destilada a partir de grãos de trigo de inverno.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1514218869824-1cda1c12217a?q=80&w=2070",
    category: "bebidas_espirituosas",
    featured: false,
    stock: 35
  },
  {
    id: "7",
    name: "Coca-Cola Original",
    description: "Refrigerante de cola, refrescante e com sabor inconfundível.",
    price: 1.49,
    image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?q=80&w=2070",
    category: "refrigerantes",
    featured: true,
    stock: 200
  },
  {
    id: "8",
    name: "Sumol Ananás",
    description: "Refrigerante com sabor a ananás, refrescante e doce.",
    price: 1.29,
    image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?q=80&w=2070",
    category: "refrigerantes",
    featured: false,
    stock: 150
  },
  {
    id: "9",
    name: "Batatas Fritas Ruffles",
    description: "Batatas fritas onduladas e crocantes com sabor a sal.",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=2070",
    category: "snacks",
    featured: true,
    stock: 80
  },
  {
    id: "10",
    name: "Amendoins Salgados",
    description: "Amendoins torrados e salgados, ideais para acompanhar bebidas.",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=2070",
    category: "snacks",
    featured: false,
    stock: 60
  },
  {
    id: "11",
    name: "Gelo em Cubos",
    description: "Saco de gelo em cubos, ideal para refrescar bebidas.",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1487147147368-d46e3c7849d3?q=80&w=2070",
    category: "gelo",
    featured: true,
    stock: 100
  },
  {
    id: "12",
    name: "Gelo Triturado",
    description: "Saco de gelo triturado, perfeito para cocktails.",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1487147147368-d46e3c7849d3?q=80&w=2070",
    category: "gelo",
    featured: false,
    stock: 80
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(
    product => 
      product.name.toLowerCase().includes(searchTerm) || 
      product.description.toLowerCase().includes(searchTerm)
  );
};
