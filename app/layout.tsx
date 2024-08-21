import type { Metadata } from "next";
import { Fugaz_One, Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";


const openSans = Open_Sans({ subsets: ["latin"] });
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
      <Link href='/'>
      <h1 className={'text-base sm:text-lg textGradient text-slate-800 ' + fugaz.className} >MoodHub</h1>
      </Link>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
     {/* <p className={"text-indigo-500 " + fugaz.className}>Created for fun</p> */}
     <p className={"text-indigo-500 " + fugaz.className}>🍋 | lemon iced tea</p>
    </footer>
  )
  return (
    <html lang="en">
      <body className={ 'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-600 '+openSans.className}>
       {header}
        {children}
        {footer}
      </body>

    </html>
  );
}
