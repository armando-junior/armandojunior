import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portifólio Armando Junior",
  description: "Portifólio de projetos desenvolvidos por Armando Junior",
};

const fonte = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fonte.className} antialiased`}> {children} </body>
    </html>
  );
}
