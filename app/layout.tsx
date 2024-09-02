import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import Providers from "./providers";
import { AuthProvider } from "./context/authContext";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Arc",
  description: "Ecommerce book shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <AuthProvider>
        <html lang="en" data-theme="light">
          <body className={poppins.className}>
            <NavBar />
            <main>{children}</main>
            <Footer />
          </body>
        </html>
      </AuthProvider>
    </Providers>
  );
}
