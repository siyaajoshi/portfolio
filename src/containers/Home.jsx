import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Siya } from "../assets";
import { SiyaTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";
const Home = () => {
  return ( 
  <section
    id="home" 
    className="flex items-center justify-center flex-col gap-12 relative"
    >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      {/* Content Section */}
    <div className=" w-full h-full flex flex-col items-center lg:items-start justify-center gap-4"> 

      <h2 className="text-3xl lg:text-4xl text-texlight">
        Hello 👋🏼 , It's me 
        <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white"> 
          {" "}
          Siya Joshi
        </span>
      </h2>

      {/*typewritter */}
      <h2 className="text-2xl lg:text-4xl text-texlight mt-4"> 
        And I am {" "}
      <SiyaTypeWritter 
        speed={100}
        words={["A CS Student..", "A Technologist..", "A representative of Women in STEM.."]} 
        />
      </h2>
      <div className="text-base text-texlight mt-6 text-center lg:text-left"
        style={{ textAlign: 'center'}}>
        <p className="my-paragraph">Welcome to my Portfolio Website 👋🏼 </p>
        <p className="my-paragraph"> Here you'll learn things about myself🙋🏽‍♀️, my projects💻, my employment journey👩🏽‍💻 and more!</p>
        <p className="my-paragraph">You can find my resume by clicking the button below 📄.</p>
        <p className="my-paragraph">Enjoy🙂</p>
      </div>
  
    {/* social media links */}
    <div className="flex items-center justify-center gap-16 mt-16">
      <AnimatePresence> 
        {Socials && 
        Socials.map((item, index) => (
        <HomeSocialLinks key={index} data={item} index={index} />
      ))}
      </AnimatePresence>
    </div>

    {/* My Resume */}
    <a href="https://drive.google.com/uc?export=download&id=1WCs76LoNW7Csn6Kf-9r-sPb536-dgxAg"
       download="Siya_Joshi_Resume.pdf">
       style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3" }}
       className="mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary"
      <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">My Resume!
      </p>
    </a>
    </div>

    {/* Siya's image */}
    <div className="w-full h-full flex items-start justify-center lg:item-center">
        <motion.img 
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }} 
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          src={Siya} 
          className="w-auto h-auto object-contain"
        />
      </div>
    </div>
  </section>
 );
};

export default Home;
