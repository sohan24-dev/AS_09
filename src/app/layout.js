import dns from "node:dns/promises";
dns.setServers(["8.8.8.8", "8.8.4.4"]);



import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextThemeProviders from "@/providers/NextThemeProviders";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IdeaVault",
  description: "This website is for IdeaVault",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextThemeProviders>
          <Navbar></Navbar>
          <main> {children}</main>
          <Footer></Footer>
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
        </NextThemeProviders>

      </body>
    </html>
  );
}
