import RegistrationForm from '../components/RegistrationForm.client';
import Image from 'next/image';
import Background from '../public/footer_background.png';
import CalHacksLogo from '../public/cal_hacks_9.svg';
import "./globals.css";


export default function Home() {
  return (
    <>
    <div>
      <Image src={Background} alt="Top Banner" style={{
          width: '100%',
          height: 'auto',
        }} />
        <Image src={CalHacksLogo} alt="Cal Hacks 11.0" style={
          {
            padding: "20px",
            height: 'auto',
          }
        
        } />
    </div>
      <main className="container mx-auto px-4 py-8">
        <h1>
          Cal Hacks 11.0 Registration
        </h1>
        <RegistrationForm />
      </main>
    </>
  );
}