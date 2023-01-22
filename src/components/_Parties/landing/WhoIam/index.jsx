import React from 'react';

function WhoIam() {
  return (
    <div
      id="desing_eng"
      className="desing_eng flex justify-evenly items-center px-20"
    >
      <div id="design_div" className="flex flex-col gap-4">
        <div id="design_head" className="flex items-center gap-4">
          <h3 className="text-third text-4xl">Design</h3>
          <img
            id="figma_icon"
            src="/assets/images/figma_vector.svg"
            alt=""
          />
        </div>
        <p className="text-black-light">
          I&lsquo;m probably not the typical designer positioned behind an
          Illustrator art-board adjusting pixels, but I design. Immersed in
          stylesheets tweaking font sizes and contemplating layouts is where
          you&lsquo;ll find me (~_^). I&lsquo;m committed to creating fluent
          user experiences while staying fashionable.
        </p>
      </div>
      <div id="eng_div" className="flex flex-col gap-6 justify-between">
        <h3 className="text-third text-4xl">Engineering</h3>
        <p className="text-black-light">
          In building JavaScript applications,
          I&lsquo;m equipped with just the
          right tools, and can absolutely function independently of them to
          deliver fast, resilient solutions optimized for scale —
          performance and scalability are priorities on my radar.
        </p>
      </div>
    </div>

  );
}

export default WhoIam;
