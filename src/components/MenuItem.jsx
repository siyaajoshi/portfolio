import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
/* two props to pass into menu component */
/*Helper.js file includes the tags to add to this code ex. uri, icon etc */

const MenuItem = ({ menu, index }) => {
  const [isHoverred, setIsHoverred] = useState(false);
  return ( 
    /*href set the bg color found in the tailwind.config.js of the menu tab*/
    <a 
    href={menu.uri} 
    className="w-12 h-12 rounded-full flex items-center 
    justify-center group cursor-pointer hover:bg-gradient-to-br 
    hover:from-primary hover:to-secondary relative"
    onMouseEnter={() => setIsHoverred(true)}
    onMouseLeave={() => setIsHoverred(false)}
    >
  
      <menu.Icon className={'text-texlight group-hover:text-bgPrimary text-xl'}/>
    
    {/* Tool tip */}
      <AnimatePresence>
        {isHoverred && (
          <motion.div
           initial={{opacity : 0, x: -25}}
           animate={{opacity : 1, x: 0}}
           exit={{opacity : 0, x: -25}}

            className=" hidden lg:block absolute bg-white rounded-md px-6 py-2 -left-[190px] after:absolute after:-right-1 after:top-3 after:w-3 after:h-3 after:bg-white after:rotate-45"
          style={{
            boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.4)"}}
        >
          <p className="text-bgPrimary">{menu?.name}</p>
        </motion.div>
      )}
      </AnimatePresence>
    </a>
  );
};

export default MenuItem;
