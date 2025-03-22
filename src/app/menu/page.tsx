"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { categories, menuItems, MenuItem } from "@/data/menu";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Flame, Leaf, Wheat } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "../../hook/useCart";

const MenuPage = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);
  const [activeFilters, setActiveFilters] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
  });

  useEffect(() => {
    let filtered = [...menuItems];

    // Filtrar por categoría
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filtrar por término de búsqueda
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term) ||
          item.category.toLowerCase().includes(term)
      );
    }

    // Aplicar filtros adicionales
    if (activeFilters.vegetarian) {
      filtered = filtered.filter((item) => item.vegetarian);
    }

    if (activeFilters.vegan) {
      filtered = filtered.filter((item) => item.vegan);
    }

    if (activeFilters.glutenFree) {
      filtered = filtered.filter((item) => item.glutenFree);
    }

    setFilteredItems(filtered);
  }, [selectedCategory, searchTerm, activeFilters]);

  const handleFilterChange = (
    filterName: "vegetarian" | "vegan" | "glutenFree"
  ) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const renderSpicyIndicator = (level: number | undefined) => {
    if (!level) return null;

    return (
      <div className="flex items-center ml-2">
        {Array.from({ length: level }).map((_, i) => (
          <Flame key={i} size={12} className="text-red-500" />
        ))}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#5a3d26] mb-6">
              Nuestro <span className="text-[#eb8e23]">Menú</span>
            </h1>
            <p className="text-xl text-[#745434] max-w-3xl mx-auto">
              Explora nuestro amplio menú de deliciosas opciones, desde
              hamburguesas y perros hasta salchipapas.
            </p>
          </motion.div>

          {/* Filtros y Búsqueda */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
              <div className="relative w-full md:w-80">
                <Input
                  type="text"
                  placeholder="Buscar platos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>

              <div className="flex space-x-3">
                <Button
                  size="sm"
                  variant={activeFilters.vegetarian ? "default" : "outline"}
                  className={
                    activeFilters.vegetarian
                      ? "bg-green-500 hover:bg-green-600"
                      : "border-green-500 text-green-500 hover:bg-green-50"
                  }
                  onClick={() => handleFilterChange("vegetarian")}
                >
                  <Leaf size={16} className="mr-1" /> Vegetariano
                </Button>
                <Button
                  size="sm"
                  variant={activeFilters.vegan ? "default" : "outline"}
                  className={
                    activeFilters.vegan
                      ? "bg-emerald-500 hover:bg-emerald-600"
                      : "border-emerald-500 text-emerald-500 hover:bg-emerald-50"
                  }
                  onClick={() => handleFilterChange("vegan")}
                >
                  <Leaf size={16} className="mr-1" /> Vegano
                </Button>
                <Button
                  size="sm"
                  variant={activeFilters.glutenFree ? "default" : "outline"}
                  className={
                    activeFilters.glutenFree
                      ? "bg-[#9b2d1d] hover:bg-[#b3301f]"
                      : "border-[#b3301f] text-[#b3301f] hover:bg-amber-50"
                  }
                  onClick={() => handleFilterChange("glutenFree")}
                >
                  <Wheat size={16} className="mr-1" /> Sin Gluten
                </Button>
              </div>
            </div>

            {/* Categorías */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                className={
                  selectedCategory === "all"
                    ? "bg-[#9b2d1d] hover:bg-[#b3301f] text-white"
                    : "border-[#b3301f] text-[#b3301f] hover:bg-orange-50"
                }
                onClick={() => setSelectedCategory("all")}
              >
                Todos
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  className={
                    selectedCategory === category.id
                      ? "bg-[#9b2d1d] hover:bg-[#b3301f] text-white"
                      : "border-[#b3301f] text-[#b3301f] hover:bg-orange-50"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Menú */}
          {filteredItems.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow border-orange-100">
                    <div className="relative h-52 bg-gradient-to-br from-orange-100 to-orange-50 flex justify-center items-center">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="h-44 object-contain drop-shadow-xl"
                        whileHover={{
                          scale: 1.05,
                          rotate: 3,
                          transition: { duration: 0.3 },
                        }}
                      />
                      <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold uppercase rounded-full px-3 py-1">
                        {item.category}
                      </div>

                      <div className="absolute bottom-3 left-3 flex space-x-2">
                        {item.vegetarian && (
                          <div className="bg-green-500 text-white text-xs font-bold uppercase rounded-full px-3 py-1">
                            Veggie
                          </div>
                        )}
                        {item.vegan && (
                          <div className="bg-emerald-500 text-white text-xs font-bold uppercase rounded-full px-3 py-1">
                            Vegano
                          </div>
                        )}
                        {item.glutenFree && (
                          <div className="bg-amber-500 text-white text-xs font-bold uppercase rounded-full px-3 py-1">
                            Sin Gluten
                          </div>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center">
                          <h3 className="text-xl font-bold text-[#5a3d26]">
                            {item.name}
                          </h3>
                          {renderSpicyIndicator(item.spicy)}
                        </div>
                        <span className="text-xl font-bold text-orange-500">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-[#745434] mb-4">{item.description}</p>
                      <Button
                        variant="outline"
                        className="w-full border-[#9b2d1d] text-[#b3301f] hover:bg-orange-50 mt-2"
                        onClick={() => addToCart(item)}
                      >
                        Agregar al Carrito
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                No se encontraron resultados
              </h3>
              <p className="text-gray-500 mb-6">
                No hay platos que coincidan con los filtros seleccionados.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchTerm("");
                  setActiveFilters({
                    vegetarian: false,
                    vegan: false,
                    glutenFree: false,
                  });
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;
