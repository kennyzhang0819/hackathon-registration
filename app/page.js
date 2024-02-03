import RegistrationForm from '../components/RegistrationForm.client';
import Image from 'next/image';
import Background from '../public/footer_background.png';
import Footer from '../public/wave_2.svg';
import CalHacksLogo from '../public/cal_hacks_9.svg';
import BearImage from '../public/blossoms_ddoski.svg';
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className='header-footer'>
        <Image src={Background} alt="Top Banner" layout="responsive" />
      </div>
      <div style={{ width: '100%' }}>

        <div className="logo-container">
          <Image 
            src={CalHacksLogo} 
            alt="Cal Hacks 11.0"
            layout="intrinsic"
            width={150}
            height={50}
          />
        </div>

        <div className="bear-image-container">
          <Image 
            src={BearImage} 
            alt="Bear"
            layout="intrinsic"
            width={200}
            height={200}
          />
        </div>
      </div>
      <main className="main-container">
        <h1>Cal Hacks 11.0 Registration</h1>
        <RegistrationForm />
      </main>
    </>
  );
}