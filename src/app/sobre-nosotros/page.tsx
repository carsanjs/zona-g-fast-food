"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Utensils, Clock, Heart, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const values = [
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Calidad",
      description:
        "Usamos ingredientes frescos y de la mejor calidad para crear sabores únicos.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Rapidez",
      description:
        "Valoramos tu tiempo, por eso ofrecemos un servicio rápido sin sacrificar la calidad.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Pasión",
      description:
        "Amamos lo que hacemos y eso se refleja en cada platillo que preparamos.",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sostenibilidad",
      description:
        "Comprometidos con el medio ambiente mediante prácticas sostenibles.",
    },
  ];

  const team = [
    {
      name: "Alvaro Saldaña",
      position: "Chef Principal",
      image: "https://i.pravatar.cc/300?img=60",
      description:
        "Con más de 15 años de experiencia en cocina internacional y especialista en fusión de sabores.",
    },
    // {
    //   name: "María González",
    //   position: "Gerente",
    //   image: "https://i.pravatar.cc/300?img=32",
    //   description:
    //     "Apasionada por ofrecer la mejor experiencia a nuestros clientes y experta en gestión de restaurantes.",
    // },
    {
      name: "Checo Creisy",
      position: "Chef Auxiliar",
      image: "https://i.pravatar.cc/300?img=67",
      description:
        "Maestro pastelero con creaciones únicas que combinan técnicas tradicionales con presentaciones modernas.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#5a3d26] mb-6">
                Nuestra <span className="text-[#eb8e23]">Historia</span>
              </h1>
              <p className="text-xl text-[#745434] max-w-3xl mx-auto">
                Descubre quiénes somos y la pasión que nos impulsa a crear
                experiencias gastronómicas únicas con un toque moderno.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold text-[#5a3d26] mb-6">
                  De un sueño a la realidad
                </h2>
                <p className="text-[#745434] mb-4">
                  Zona G Fast Food nació en 2023 como un pequeño puesto de
                  comida callejera con una visión innovadora: combinar sabores
                  tradicionales.
                </p>
                <p className="text-[#745434] mb-4">
                  Nuestros fundadores, apasionados por la gastronomía y la
                  tecnología, decidieron crear un concepto único que
                  revolucionaría la forma de disfrutar la comida callejera,
                  elevándola a un nivel gourmet sin perder su esencia.
                </p>
                <p className="text-[#745434]">
                  Hoy, Zona G Fast Food se ha convertido en un referente
                  gastronómico, manteniendo nuestro compromiso con la calidad,
                  la innovación y la experiencia única para nuestros clientes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudCUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Cocina de Sabor3D"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Interior del restaurante"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#5a3d26] mb-6">
                Nuestros <span className="text-[#eb8e23]">Valores</span>
              </h2>
              <p className="text-xl text-[#745434] max-w-3xl mx-auto">
                Estos son los principios que guían nuestro trabajo diario y nos
                ayudan a ofrecer la mejor experiencia.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100"
                >
                  <div className="p-3 bg-orange-100 rounded-full text-[#eb8e23] mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#5a3d26] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#745434] text-center">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestro <span className="text-[#eb8e23]">Equipo</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conoce a las personas que hacen posible que disfrutemos de
                deliciosos platillos cada día.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-64 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[#eb8e23] font-medium mb-4">
                        {member.position}
                      </p>
                      <p className="text-gray-600">{member.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nuestra Misión
                </h2>
                <p className="text-gray-600 mb-4">
                  Ofrecer una experiencia gastronómica única que combina sabores
                  tradicionales, utilizando ingredientes frescos y de la mejor
                  calidad.
                </p>
                <p className="text-gray-600">
                  Buscamos crear momentos memorables a través de la comida,
                  innovando constantemente pero manteniendo la esencia y
                  autenticidad de los sabores que nos caracterizan.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nuestra Visión
                </h2>
                <p className="text-gray-600 mb-4">
                  Ser reconocidos como el referente en innovación gastronómica,
                  expandiendo nuestro concepto a nivel nacional e internacional,
                  manteniendo siempre nuestros estándares de calidad y
                  originalidad.
                </p>
                <p className="text-gray-600">
                  Queremos revolucionar la forma en que las personas disfrutan
                  de la comida callejera, elevándola a un nivel gourmet sin
                  perder su accesibilidad y esencia popular.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
