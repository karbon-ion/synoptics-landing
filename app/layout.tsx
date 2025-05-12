import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { NavbarMenu } from "@/components/ui/navbar-menu";
import Footer from "./sections/Footer";
import Script from "next/script";
import FontAwesome from "@/components/FontAwesome";

const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Enterprise AI Platform for Secure Automation | Synoptix.AI",
  description: "Explore Synoptix.AI – an enterprise AI platform to automate workflows, boost productivity, and keep your business data fully secure.",
  metadataBase: new URL('https://synoptix.ai'),
  alternates: {
    canonical: '/',
  },
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
        
        {/* LinkedIn Insight Tag */}
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
          <img height="1" width="1" style={{display: "none"}} alt="" src="https://px.ads.linkedin.com/collect/?pid=7172076&fmt=gif" />
        </noscript>
        
        {/* Additional LinkedIn Insight Tag */}
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
          <img height="1" width="1" style={{display: "none"}} alt="" src="https://px.ads.linkedin.com/collect/?pid=7229228&fmt=gif" />
        </noscript>
        
        {/* Microsoft Bing UET (Universal Event Tracking) */}
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
      </head>
      <body className={inter.className}>
        <FontAwesome />
        <NavbarMenu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
