
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zeblue text-white mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">
              <span className="text-zeyellow">Zé</span> Entrega
            </h3>
            <p className="text-sm">A sua bebida preferida à distância de um clique.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Sobre Nós</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-zeyellow">Quem Somos</Link></li>
              <li><Link to="/" className="hover:text-zeyellow">Trabalhe Connosco</Link></li>
              <li><Link to="/" className="hover:text-zeyellow">Blog</Link></li>
              <li><Link to="/" className="hover:text-zeyellow">Imprensa</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Ajuda</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-zeyellow">Perguntas Frequentes</Link></li>
              <li><Link to="/" className="hover:text-zeyellow">Contacto</Link></li>
              <li><Link to="/" className="hover:text-zeyellow">Termos e Condições</Link></li>
              <li><Link to="/" className="hover:text-zeyellow">Política de Privacidade</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Redes Sociais</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://instagram.com" className="hover:text-zeyellow">Instagram</a></li>
              <li><a href="https://facebook.com" className="hover:text-zeyellow">Facebook</a></li>
              <li><a href="https://twitter.com" className="hover:text-zeyellow">Twitter</a></li>
              <li><a href="https://linkedin.com" className="hover:text-zeyellow">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Zé Entrega. Todos os direitos reservados.</p>
          <p className="mt-2">Este é um projeto demonstrativo criado com React.</p>
          <p className="mt-1 text-xs">O consumo de bebidas alcoólicas é proibido para menores de 18 anos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
