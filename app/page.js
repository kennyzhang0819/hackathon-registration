import Image from "next/image";
import RegistrationForm from './components/RegistrationForm';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold underline text-center mb-8">
        Hackathon Registration
      </h1>
      <RegistrationForm />
    </main>
  );
}
