import Link from "next/link";
import { Search, MapPin, Home, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            RealEstate
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/properties" className="text-foreground hover:text-primary transition">
              Propriedades
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              Sobre
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contato
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="outline">Entrar</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Cadastrar</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-transparent py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Encontre seu <span className="text-primary">Imóvel Perfeito</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            A plataforma mais moderna e completa para comprar, vender ou alugar propriedades. 
            Milhares de imóveis à sua espera.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex items-center gap-2 border border-input rounded-lg px-4">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar por cidade ou endereço..."
                  className="flex-1 py-3 outline-none bg-transparent"
                />
              </div>
              <Link href="/properties">
                <Button className="w-full md:w-auto h-full">
                  Buscar
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5.000+</div>
              <div className="text-muted-foreground">Propriedades</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2.500+</div>
              <div className="text-muted-foreground">Clientes Felizes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Cidades</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Propriedades em Destaque</h2>
            <p className="text-muted-foreground">Confira as melhores ofertas do momento</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="bg-muted h-48 flex items-center justify-center">
                  <Home className="w-16 h-16 text-muted-foreground" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-foreground">Propriedade Exemplo</h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                        <MapPin className="w-4 h-4" />
                        São Paulo, SP
                      </div>
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Venda
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    Descrição da propriedade com detalhes importantes
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">3</div>
                      <div className="text-xs text-muted-foreground">Quartos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">2</div>
                      <div className="text-xs text-muted-foreground">Banheiros</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">120</div>
                      <div className="text-xs text-muted-foreground">m²</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <span className="text-2xl font-bold text-foreground">850</span>
                      <span className="text-muted-foreground text-sm">.000</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/properties">
              <Button size="lg">Ver Todas as Propriedades</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Quer vender ou alugar sua propriedade?</h2>
          <p className="text-xl mb-8 text-white/90">
            Cadastre sua propriedade em minutos e alcance milhares de possíveis compradores ou locatários
          </p>
          <Link href="/submit-property">
            <Button size="lg" variant="secondary">
              Listar minha Propriedade
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">RealEstate</h3>
              <p className="text-gray-300 text-sm">
                A plataforma moderna de imóveis para o Brasil
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/properties" className="hover:text-white">Propriedades</Link></li>
                <li><Link href="/about" className="hover:text-white">Sobre</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white">Termos</a></li>
                <li><a href="#" className="hover:text-white">Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Email: contato@realestate.com</li>
                <li>Tel: (11) 1234-5678</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 RealEstate. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
