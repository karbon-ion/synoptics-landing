import type { Metadata } from "next";
import { Inter, Poppins, Plus_Jakarta_Sans, Syne, Raleway } from "next/font/google";


import "./globals.css";
import { NavbarMenu } from "@/components/ui/navbar-menu";
import Footer from "./sections-old/Footer";
import Script from "next/script";
import FontAwesome from "@/components/FontAwesome";

// Font configurations
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne",
});
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: 'Enterprise AI Platform for Scalable Automation | Synoptix AI',
  description: 'Power your enterprise with Synoptix AI—a scalable, secure enterprise AI platform built to drive innovation, automation, and intelligent business decisions.',
  metadataBase: new URL("https://synoptix.ai"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable} ${syne.variable} ${jakartaSans.variable} ${raleway.variable}`}>
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

        {/* LinkedIn Insight Tags */}
        <Script id="linkedin-insight-tag" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "7172076";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} alt="" src="https://px.ads.linkedin.com/collect/?pid=7172076&fmt=gif" />
        </noscript>

        <Script id="linkedin-insight-tag-2" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "7229228";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} alt="" src="https://px.ads.linkedin.com/collect/?pid=7229228&fmt=gif" />
        </noscript>

        {/* Microsoft Bing UET */}
        <Script id="microsoft-bing-uet" strategy="afterInteractive">
          {`
            (function(w,d,t,r,u) {
              var f,n,i;
              w[u]=w[u]||[],f=function() {
                var o={ti:"97184883", enableAutoSpaTracking: true};
                o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
              },
              n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function() {
                var s=this.readyState;
                s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
              },
              i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
            })(window,document,"script","//bat.bing.com/bat.js","uetq");
          `}
        </Script>
        <script id="vtag-ai-js" async src="https://r2.leadsy.ai/tag.js" data-pid="9wW4yMR3XyNFUEOL" data-version="062024">
        </script>
      </head>
      <body className={inter.className}>
        <FontAwesome />
        <div className="fixed w-full top-0 z-[60] text-center py-2 mb-4 font-medium text-white
        bg-[#5662F6] backdrop-blur-sm">
          Upcoming Event- See Synoptix in action at National Convention Centre Canberra | 31 July 2025
        </div>
        <div className="h-10"></div>
        <NavbarMenu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
