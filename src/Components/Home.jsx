import React from "react";
import vg from "../Assets/2.jpg";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';



const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solutions to all problems</p>
        </main>
      </div>

      <div className="home2 "id="home">
        <img src={vg} alt="Graphics" />
        <div>
          <p>We are the one-stop solution to all technical problems.</p>
        </div>
      </div>

      <div className="home3" id="About">
        <h1>Who are We?</h1>
        <p>
          Hello there! I'm Kushagra, founder of TechyStar, where we specialize in providing innovative solutions to your technical challenges. 🚀

          With a deep-rooted passion for technology and problem-solving, I lead a dedicated team committed to delivering cutting-edge solutions tailored to your needs. At TechyStar, we believe in simplifying the complex, making technology accessible, and empowering businesses to thrive in a digital world.

          Beyond our commitment to excellence in service, we prioritize customer satisfaction and long-term partnerships. Our journey at TechyStar is not just about fixing technical issues but about transforming challenges into opportunities for growth and efficiency.

          Join us at TechyStar as we pave the way for a seamless technological experience. Let's collaborate and unlock the potential of your business together!
        </p>
      </div>

      <div className="home4" id="Brands">
        <h1>Brands</h1>
        <article>
          <div style={{ animationDelay: "0.3s" }}>
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>
          <div style={{ animationDelay: "0.5s" }}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>
          <div style={{ animationDelay: "0.7s" }}>
            <AiFillYoutube />
            <p>Youtube</p>
          </div>
          <div style={{ animationDelay: "0.9s" }}>
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Home;
