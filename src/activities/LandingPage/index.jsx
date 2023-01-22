import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import HeaderLanding from '../../components/HeaderLanding';
import WhoIam from '../../components/_Parties/landing/WhoIam';
import SomeBackground from '../../components/_Parties/landing/SomeBackground';
import BuildAndWrite from '../../components/_Parties/landing/BuildAndWrite';
import BottomNav from '../../components/BottomNav';
import '../../css/scroll_animate.css';
import Skills from '../../components/_Parties/landing/Skills';

function LandingPage() {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll('.reveal');

      for (let i = 0; i < reveals.length; i += 1) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    }

    window.addEventListener('scroll', reveal);
  }, []);
  return (
    <div className="flex flex-col overflow-x-hidden">
      <HeaderLanding />
      <main className="flex flex-col gap-12">
        <WhoIam />
        <SomeBackground />
        <BuildAndWrite />
        <Skills />
      </main>
      <BottomNav />
      <Footer />

    </div>
  );
}

export default LandingPage;
