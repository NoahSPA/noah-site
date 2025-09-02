import type { Metadata } from "next";
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
  title: "Noah IT - Servicios Informáticos Profesionales",
  description: "Noah IT ofrece soluciones tecnológicas integrales para empresas: desarrollo web, apps móviles, cloud computing, ciberseguridad y consultoría IT. Transformamos tu negocio digital.",
  keywords: "servicios informáticos, desarrollo web, apps móviles, cloud computing, ciberseguridad, consultoría IT, tecnología, software, México",
  authors: [{ name: "Noah IT" }],
  creator: "Noah IT",
  publisher: "Noah IT",
  robots: "index, follow",
  openGraph: {
    title: "Noah IT - Servicios Informáticos Profesionales",
    description: "Soluciones tecnológicas integrales para transformar tu negocio digital",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
