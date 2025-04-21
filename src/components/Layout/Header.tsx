
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  ShoppingCart, 
  User, 
  Search, 
  Menu, 
  MapPin 
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Header = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const { user, isAuthenticated, login, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Handle login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      setShowLoginDialog(false);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would navigate to search results
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container px-4 mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-semibold hover:text-primary">Início</Link>
                <Link to="/products/cervejas" className="text-lg hover:text-primary">Cervejas</Link>
                <Link to="/products/vinhos" className="text-lg hover:text-primary">Vinhos</Link>
                <Link to="/products/bebidas_espirituosas" className="text-lg hover:text-primary">Bebidas Espirituosas</Link>
                <Link to="/products/refrigerantes" className="text-lg hover:text-primary">Refrigerantes</Link>
                <Link to="/products/snacks" className="text-lg hover:text-primary">Petiscos</Link>
                <div className="mt-6 pt-6 border-t">
                  <Button className="w-full" onClick={() => setShowLoginDialog(true)}>
                    Entrar
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="font-bold text-2xl text-zeblue">
              <span className="text-zeyellow">Zé</span> Entrega
            </div>
          </Link>

          {/* Address (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <MapPin className="text-primary" size={20} />
            <div className="text-sm">
              <p className="font-medium">Entregar em</p>
              <p className="text-muted-foreground">Av. da Liberdade, Lisboa</p>
            </div>
          </div>

          {/* User & Cart */}
          <div className="flex items-center gap-2">
            {/* User dropdown */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="font-medium">{user?.name}</DropdownMenuItem>
                  <DropdownMenuItem>Minha Conta</DropdownMenuItem>
                  <DropdownMenuItem>Os Meus Pedidos</DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>Sair</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold mb-4">Entrar</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Entrar</Button>
                    <p className="text-center text-sm">
                      Para este demo, use qualquer email e senha
                    </p>
                  </form>
                </DialogContent>
              </Dialog>
            )}

            {/* Cart button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-secondary text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="pb-4">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Pesquisar produtos..."
              className="pr-10"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              size="icon" 
              variant="ghost" 
              className="absolute top-0 right-0 h-10"
            >
              <Search className="h-5 w-5" />
            </Button>
          </form>
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:block pb-3">
          <ul className="flex items-center space-x-8">
            <li>
              <Link to="/products/cervejas" className="text-sm font-medium hover:text-primary">Cervejas</Link>
            </li>
            <li>
              <Link to="/products/vinhos" className="text-sm font-medium hover:text-primary">Vinhos</Link>
            </li>
            <li>
              <Link to="/products/bebidas_espirituosas" className="text-sm font-medium hover:text-primary">Bebidas Espirituosas</Link>
            </li>
            <li>
              <Link to="/products/refrigerantes" className="text-sm font-medium hover:text-primary">Refrigerantes</Link>
            </li>
            <li>
              <Link to="/products/snacks" className="text-sm font-medium hover:text-primary">Petiscos</Link>
            </li>
            <li>
              <Link to="/products/gelo" className="text-sm font-medium hover:text-primary">Gelo</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
