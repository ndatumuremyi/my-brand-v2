import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import TopNav from '../../components/TopNav';
import '../../css/coursel_js.css';
import GeneralHeader2 from '../../components/GeneralHeader2';

function MyWorks() {
  useEffect(() => {
    const text1Options = [
      'Rinda',
      'yean',

    ];
    const text2Options = [
      '2023',
      '2022',

    ];
    const colorOptions = ['#EBB9D2', '#FE9968', '#7FE0EB', '#6CE5B1'];
    const imageOptions = [
      './assets/images/projects/rinda.png',
      './assets/images/projects/yean.png',
    ];
    let i = 0;
    const currentOptionText1 = document.getElementById('current-option-text1');
    const currentOptionText2 = document.getElementById('current-option-text2');
    const currentOptionImage = document.getElementById('image');
    const carousel = document.getElementById('carousel-wrapper');
    const mainMenu = document.getElementById('menu');
    const optionPrevious = document.getElementById('previous-option');
    const optionNext = document.getElementById('next-option');

    currentOptionText1.innerText = text1Options[i];
    currentOptionText2.innerText = text2Options[i];
    currentOptionImage.style.backgroundImage = `url(${imageOptions[i]})`;
    mainMenu.style.background = colorOptions[i];

    optionNext.onclick = () => {
      i += 1;
      i %= text1Options.length;
      currentOptionText1.dataset.nextText = text1Options[i];

      currentOptionText2.dataset.nextText = text2Options[i];

      mainMenu.style.background = colorOptions[i];
      carousel.classList.add('anim-next');

      setTimeout(() => {
        currentOptionImage.style.backgroundImage = `url(${imageOptions[i]})`;
      }, 455);

      setTimeout(() => {
        currentOptionText1.innerText = text1Options[i];
        currentOptionText2.innerText = text2Options[i];
        carousel.classList.remove('anim-next');
      }, 650);
    };

    optionPrevious.onclick = () => {
      if (i === 0) {
        i = text1Options.length;
      }
      i -= 1;
      currentOptionText1.dataset.previousText = text1Options[i];

      currentOptionText2.dataset.previousText = text2Options[i];

      mainMenu.style.background = colorOptions[i];
      carousel.classList.add('anim-previous');

      setTimeout(() => {
        currentOptionImage.style.backgroundImage = `url(${imageOptions[i]})`;
      }, 455);

      setTimeout(() => {
        currentOptionText1.innerText = text1Options[i];
        currentOptionText2.innerText = text2Options[i];
        carousel.classList.remove('anim-previous');
      }, 650);
    };
  }, []);
  return (
    <div className="flex flex-col overflow-x-hidden">
      <header className="bg-brand_bold text-white flex flex-col header">
        <TopNav />
        <GeneralHeader2 icon="work" title="/Works" description="Selected projects i’ve worked on!" />
      </header>
      <main className="flex flex-col gap-12 bg-brand_bold contact_main max-w-full">
        <div className="project-div overflow-y-auto bg-brand_color_light py-20 flex flex-col rounded-xl gap-7">
          <div className="my_work bg-white_blue_light flex gap-7 items-center items-stretch rounded-lg ">

            <div id="carousel-wrapper" className="carousel-wrapper relative w-80-vw">
              <div id="menu" className="menu px-20 relative ">
                <div id="current-option" className="current-option">
                  <span id="current-option-text1" className="current-option-text1" data-previous-text="" data-next-text="" />
                  <span
                    id="current-option-text2"
                    className="current-option-text2"
                    data-previous-text=""
                    data-next-text=""
                  />
                </div>
              </div>
              <div id="image" className="image_cl relative" />
              <div className="flex flex-col gap-5 mx-5 absolute right-3">
                <button type="button" id="previous-option" className="previous-option p-4 rounded-xl">{' '}</button>
                <button type="button" id="next-option" className="next-option p-4 rounded-xl">{' '}</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-brand_bold w-full bottom-0 fixed z-10 -md:flex justify-evenly py-4 px-5 md:hidden">
        <a className="appearance-none text-white-light" href="/">
          Skills
        </a>
        <a className="appearance-none text-white-light" href="/">
          Works
        </a>
        <a className="appearance-none text-white-light" href="/">
          Contact us
        </a>

      </div>
      <Footer />
    </div>
  );
}

export default MyWorks;
