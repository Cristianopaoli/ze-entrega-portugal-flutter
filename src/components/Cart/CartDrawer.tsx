
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Separator } from '@/components/ui/separator';

const CartDrawer = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart
  } = useCart();
  
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Seu Carrinho</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-center justify-center h-full">
            <ShoppingCart className="h-20 w-20 text-muted-foreground/40" />
            <p className="mt-4 text-xl font-semibold">O seu carrinho está vazio</p>
            <p className="mt-2 text-muted-foreground text-center">
              Adicione alguns produtos para continuar com a compra.
            </p>
            <Button 
              className="mt-6"
              onClick={() => {
                setIsCartOpen(false);
                navigate('/');
              }}
            >
              Continuar a Comprar
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle>Seu Carrinho ({totalItems} items)</SheetTitle>
        </SheetHeader>
        
        <div className="flex-grow overflow-auto py-6">
          {items.map(item => (
            <div key={item.product.id} className="flex gap-4 mb-4">
              <div className="h-20 w-20 rounded overflow-hidden shrink-0">
                <img 
                  src={item.product.image} 
                  alt={item.product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-medium">{item.product.name}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => removeItem(item.product.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <p className="font-semibold">€{item.product.price.toFixed(2)}</p>
                  
                  <div className="flex items-center border rounded overflow-hidden">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-none"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-none"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>€{totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Taxa de entrega</span>
            <span>€2.99</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-bold mb-4">
            <span>Total</span>
            <span>€{(totalPrice + 2.99).toFixed(2)}</span>
          </div>
          
          <Button className="w-full mb-2" onClick={handleCheckout}>
            Finalizar Compra
          </Button>
          
          <Button variant="outline" className="w-full" onClick={clearCart}>
            Limpar Carrinho
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
