import React from 'react';
import skills from '../../../../system/data/skills';

function Timeline() {
  return (
    <div className="timeline">

      {
        skills.map((skill, index) => (
          <div key={skill.name} className="section">
            <div className="reveal">
              <div className={`container ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className={`content flex flex-col gap-4 ${index % 2 === 0 ? 'items-end' : 'items-start'}`}>
                  <h2>{skill.name}</h2>
                  <p className="text-black-light">{skill.school}</p>
                  <button type="button" className="text-white button_primary">{skill.time}</button>
                  <p className="text-black-light">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      }

    </div>

  );
}
export default Timeline;
