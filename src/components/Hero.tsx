"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Initialize windowSize
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateTransform = (depth: number) => {
    // Make sure we're not on the server
    if (typeof window === "undefined" || windowSize.width === 0) {
      return `translate(0px, 0px)`;
    }

    const moveX = ((mousePosition.x - windowSize.width / 2) / 50) * depth;
    const moveY = ((mousePosition.y - windowSize.height / 2) / 50) * depth;
    return `translate(${moveX}px, ${moveY}px)`;
  };

  return (
    <section className="relative pt-24 pb-40 overflow-hidden bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#745434] mb-6">
              Sabores que <span className="text-[#eb8e23]">Cobran Vida</span>
            </h1>
            <p className="text-xl text-[#916f50] mb-8">
              Descubre nuestra increíble selección de comida callejera y de
              restaurante con un toque moderno, deleitarán todos tus sentidos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#9b2d1d] hover:bg-[#b3301f] text-white"
                onClick={() => router.push("/menu")}
              >
                Ver Menú
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#b3301f] text-[#9b2d1d] hover:bg-orange-50"
                onClick={() => router.push("/orden")}
              >
                Ordenar Ahora
              </Button>
            </div>
          </motion.div>

          {/* 3D Food Images */}
          <div className="relative h-[400px] md:h-[500px]">
            <motion.div
              className="absolute top-10 left-10"
              style={{ transform: calculateTransform(1.5) }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://png.pngtree.com/png-clipart/20231001/ourmid/pngtree-cute-cartoon-burger-for-story-png-image_10191020.png"
                alt="Hamburguesa 3D"
                className="w-56 h-56 object-contain drop-shadow-2xl transform -rotate-12"
              />
            </motion.div>

            <motion.div
              className="absolute top-40 right-20"
              style={{ transform: calculateTransform(2) }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src="https://png.pngtree.com/png-clipart/20231001/ourmid/pngtree-cute-cartoon-burger-for-story-png-image_10191020.png"
                alt="Tacos 3D"
                className="w-48 h-48 object-contain drop-shadow-2xl transform rotate-12"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-10 left-20"
              style={{ transform: calculateTransform(2.5) }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img
                src="https://png.pngtree.com/png-clipart/20231001/ourmid/pngtree-cute-cartoon-burger-for-story-png-image_10191020.png"
                alt="Bebida 3D"
                className="w-32 h-32 object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Blob Background */}
      <motion.div
        className="absolute top-1/3 -right-64 w-[600px] h-[600px] rounded-full bg-[#9b2d1d] opacity-30 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#eb8e23] opacity-30 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
};

export default Hero;
