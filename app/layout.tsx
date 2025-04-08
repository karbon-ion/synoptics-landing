import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarMenu } from "@/components/ui/navbar-menu";
import Footer from "./sections/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Synoptix.ai - Enterprise AI Solutions",
  description: "Enterprise AI solutions for businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Microsoft Clarity Analytics */}
        <Script id="microsoft-clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "p7iqk6lcdy");
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <NavbarMenu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
