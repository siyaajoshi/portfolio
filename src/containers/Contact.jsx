import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Dynamically load the LinkedIn badge script
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    // Cleanup script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="contacts"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      {/* Title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-2xl">
            --- Contact Me ---
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <AnimatePresence>
          <ContactCard
            title="Email Me"
            description="Reach out to me directly through email."
            icon={<FaEnvelope className="text-3xl text-white hover:text-primary" />}
            href="mailto:siyaj52@gmail.com"
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <ContactCard
            title="LinkedIn Profile"
            description="Connect with me on LinkedIn."
            href="https://ca.linkedin.com/in/siyajoshi?trk=profile-badge"
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

const ContactCard = ({ title, description, icon, href, isHovered, setIsHovered }) => {
  return (
    <motion.div
      className="overflow-hidden cursor-pointer relative rounded-md bg-gradient-to-r from-primary to-secondary p-4 shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4">
        <div>{icon}</div>
        <div>
          <h3 className="text-xl text-white">{title}</h3>
          <p className="text-sm text-texlight">{description}</p>
        </div>
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-col gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <a href={href} className="text-lg text-white hover:underline">
              Click Here
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;