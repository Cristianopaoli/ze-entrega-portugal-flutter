
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  Truck, 
  Plus, 
  Minus 
} from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          
          <div className="pt-2 border-t">
            <div className="flex items-center gap-2">
              <Truck className="text-primary" size={20} />
              <p className="text-sm">Entrega em menos de 30 minutos</p>
            </div>
          </div>
          
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm text-gray-500">Preço</p>
              <p className="text-3xl font-bold text-gray-800">
                €{product.price.toFixed(2)}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md overflow-hidden">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="rounded-none h-10 border-r"
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="rounded-none h-10 border-l"
                  onClick={handleIncrement}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleAddToCart}
            className="w-full py-6 text-lg"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Adicionar ao Carrinho
          </Button>
          
          <div className="pt-4 text-sm text-muted-foreground">
            <p>Em stock: {product.stock} unidades</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
