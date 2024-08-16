import type { Metadata } from "next";
import { Fugaz_One, Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight:['400'] });

export const metadata: Metadata = {
  title: "mood",
  description: "track your mood daily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className} >MoodHub</h1>
    </header>
  )

  const footer = (
    <footer>
      foot
    </footer>
  )
  return (
    <html lang="en">
      <body className={ 'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col '+inter.className}>
       {header}
        {children}
        {footer}
      </body>

    </html>
  );
}
