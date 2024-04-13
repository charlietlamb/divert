import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import "./embla.css";
import { cn } from "@/lib/utils";
import Nav from "@/components/nav/Nav";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          "debug-screens relative flex min-h-screen w-full flex-col items-center justify-center bg-slate-900 text-slate-200",
          GeistSans.className,
        )}
      >
        {/* <NextUIProviderClient> */}
        <div className="divide-y-white/[0.05] w-full divide-y">
          <Nav />
          {children}
        </div>
        {/* </NextUIProviderClient> */}
      </body>
    </html>
  );
}
