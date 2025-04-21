
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface User {
  id: string;
  name: string;
  email: string;
  address: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string, address: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  
  // Simulate login functionality
  const login = async (email: string, password: string) => {
    try {
      // In a real app, this would be an API call
      if (email && password) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setUser({
          id: '1',
          name: 'Utilizador de Teste',
          email,
          address: 'Rua de Teste, 123, Lisboa'
        });
        
        toast({
          title: "Login bem-sucedido",
          description: "Bem-vindo de volta!",
          duration: 3000,
        });
      } else {
        throw new Error('Email e senha são necessários');
      }
    } catch (error) {
      toast({
        title: "Erro de login",
        description: "Credenciais inválidas. Por favor, tente novamente.",
        variant: "destructive",
        duration: 3000,
      });
      throw error;
    }
  };

  // Simulate logout functionality
  const logout = () => {
    setUser(null);
    toast({
      title: "Logout bem-sucedido",
      description: "Até breve!",
      duration: 3000,
    });
  };

  // Simulate registration functionality
  const register = async (name: string, email: string, password: string, address: string) => {
    try {
      // In a real app, this would be an API call
      if (name && email && password) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setUser({
          id: '1',
          name,
          email,
          address
        });
        
        toast({
          title: "Registo bem-sucedido",
          description: "A sua conta foi criada com sucesso!",
          duration: 3000,
        });
      } else {
        throw new Error('Todos os campos são necessários');
      }
    } catch (error) {
      toast({
        title: "Erro de registo",
        description: "Não foi possível criar a conta. Por favor, tente novamente.",
        variant: "destructive",
        duration: 3000,
      });
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
