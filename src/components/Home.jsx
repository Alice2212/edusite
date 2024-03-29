import React, { useState, useEffect } from "react";
import banner from "../assets/images/hero-banner.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  // Handling toggling to show more/less
  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    
      className="w-screen "
      id="home"
      style={{
        background: "var(--gradient)",
      }}
    >
      <div className="container mx-auto flex px-5 py-24 items-center justify-between flex-wrap lg:flex-nowrap overflow-x-hidden overflow-y-hidden">
        <div className="lg:order-2 order-1 lg:justify-self-end justify-self-center lg:ml-12 ml-0">
          <img
            className="lg:w-5/6 md:w-3/6 w-5/6 mb-10 object-cover object-center mx-auto"
            alt="A young lady sits, holding a pen and a notebook."
            src={banner}
          />
        </div>
        <div className="animated bounceInRight lg:w-5/12 w-full lg:order-1 order-2 text-center lg:text-left mx-auto">
          <h1 className="text-6xl font-bold leading-tight text-[#121217] overflow-hidden	">
            Start Your Future Education
          </h1>
          <p className="text-xl mt-12  mb-8 mx-auto text-[#6f6f76]">
            Credibly redefine distinctive total linkage vis-a-vis multifunction
            data. Phosphorescently impact goal-oriented strategic
          </p>
          {showMore && (
            <p className="text-xl mb-8 mx-auto text-[#6f6f76]">
              Providing quality education for all is fundamental to creating a
              peaceful and prosperous world. Education gives people the
              knowledge and skills.
            </p>
          )}
          <div className="flex  mx-auto justify-center lg:justify-start">
            <button onClick={toggleReadMore} className="btn btn-primary">
              {showMore ? "Show Less" : " Discover More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
