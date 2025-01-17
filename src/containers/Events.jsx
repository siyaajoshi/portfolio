import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EventsData } from "../utils/helper";
import { useState } from "react";
const Events = () => {
  return ( 
  <section
  id="Events" 
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
        >--- Events ---</p>
      </motion.div>
    </div>

    {/*/main content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      <AnimatePresence>
        {EventsData && EventsData.map((Events,index) => (
          <EventsCard key= {Events.id} Events={Events} />
        ))}
      </AnimatePresence>
    </div>
  </section>
  );
};

const EventsCard = ({Events}) => {
  const [isHoverred, setIsHoverred] = useState(false);
  return (
    <motion.div 
    key = {Events.id} 
    className="overflow-hidden cursor-pointer relative rounded-md" 
    onMouseEnter={() => setIsHoverred(true)}
    onMouseLeave={() => setIsHoverred(false)}
    >
     <motion.img 
      whileHover={{ scale: 1.1}}
      className="w-full h-full object-contain rounded-lg" 
      src={Events.imgSrc} />

      {isHoverred && (
      <motion.div className="absolute inset-0 backdrop-blur-md bg[rgba(0,0,0,0.6)] flex items-center justify-center flex-col gap-2 ">
        <p className="text-xl text-white">{Events?.name}</p>
      </motion.div>
      )}
     </motion.div>
  );
};

export default Events;
