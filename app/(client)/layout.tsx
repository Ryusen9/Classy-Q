import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Classy Q",
  description: "Your Ultimate platform for watches and accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <main>
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </main>
    </ClerkProvider>
  );
}
