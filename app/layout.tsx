import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"], 
});


export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI platform for rehearsing your interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">{/* guaranteeing that only dark component styles are applied */}
      <body
        className={`${monaSans.className} antialiased pattern`}/* applies that font everywhere on the website by using .className notation  */
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
