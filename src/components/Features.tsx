"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Clock, Truck } from "lucide-react";

const FeatureCard = ({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100"
    >
      <div className="p-3 bg-orange-100 rounded-full text-orange-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <UtensilsCrossed size={24} />,
      title: "Comida Fresca",
      description:
        "Ingredientes frescos y de temporada seleccionados diariamente para garantizar el mejor sabor.",
      delay: 0.1,
    },
    {
      icon: <Clock size={24} />,
      title: "Servicio Rápido",
      description:
        "Preparamos tu comida al momento para que la disfrutes en el menor tiempo posible.",
      delay: 0.2,
    },
    {
      icon: <Truck size={24} />,
      title: "Entrega a Domicilio",
      description:
        "Llevamos nuestros deliciosos platillos directamente a la puerta de tu casa.",
      delay: 0.3,
    },
    // {
    //   icon: <CreditCard size={24} />,
    //   title: "Pago Fácil",
    //   description:
    //     "Múltiples opciones de pago para que elijas la que más te convenga.",
    //   delay: 0.4,
    // },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#5a3d26] mb-4">
            Por qué elegir <span className="text-[#eb8e23]">Zona G</span>
          </h2>
          <p className="text-xl text-[#916f50] max-w-3xl mx-auto">
            Ofrecemos una experiencia culinaria única, combinando sabores
            tradicionales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
