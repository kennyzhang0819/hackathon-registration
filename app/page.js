import RegistrationForm from '../components/RegistrationForm';
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
  display: "swap"
});

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <h1 className={spaceGrotesk.className + ' form-field text-3xl'}>
          Hackathon Registration
        </h1>
        <RegistrationForm />
      </main>
    </>
  );
}