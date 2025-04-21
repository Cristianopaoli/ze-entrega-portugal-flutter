
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    address: user?.address || '',
    city: '',
    postalCode: '',
    phone: '',
    paymentMethod: 'card',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulating order processing
    toast({
      title: "Pedido recebido!",
      description: "O seu pedido foi processado com sucesso e será entregue em breve.",
    });
    
    // Clear cart and redirect to home
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">O seu carrinho está vazio</h1>
        <p className="text-muted-foreground mb-6">Adicione produtos ao seu carrinho para finalizar a compra.</p>
        <Button onClick={() => navigate('/')}>Continuar a Comprar</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Informações de Entrega</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Nome Completo</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="address">Morada</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Código Postal</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Método de Pagamento</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="card"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary"
                  />
                  <Label htmlFor="card">Cartão de Crédito/Débito</Label>
                </div>
                
                {formData.paymentMethod === 'card' && (
                  <div className="space-y-4 pl-6">
                    <div>
                      <Label htmlFor="cardNumber">Número do Cartão</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cardExpiry">Data de Validade</Label>
                        <Input
                          id="cardExpiry"
                          name="cardExpiry"
                          placeholder="MM/AA"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardCVC">CVC</Label>
                        <Input
                          id="cardCVC"
                          name="cardCVC"
                          placeholder="123"
                          value={formData.cardCVC}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center space-x-2 mt-2">
                  <input
                    type="radio"
                    id="mbway"
                    name="paymentMethod"
                    value="mbway"
                    checked={formData.paymentMethod === 'mbway'}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary"
                  />
                  <Label htmlFor="mbway">MB WAY</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="paypal"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary"
                  />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
              </div>
            </div>
            
            <Button type="submit" className="w-full py-6 text-lg">
              Confirmar Pedido
            </Button>
          </form>
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-sm sticky top-20">
            <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
            
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="flex justify-between">
                  <span>
                    {item.quantity}x {item.product.name}
                  </span>
                  <span className="font-medium">
                    €{(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              
              <Separator />
              
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>€{totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span>Taxa de entrega</span>
                <span>€2.99</span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>€{(totalPrice + 2.99).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
