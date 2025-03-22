"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CartDrawer } from "@/components/CartDrawer";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Menú", href: "/menu" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-bold text-2xl text-orange-500"
            >
              Zona G<span className="text-orange-600"> Fast Food</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-[#745434] hover:text-[#eb8e23] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <CartDrawer />
              <Button
                variant="default"
                className="bg-[#9b2d1d] hover:bg-[#b3301f] text-white"
                asChild
              >
                <Link href="/orden">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Ordenar
                </Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <CartDrawer />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col mt-10 space-y-5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-[#745434] text-lg font-medium px-2 py-1 rounded hover:bg-orange-50 hover:text-[#eb8e23] transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button
                    variant="default"
                    className="bg-[#9b2d1d] hover:bg-[#b3301f] text-white mt-4 w-full"
                    asChild
                  >
                    <Link href="/orden">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Ordenar
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
