import { CartProvider } from "@/context/CartContext";
import type { Metadata } from "next";
import ClientBody from "./Cbody";
import { Toaster } from "@/components/ui/sonner";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://zonagfastfood.com"),
  title: "Sabor 3D | Comida Deliciosa con Estilo",
  description:
    "Disfruta de la mejor comida callejera y de restaurante con un toque moderno y diseño 3D. Realiza pedidos por WhatsApp y paga en línea.",
  keywords: [
    "comida",
    "restaurante",
    "comida callejera",
    "pedidos en línea",
    "comida 3D",
    "diseño",
  ],
  authors: [{ name: "Sabor 3D Team" }],
  openGraph: {
    title: "Sabor 3D | Comida Deliciosa con Estilo",
    description:
      "Disfruta de la mejor comida callejera y de restaurante con un toque moderno y diseño 3D",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ClientBody>
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </ClientBody>
    </html>
  );
}
