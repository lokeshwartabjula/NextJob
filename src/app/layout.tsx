"use client";
import { Container } from "@mui/material";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <Container maxWidth="lg" sx={{ marginTop: 8 }}>
          {children}
        </Container>
      </body>
    </html>
  );
}
