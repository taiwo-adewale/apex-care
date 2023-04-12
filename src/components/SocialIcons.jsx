import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialIcons = ({ center, dark, className }) => (
  <div
    className={`flex gap-2 mt-[1.125rem] ${className ? className : ""} ${
      center ? "justify-center" : "justify-start"
    }`}
  >
    <a
      href="https://facebook.com"
      target="_blank"
      className={`w-30px h-30px rounded-full hover:bg-primary transition-all duration-300 flex justify-center items-center text-sm hover:-translate-y-[2px] ${
        dark
          ? "bg-[#3a3c45] text-white"
          : "bg-[#def5ee] text-primary hover:text-white"
      }`}
    >
      <FaFacebookF />
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      className={`w-30px h-30px rounded-full hover:bg-primary transition-all duration-300 flex justify-center items-center text-sm hover:-translate-y-[2px] ${
        dark
          ? "bg-[#3a3c45] text-white"
          : "bg-[#def5ee] text-primary hover:text-white"
      }`}
    >
      <FaTwitter />
    </a>
    <a
      href="https://linkedin.com"
      target="_blank"
      className={`w-30px h-30px rounded-full hover:bg-primary transition-all duration-300 flex justify-center items-center text-sm hover:-translate-y-[2px] ${
        dark
          ? "bg-[#3a3c45] text-white"
          : "bg-[#def5ee] text-primary hover:text-white"
      }`}
    >
      <FaLinkedinIn />
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      className={`w-30px h-30px rounded-full hover:bg-primary transition-all duration-300 flex justify-center items-center text-sm hover:-translate-y-[2px] ${
        dark
          ? "bg-[#3a3c45] text-white"
          : "bg-[#def5ee] text-primary hover:text-white"
      }`}
    >
      <FaInstagram />
    </a>
  </div>
);

export default SocialIcons;
