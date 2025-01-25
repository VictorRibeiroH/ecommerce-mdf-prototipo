import React, { useState } from 'react';
import { Menu, X, Search, Bot, ShoppingCart, ChevronDown, Home, Box, Phone, Mail, Heart, Share2, Truck } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [quantidade, setQuantidade] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const handleVoltarClick = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold">PROTÓTIPO</div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-blue-400 flex items-center gap-2">
                <Home size={20} />
                Início
              </a>
              <div className="relative group">
                <button className="hover:text-blue-400 flex items-center gap-2">
                  <Box size={20} />
                  Produtos
                  <ChevronDown size={16} />
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white text-slate-800 shadow-lg rounded-md mt-2">
                  <a href="#" className="block px-4 py-2 hover:bg-slate-100">Móveis Planejados</a>
                  <a href="#" className="block px-4 py-2 hover:bg-slate-100">Painéis</a>
                  <a href="#" className="block px-4 py-2 hover:bg-slate-100">Portas</a>
                </div>
              </div>
              <a href="#" className="hover:text-blue-400 flex items-center gap-2">
                <Phone size={20} />
                Contato
              </a>
              <a href="#" className="hover:text-blue-400">
                <ShoppingCart size={20} />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="hover:text-blue-400 flex items-center gap-2">
                  <Home size={20} />
                  Início
                </a>
                <a href="#" className="hover:text-blue-400 flex items-center gap-2">
                  <Box size={20} />
                  Produtos
                </a>
                <a href="#" className="hover:text-blue-400 flex items-center gap-2">
                  <Phone size={20} />
                  Contato
                </a>
                <a href="#" className="hover:text-blue-400 flex items-center gap-2">
                  <ShoppingCart size={20} />
                  Carrinho
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search Bar */}
      <div className="bg-slate-100 py-4">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Busque produtos em MDF..."
              className="w-full px-4 py-2 pr-12 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute right-4 text-slate-400" size={20} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {selectedProduct === null ? (
          <>
            {/* AI Assistant Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 mb-8">
              <div className="flex items-center gap-4">
                <Bot size={40} />
                <div>
                  <h2 className="text-2xl font-bold mb-2">Assistente Virtual IA</h2>
                  <p>Nosso assistente inteligente pode ajudar você a encontrar o produto ideal em MDF para seu projeto!</p>
                </div>
              </div>
            </div>

            {/* Featured Products */}
            <h2 className="text-2xl font-bold mb-6">Produtos em Destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=60`}
                    alt={`Produto MDF ${item}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Móvel Planejado {item}</h3>
                    <p className="text-slate-600 mb-4">Móvel em MDF com acabamento premium</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-blue-600">R$ {(1500 * item).toLocaleString('pt-BR')}</span>
                      <button 
                        onClick={() => setSelectedProduct(item)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                      >
                        Ver Detalhes
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Botão Voltar */}
            <button
              onClick={handleVoltarClick}
              className="mb-6 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
            >
              ← Voltar para produtos
            </button>

            {/* Produto Único */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                {/* Imagem do Produto */}
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=60"
                    alt="Mesa de Jantar em MDF"
                    className="w-full rounded-lg"
                  />
                  <div className="grid grid-cols-4 gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=60"
                      alt="Mesa de Jantar em MDF - Vista 1"
                      className="w-full h-20 object-cover rounded cursor-pointer"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=60"
                      alt="Mesa de Jantar em MDF - Vista 2"
                      className="w-full h-20 object-cover rounded cursor-pointer"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=60"
                      alt="Mesa de Jantar em MDF - Vista 3"
                      className="w-full h-20 object-cover rounded cursor-pointer"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=60"
                      alt="Mesa de Jantar em MDF - Vista 4"
                      className="w-full h-20 object-cover rounded cursor-pointer"
                    />
                  </div>
                </div>

                {/* Detalhes do Produto */}
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Mesa de Jantar Moderna em MDF</h1>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-blue-600">R$ 2.499,00</span>
                      <span className="text-sm text-slate-500 line-through">R$ 2.999,00</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Truck size={20} />
                      <span>Frete grátis para todo o Brasil</span>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">
                        Quantidade
                      </label>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                          className="px-3 py-1 border rounded-md"
                        >
                          -
                        </button>
                        <span className="w-12 text-center">{quantidade}</span>
                        <button 
                          onClick={() => setQuantidade(quantidade + 1)}
                          className="px-3 py-1 border rounded-md"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                        Adicionar ao Carrinho
                      </button>
                      <button className="p-3 border rounded-lg hover:bg-slate-50">
                        <Heart size={24} />
                      </button>
                      <button className="p-3 border rounded-lg hover:bg-slate-50">
                        <Share2 size={24} />
                      </button>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h2 className="text-xl font-semibold mb-4">Descrição do Produto</h2>
                    <p className="text-slate-600">
                      Mesa de jantar moderna fabricada em MDF de alta qualidade com acabamento premium. 
                      Design contemporâneo que combina com qualquer ambiente. Dimensões: 160x90x75cm.
                    </p>
                    <ul className="mt-4 space-y-2 text-slate-600">
                      <li>• Material: MDF 18mm com acabamento em laminado</li>
                      <li>• Cor: Carvalho Natural</li>
                      <li>• Capacidade: 6 lugares</li>
                      <li>• Garantia: 12 meses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Produtos Relacionados */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=60`}
                      alt={`Mesa Relacionada ${item}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">Mesa de Jantar {item}</h3>
                      <p className="text-slate-600 mb-4">Mesa em MDF com acabamento premium</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-blue-600">R$ {(1999 * item).toLocaleString('pt-BR')}</span>
                        <button 
                          onClick={() => setSelectedProduct(item)}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Ver Detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PROTÓTIPO</h3>
              <p className="text-slate-400">Soluções em MDF para seu projeto</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="flex flex-col space-y-2 text-slate-400">
                <a href="#" className="hover:text-white flex items-center gap-2">
                  <Mail size={20} />
                  contato@prototipo.com
                </a>
                <a href="#" className="hover:text-white flex items-center gap-2">
                  <Phone size={20} />
                  (11) 99999-9999
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Desenvolvido por</h3>
              <p className="text-slate-400">Víctor Ribeiro</p>
              <p className="text-slate-400 mt-2">&copy; 2025 Todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;