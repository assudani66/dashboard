import React from "react";
import { Icons } from "./icons";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-2">
      <section className="flex items-center">
        <div className="flex items-center">
          <Icons iconName="search" />
        </div>
        <input
          type="text"
          placeholder="Type to search"
          className="focus:outline-none"
        />
      </section>
      <section className="flex space-x-4 items-center">
        <Icons iconName="settings" />
        <Icons iconName="messages" />
        <Icons iconName="notification" />
        <div className="flex flex-col items-center">
          <p>Thomas Brown</p>
          <p>Developer</p>
        </div>
        <img
          className="w-16"
          alt="avatar"
          src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s176-c-k-c0x00ffffff-no-rj"
        />
      </section>
    </nav>
  );
};

export default Navbar;
