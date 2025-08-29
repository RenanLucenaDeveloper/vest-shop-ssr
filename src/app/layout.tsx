import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vest Shop - Roupas para Cachorro",
  description: "Vista seu melhor amigo com qualidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
