"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Search,
  MapPin,
  DollarSign,
  Home,
  Grid,
  List,
  ChevronDown,
} from "lucide-react";

const propertyTypes = [
  { value: "apartment", label: "Apartamento" },
  { value: "house", label: "Casa" },
  { value: "villa", label: "Villa" },
  { value: "office", label: "Comercial" },
];

const statuses = [
  { value: "for_rent", label: "Aluguel" },
  { value: "for_sale", label: "Venda" },
];

export default function PropertiesPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    status: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleFilterChange = (
    key: string,
    value: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            RealEstate
          </Link>
          <div className="flex-1 mx-8 hidden md:flex">
            <div className="flex items-center gap-2 flex-1 border border-input rounded-lg px-4">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar propriedades..."
                className="flex-1 py-2 outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="outline" size="sm">
                Entrar
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar de Filtros */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-border p-6 sticky top-24">
              <h2 className="text-lg font-bold mb-6">Filtros</h2>

              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Buscar
                  </label>
                  <Input
                    placeholder="Endereço, cidade..."
                    value={filters.search}
                    onChange={(e) =>
                      handleFilterChange("search", e.target.value)
                    }
                  />
                </div>

                {/* Property Type */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tipo de Propriedade
                  </label>
                  <select
                    value={filters.type}
                    onChange={(e) =>
                      handleFilterChange("type", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  >
                    <option value="">Todos</option>
                    {propertyTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Status
                  </label>
                  <select
                    value={filters.status}
                    onChange={(e) =>
                      handleFilterChange("status", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  >
                    <option value="">Todos</option>
                    {statuses.map((status) => (
                      <option key={status.value} value={status.value}>
                        {status.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Preço Mínimo
                  </label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={filters.minPrice}
                    onChange={(e) =>
                      handleFilterChange("minPrice", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Preço Máximo
                  </label>
                  <Input
                    type="number"
                    placeholder="Sem limite"
                    value={filters.maxPrice}
                    onChange={(e) =>
                      handleFilterChange("maxPrice", e.target.value)
                    }
                  />
                </div>

                <Button className="w-full">Aplicar Filtros</Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    setFilters({
                      search: "",
                      type: "",
                      status: "",
                      minPrice: "",
                      maxPrice: "",
                    })
                  }
                >
                  Limpar Filtros
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  Propriedades
                </h1>
                <p className="text-muted-foreground mt-1">
                  Encontre sua propriedade perfeita
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 rounded-lg ${
                    view === "grid"
                      ? "bg-primary text-white"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 rounded-lg ${
                    view === "list"
                      ? "bg-primary text-white"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Properties Grid/List */}
            <div
              className={
                view === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                  : "space-y-4"
              }
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card
                  key={i}
                  className={`overflow-hidden hover:shadow-lg transition ${
                    view === "list" ? "flex" : ""
                  }`}
                >
                  <div
                    className={`bg-muted flex items-center justify-center ${
                      view === "list" ? "w-48 h-40" : "w-full h-48"
                    }`}
                  >
                    <Home className="w-12 h-12 text-muted-foreground" />
                  </div>

                  <div
                    className={`p-6 flex-1 flex flex-col ${
                      view === "list" ? "justify-between" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-lg text-foreground">
                            Propriedade Exemplo
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                            <MapPin className="w-4 h-4" />
                            São Paulo, SP
                          </div>
                        </div>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                          Venda
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        Descrição da propriedade com detalhes importantes
                      </p>
                    </div>

                    {view === "grid" && (
                      <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                        <div className="text-center">
                          <div className="text-lg font-bold text-foreground">
                            3
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Quartos
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-foreground">
                            2
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Banheiros
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-foreground">
                            120
                          </div>
                          <div className="text-xs text-muted-foreground">
                            m²
                          </div>
                        </div>
                      </div>
                    )}

                    <div
                      className={`flex items-center justify-between ${
                        view === "list" ? "flex-col items-start" : ""
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-5 h-5 text-primary" />
                        <span className="text-2xl font-bold text-foreground">
                          850
                        </span>
                        <span className="text-muted-foreground text-sm">
                          .000
                        </span>
                      </div>
                      <Link href={`/properties/${i}`}>
                        <Button variant="outline" size="sm">
                          Ver Detalhes
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button variant="outline" disabled>
                Anterior
              </Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline">Próximo</Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
