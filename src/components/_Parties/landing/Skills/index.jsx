import React from 'react';
import Timeline from '../Timeline';

function Skills() {
  return (
    <>
      <div
        id="skills_div"
        className="skills_div flex flex-col text-black items-center gap-12 my-9"
      >
        <h2 className="text-third text-4xl">Skills</h2>
        <p className="text-black-light">
          I’m Paterne NDATUMUREMYI, i have been expanding my skills since:
        </p>
      </div>
      <Timeline />
    </>
  );
}

export default Skills;
