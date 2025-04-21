
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '@/components/Products/ProductGrid';
import { getProductsByCategory, categories } from '@/data/products';

const ProductsPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const category = categories.find(c => c.id === categoryId);
      setCategoryName(category ? category.name : 'Produtos');
      setProducts(getProductsByCategory(categoryId));
    }
  }, [categoryId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductsPage;
