
import React from 'react';
import Hero from '@/components/Home/Hero';
import CategoryList from '@/components/Home/CategoryList';
import ProductGrid from '@/components/Products/ProductGrid';
import { getFeaturedProducts } from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      <Hero />
      <CategoryList />
      <ProductGrid products={featuredProducts} title="Produtos Populares" />
    </div>
  );
};

export default Index;
