import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer, FloatingCtas } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollBlur } from "@/components/ScrollBlur";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s - ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-bg text-ink antialiased" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){function s(n){if(n&&n.removeAttribute)n.removeAttribute('fdprocessedid')}function t(){document.querySelectorAll('[fdprocessedid]').forEach(s)}t();new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){s(ms[i].target)}}).observe(document.documentElement,{subtree:true,attributes:true,attributeFilter:['fdprocessedid']});})();",
          }}
        />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollBlur />
          <FloatingCtas />
        </SmoothScroll>
      </body>
    </html>
  );
}
