
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-zeblue text-white py-12 md:py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-zeyellow"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-zeyellow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Bebidas frescas <span className="text-zeyellow">entregues</span> em menos de 30 minutos
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Do nosso armazém para a sua porta. Entregamos cervejas, vinhos, destilados e muito mais.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-zeyellow hover:bg-zeyellow/90 text-black font-semibold text-lg py-6 px-8">
              Comprar Agora
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold text-lg py-6 px-8">
              Ver Produtos
            </Button>
          </div>
          <p className="text-sm opacity-75">
            *Faça o seu pedido até às 22h. Idade mínima: 18 anos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
