import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { about } from "../assets";
import { SkillCard } from "../components";

const Skills = () => {
  return ( <section
    id="skills" 
    className="flex items-center justify-center flex-col gap-12 my-12"
    >
      
      {/* Title */}
    <div className="w-full flex items-center justify-center py-24">
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: '100%' }}  // Adjusted to fill the container width
        exit={{ opacity: 0, width: 0 }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-center w-full"> {/* Corrected className here */}

        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl whitespace-nowrap">
          --- Qualifications ---
        </p>
      </motion.div>
     </div>
  
      {/*/main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      
      {/* content section */}   
      <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
      <p className="text-transparent bg-clip-text bg-gradient-to-r text-white">
        🖥️ Skills </p>
        <p className="text-texlight text-base tracking-wide text-justify">
        <span className="text-white">Programming Languages:</span> Python, Java, HTML, C, SQL, React, Tailwind</p>
          <p className="text-texlight text-base tracking-wide text-justify">
          <span className="text-white"> Certifications: </span> MS AZ-900, MS SC-900, MS AI-900</p>
          <p className="text-texlight text-base tracking-wide text-justify">
          <span className="text-white">Operating Systems & Others: </span> Windows, Mac, JIRA, Linux, Eclipse, Pycharm, Azure, MS Suite, GitHub, Tableau</p>

      <p className="text-transparent bg-clip-text bg-gradient-to-r text-white">
         💼 Work Experience </p>
        <p className="text-texlight text-base tracking-wide text-justify">
        <p><span className="text-white"> Cybersecurity Analyst - IAM Strategy </span> | RBC</p>
        <p><span className="text-white"> Jr. Systems Consultant  </span> | Longview Systems </p> 
        <p><span className="text-white"> Technical Systems Analyst  </span> | RBC</p> 
        </p>
      
        <p className="text-transparent bg-clip-text bg-gradient-to-r text-white">
         📍 Extracurricular </p>
        <p className="text-texlight text-base tracking-wide text-justify">
        <p><span className="text-white"> Computer Science Director </span> | Toronto Metropolitan University</p>
        <p><span className="text-white"> Networking - Women of Color Club </span> | Personal Project </p> 
        <p><span className="text-white"> Student Tech Lab Mentor  </span> | RBC</p> 
        <p><span className="text-white"> Code Camp Facilitor  </span> | RBC</p> 
        </p>

      <p className="text-transparent bg-clip-text bg-gradient-to-r text-white"
          >🏅 Certifications </p>
        <p className="text-texlight text-base tracking-wide text-justify">
        <p><span className="text-white"> AZ-900</span> (Azure Fundamentals)</p>
        <p><span className="text-white"> SC-900</span> (Security, Compliance, and Identity Fundamentals)</p>
        </p>
        </div> 

        {/* image section */}
      <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
        <SkillCard 
        skill={"SQL"} 
        percentage={"85%"} 
        color={"#008FFF"} 
        move={true} />
        
        <SkillCard 
        skill={"PYTHON"} 
        percentage={"80%"} 
        color={"#FF3F3F"} />
        
        <SkillCard 
        skill={"CSS"} 
        percentage={"80%"} 
        color={"#FFFF00"}
        move={true} />

        <SkillCard 
        skill={"JAVA"} 
        percentage={"75%"} 
        color={"#00FFF3"} />

      </div>
      </div>
    </section>
    );
};

export default Skills;
