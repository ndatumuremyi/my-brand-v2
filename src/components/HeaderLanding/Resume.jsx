import React from 'react';
import resume from '../../asserts/NDATUMUREMYI_Paterne_cv.pdf';

function ResumeButton() {
  const download = () => {
    fetch(resume)
      .then((res) => res.blob())
      .then((buffer) => {
        const blob = new Blob([buffer]);
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          'NDATUMUREMYI_Paterne_resume.pdf',
        );

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      }).catch((error) => {
        console.log(`error occur${error}`);
      });
  };
  return (
    <button onClick={download} type="button" className="button_light">Resume</button>
  );
}

export default ResumeButton;
