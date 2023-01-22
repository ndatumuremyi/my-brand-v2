import React from 'react';

function SomeBackground() {
  return (
    <div
      id="over_the_past_div"
      className="flex flex-col text-white bg-brand_bold items-center justify-between gap-12 py-9 my-9"
    >

      <h3 className="text-6xl text-second text-center">
        Over the past 02
        <br />
        years,
      </h3>
      <p className="">(~_^)</p>
      <p className="text-center mt-9 text-white-light mx-5 leading-8">
        I&lsquo;ve built products for companies and individuals around africa
        ranging from marketing
        {' '}
        <br />
        websites to complex solutions and enterprise apps with focus on
        fast, elegant and accessible user experiences.
        <br />
        Currently, I work at Diool as a frontend engineer in the growth
        team. Before now,
        <br />
        I worked as a Lead Frontend Engineer at
        Klas, crafting thoughtful and inclusive experiences that adhere to
        web standards. Prior to Klas,
        <br />
        I was a front engineer
        contractor with Regnify, building cool products that users love
      </p>
    </div>
  );
}

export default SomeBackground;
