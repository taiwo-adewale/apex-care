import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { motion } from "framer-motion";

const SocialIcons = () => (
  <div className="flex justify-center gap-2 mt-[1.125rem]">
    <motion.a
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3, ease: "linear" }}
      href="https://facebook.com"
      target="_blank"
      className="w-[1.875rem] h-[1.875rem] rounded-full text-primary bg-[#def5ee] hover:bg-primary hover:text-white transition-all duration-500 flex justify-center items-center text-sm"
    >
      <FaFacebookF />
    </motion.a>
    <motion.a
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3, ease: "linear" }}
      href="https://twitter.com"
      target="_blank"
      className="w-[1.875rem] h-[1.875rem] rounded-full text-primary bg-[#def5ee] hover:bg-primary hover:text-white transition-all duration-500 flex justify-center items-center text-sm"
    >
      <FaTwitter />
    </motion.a>
    <motion.a
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3, ease: "linear" }}
      href="https://linkedin.com"
      target="_blank"
      className="w-[1.875rem] h-[1.875rem] rounded-full text-primary bg-[#def5ee] hover:bg-primary hover:text-white transition-all duration-500 flex justify-center items-center text-sm"
    >
      <FaLinkedinIn />
    </motion.a>
    <motion.a
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3, ease: "linear" }}
      href="https://instagram.com"
      target="_blank"
      className="w-[1.875rem] h-[1.875rem] rounded-full text-primary bg-[#def5ee] hover:bg-primary hover:text-white transition-all duration-500 flex justify-center items-center text-sm"
    >
      <FaInstagram />
    </motion.a>
  </div>
);

export default SocialIcons;
