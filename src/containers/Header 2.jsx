import React from "react";
import { Menus } from "../utils/helper";
import { MenuItem } from "../components";
const Header = () => {
  return( 
    /* The first div will be the menu bar that sizes according to the screen area.  */
  <div className="fixed bottom-0 right-0 lg: top-0 w-full h-auto lg:h-screen lg:w-32 flex justify-center items-end lg:items-center pb-8 lg:pb-0 z-50">
      <div className= " px-4 py-3 lg:py-12 rounded-full border border-[rgba(255,255,255,0.3)] flex flex-roq lg:flex-col items-center justify-center gap-12 duration-200 backdrop-blur-med">
        {Menus && 
          Menus.map((item, index) => ( 
          /*The menu item below has the key of what to show on the navigation bar*/ 
          <MenuItem key ={index} menu={item} index={index} />
        ))}
      </div>
    </div>
  ); 
};

export default Header;
