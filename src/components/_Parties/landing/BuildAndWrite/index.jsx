import React from 'react';

function BuildAndWrite() {
  return (

    <div
      id="build_and_write_dev"
      className="flex build_and_write_dev justify-evenly gap-2 mx-5"
    >
      <div id="build_div" className="flex flex-col gap-6">
        <h3 className="text-third text-3xl">
          I build&
          <br />
          design stuff
        </h3>
        <p className="">
          Open sourceprojects,
          <br />
          web appsand experimentals.
        </p>
        <a
          href="/my-works"
          className="no-underline text-center px-5 py-5 text-white rounded-xl bg-brand_color"
        >
          See my work
        </a>
      </div>
      <div id="write_some_div" className="flex flex-col gap-6 justify-between">
        <h3 className="text-third text-3xl">I do blog</h3>
        <p>
          Open sourceprojects,
          <br />
          web appsand experimentals.
        </p>
        <a
          href="/blogs"
          className="no-underline text-center px-5 py-5 text-white rounded-xl bg-brand_color"
        >
          See my articles
        </a>
      </div>
    </div>
  );
}
export default BuildAndWrite;
