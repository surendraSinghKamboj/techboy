import React from "react";
import vg from "../assets/web.png";
import {
  AiFillGoogleCircle,
  AiFillBehanceCircle,
  AiFillAmazonCircle,
  AiFillInfoCircle,
  AiFillCheckCircle,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Techboy..</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="" />
        <div>
          <p>
            As a premier technology company, our mission is to enhance
            problem-solving skills in children and provide a one-stop solution
            for all of the daily technical challenges you encounter.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
            At our company, we are a team of tech experts who are dedicated to
            delivering innovative and effective solutions. With a focus on the
            latest trends in technology, we specialize in three main areas:
            cyber security, web development, and artificial intelligence. Our
            goal is to provide the highest quality services to meet the needs of
            our clients, and help them stay ahead in today's rapidly evolving
            technological landscape. Whether you're looking for enhanced
            protection against cyber threats, need a new website, or want to
            incorporate AI into your business processes, we are here to help you
            every step of the way.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.2s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.4s",
              }}
            >
              <AiFillBehanceCircle />
              <p>Behance</p>
            </div>
            <div
              style={{
                animationDelay: "0.6s",
              }}
            >
              <AiFillInfoCircle />
              <p>Info</p>
            </div>
            <div
              style={{
                animationDelay: "0.8s",
              }}
            >
              <AiFillCheckCircle />
              <p>Check</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
