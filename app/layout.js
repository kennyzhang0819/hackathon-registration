import { Karla } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const karla = Karla({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla"
});

const spaceGrotesk = Space_Grotesk({
  weight: ['600', '700'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk"
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <body className={spaceGrotesk.variable + ' ' + karla.variable}>
        {children}
      </body>
    </>
  );
}