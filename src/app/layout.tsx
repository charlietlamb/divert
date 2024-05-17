import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import "./embla.css";
import { cn } from "@/lib/utils";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Divert Marketing",
  description:
    "Divert Marketing is a digital marketing agency that focuses on conversions. We help businesses grow by optimizing their landing pages using CRO.",
  authors: [{ name: "Charlie Lamb", url: "www.charlielamb.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative flex min-h-screen w-full flex-col items-center bg-slate-900 text-slate-200",
          GeistSans.className,
        )}
      >
        {/* <NextUIProviderClient> */}
        <div className="divide-y-white/[0.05] w-full divide-y">
          <Nav />
          {children}
          <Footer />
        </div>
        {/* </NextUIProviderClient> */}
      </body>
    </html>
  );
}
