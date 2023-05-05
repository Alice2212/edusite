import React, { useState } from "react";
import banner from "../assets/images/hero-banner.png";

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  // Handling toggling to show more/less 
  const toggleReadMore = () => {
    setShowMore(!showMore);
  }

   return (
     <div
       className="w-screen "
       style={{
         background: "var(--gradient)",
       }}
     >
       <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
         <img
           className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center"
           alt="A young lady sits, holding a pen and a notebook."
           src={banner}
         />
         <div className="text-center lg:w-10/12 w-full text-black">
           <h1 className="my-4 text-5xl font-bold leading-tight">
             Start Your Future Education
           </h1>
           <p className="text-2xl mb-8">
             Credibly redefine distinctive total linkage vis-a-vis multifunction
             data. Phosphorescently impact goal-oriented strategic
           </p>
           {showMore && (
             <p className="text-2xl mb-8">
               Providing quality education for all is fundamental to creating a
               peaceful and prosperous world. Education gives people the
               knowledge and skills.
             </p>
           )}
           <div className="flex justify-center mx-auto">
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
