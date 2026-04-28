import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aldane Systems",
  description:
    "Aldane Systems builds websites, applications, automation tools, hosting, and maintenance solutions for businesses.",
  icons: {
    icon: [{ url: "/logo1.png" }],
    shortcut: ["/logo1.png"],
    apple: ["/logo1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#050B14] text-white">
        <nav className="sticky top-0 z-50 border-b border-slate-800 bg-[#050B14]/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/logo1.png"
                alt="Aldane Systems Logo"
                className="h-12 w-12 object-contain"
              />

              <div>
                <h1 className="text-xl font-bold tracking-wide">ALDANE</h1>
                <p className="text-xs tracking-[0.35em] text-slate-300">
                  SYSTEMS
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-8 text-sm md:flex">
              <a className="text-blue-400" href="/">
                Home
              </a>

              <a href="/#about">About</a>

              <a href="/services">Services</a>

              <a href="/pricing">Pricing</a>

              <a href="/quote">Request Quote</a>

              <a
                href="/contact"
                className="rounded-lg border border-blue-500 px-4 py-2 transition hover:bg-blue-600/20"
              >
                Contact Us
              </a>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
