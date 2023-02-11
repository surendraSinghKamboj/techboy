import React from "react";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillGoogleCircle,
  AiFillGithub,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Techboy..</h1>
        <p>@all rights reserved</p>
      </div>

      <div>
        <h5>Follow us</h5>
        <div>
          <a href="https://facebook.com">
            <AiFillFacebook />
          </a>
          <a href="https://youtube.com">
            <AiFillYoutube />
          </a>
          <a href="https://google.com">
            <AiFillGoogleCircle />
          </a>
          <a href="https://github.com">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
