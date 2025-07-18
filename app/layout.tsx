import type { Metadata } from "next";
import { Inter, Poppins, Plus_Jakarta_Sans, Syne, Raleway } from "next/font/google";

import "./globals.css";
import { NavbarMenu } from "@/components/ui/navbar-menu";
import Footer from "./sections-old/Footer";
import Script from "next/script";
import FontAwesome from "@/components/FontAwesome";
import EventBanner from "@/components/ui/event-banner";

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
        
        {/* REB2B Script */}
        <Script id="reb2b-script" strategy="afterInteractive">
          {`
            !function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/LNKLDHPD53OJ.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("LNKLDHPD53OJ");
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <FontAwesome />
        <EventBanner />
        <div className="h-10"></div>
        <NavbarMenu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
