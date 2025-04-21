
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDetail from '@/components/Products/ProductDetail';
import { getProductById, Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      const foundProduct = getProductById(productId);
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
        <Button onClick={() => navigate('/')}>Voltar para a Página Inicial</Button>
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-4">
        <Button 
          variant="ghost" 
          className="flex items-center"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Voltar
        </Button>
      </div>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailPage;
