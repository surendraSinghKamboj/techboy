import React from "react";
import vg from "../assets/web.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Techboy..</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to problem
            solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            iusto ipsum, maxime esse, dolor blanditiis accusantium minima harum,
            quo aut quis nulla et unde quam a? Necessitatibus vitae officia
            corporis earum explicabo nemo aperiam. Quam quidem mollitia dolore
            voluptas soluta perferendis nihil odit, eum unde ad, fugiat iste!
            Numquam maxime nam sit, minima alias obcaecati vel exercitationem,
            nihil quod totam quasi iusto, quos quas.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
