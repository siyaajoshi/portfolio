import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { about } from "../assets";
const About = () => {
  return (
  <section
  id="about" 
  className="flex items-center justify-center flex-col gap-12 my-12"
  >
    {/*Title */}
    <div className="w-full flex items-center justify-center py-24">
      <motion.div 
        initial={{opacity: 0, width: 0}}
        animate={{opacity: 1, width: 200}}
        exit={{opacity: 0, width: 0}}
        transition={{delay: 0.4 }}
        className=""flex items-center justify-around w-52> 
        <p className="text-transparent bg-clip-text bg-gradient-to-r text-white text-2xl"
        >--- About Me ---</p>
      </motion.div>
    </div>

    {/*/main content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
    {/* image section */}
    <div className="w-full flex items-center justify-center px-8">
      <div className="w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from bg-primary to-secondary relative">
        <img 
          src={about} 
          className="w-full rounded-md h-auto object-contain" alt="" 
      
      />
      <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from bg-primary to-secondary rounded-md blur [5px] -z-10"></div>
       </div>
    </div>

    {/* content section */}   
  <div className="w-full px-8 flex flex-col gap-4 items-start justify-start text-center"         
  style={{ textAlign: 'center'}}>

  <p className="text-texlight text-base tracking-wide text-justify">
  👋🏼 <span className="text-white">Hello and welcome to my page!</span> </p>

  <p className="text-texlight text-base tracking-wide text-justify">
  📚 I am a <span className="text-white">fourth-year Computer Science student</span> at Toronto Metropolitan University (TMU), where I combine my <span className="text-white">passion</span> for <span className="text-white">technology</span> and <span className="text-white">business.</span> I thrive in collaborative environments, working alongside fellow science students and facilitating hackathons that drive <span className="text-white">innovation</span> and <span className="text-white">creative problem-solving.</span> </p>

  <p className="text-texlight text-base tracking-wide text-justify">
  👩🏽‍💻 In my professional journey, I am proud to serve as a <span className="text-white">Senior Cybersecurity Analyst</span> on the <span className="text-white">IAM (Identity and Access Management) Onboarding Team,</span> specializing in <span className="text-white">Entra ID authentication</span> and <span className="text-white">authorization.</span> My work involves designing <span className="text-white">secure systems,</span> safeguarding <span className="text-white">digital identities,</span> and enabling seamless access across <span className="text-white">digital platforms.</span> </p>

  <p className="text-texlight text-base tracking-wide text-justify">
  🎓 Beyond my technical pursuits, I am a <span className="text-white">fervent advocate</span> for <span className="text-white">Women in STEM,</span> dedicated to <span className="text-white">empowering</span> and <span className="text-white">inspiring</span> underrepresented groups in the tech industry. Representation matters, and I aim to contribute to a more <span className="text-white">inclusive</span> and <span className="text-white">diverse tech community.</span> </p>

  <p className="text-texlight text-base tracking-wide text-justify">
  📈 My commitment to <span className="text-white">personal</span> and <span className="text-white">professional growth</span> fuels my curiosity for acquiring <span className="text-white">new skills</span> and staying on the cutting edge of <span className="text-white">AI</span> and <span className="text-white">cybersecurity advancements.</span> </p>

  <p className="text-texlight text-base tracking-wide text-justify">
  🏋🏽‍♀️ <span className="text-white">Fun Facts About Me:</span> </p>

  <p className="text-texlight text-base tracking-wide text-justify">
  - I’m <span className="text-white">passionate about physical fitness</span> and believe in balancing mental and physical well-being. </p>

  <p className="text-texlight text-base tracking-wide text-justify">
  - I’m a <span className="text-white">proud dog mom</span> to a 9-year-old furbaby who brightens my every day. </p>

  <p className="text-texlight text-base tracking-wide text-justify">
  - I’m a dedicated <span className="text-white">Formula 1 enthusiast,</span> dreaming of the day I can experience the thrill of driving on the <span className="text-white">autobahn</span> in Germany 🇩🇪. </p>

  <p className="text-texlight text-base tracking-wide text-justify">
  🐾 Whether it’s <span className="text-white">discussing cybersecurity, Formula 1,</span> or sharing tips on the best <span className="text-white">dog-friendly spots,</span> feel free to connect—I’d love to hear from you! </p>
  </div>
    </div>
  </section>
  );
};

export default About;
