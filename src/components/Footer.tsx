"use client";

import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Sabor<span className="text-orange-500">3D</span>
            </h3>
            <p className="mb-4">
              Ofrecemos la mejor experiencia gastronómica con comida callejera y
              de restaurante con un toque moderno y presentaciones en 3D.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-orange-500 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-orange-500 transition-colors"
                >
                  Menú
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="hover:text-orange-500 transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-orange-500 transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/orden"
                  className="hover:text-orange-500 transition-colors"
                >
                  Ordenar
                </Link>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Horario de Atención
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Lunes - Viernes</span>
                <span>11:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos</span>
                <span>12:00 - 21:00</span>
              </li>
              <li className="mt-4 text-orange-500 font-medium">
                Servicio a domicilio disponible
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contáctanos
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-2 text-orange-500 flex-shrink-0 mt-1"
                />
                <span>
                  Av. Insurgentes Sur 123, Col. Roma, Ciudad de Colombia, CP
                  201050
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={18}
                  className="mr-2 text-orange-500 flex-shrink-0"
                />
                <span>+52 55 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail
                  size={18}
                  className="mr-2 text-orange-500 flex-shrink-0"
                />
                <span>info@sabor3d.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sabor3D. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="" className="hover:text-orange-500 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="" className="hover:text-orange-500 transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
