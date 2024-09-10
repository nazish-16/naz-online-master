import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frezz1ck",
  description: "portfolio built using next.js",
  icons: "https://img.icons8.com/?size=100&id=lo2KtLTeuRma&format=png&color=000000"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >{children}
      </ThemeProvider>
      </body>
    </html>
  );
}
