import RegistrationForm from '../components/RegistrationForm.client';
import { Space_Grotesk } from "next/font/google";
import "./globals.css";


export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <h1>
          Hackathon Registration
        </h1>
        <RegistrationForm />
      </main>
    </>
  );
}