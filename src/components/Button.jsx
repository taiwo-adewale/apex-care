import { Link } from "react-router-dom";

const Button = ({ children, href, icon, onClick, className, alt }) => {
  if (href) {
    return (
      <Link
        to={href}
        className={`hover:bg-secondary rounded-full transition-500 text-13px md:text-sm uppercase cursor-pointer font-medium relative inline-block group ${
          icon ? "pl-6 pr-[3.125rem] py-3.5 md:py-4" : "px-6 py-3.5"
        } ${className ? className : ""} ${
          alt
            ? "bg-white text-secondary hover:text-white"
            : "bg-primary text-white"
        }`}
      >
        {children}

        {icon ? (
          <div
            className={`absolute w-[2.0625rem] h-[2.0625rem] rounded-full top-1/2 -translate-y-1/2 right-[0.5rem] flex justify-center items-center group-hover:text-secondary group-hover:bg-white transition-500 ${
              alt ? "text-secondary bg-[#f0f0f0]" : "text-white bg-[#8ee9b2]"
            }`}
          >
            {icon}
          </div>
        ) : (
          ""
        )}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`hover:bg-secondary rounded-full transition-500 text-13px md:text-sm uppercase cursor-pointer font-medium relative inline-block group ${
        icon ? "pl-6 pr-[3.125rem] py-3.5 md:py-4" : "px-6 py-3.5"
      } ${className ? className : ""}  ${
        alt
          ? "bg-white text-secondary hover:text-white"
          : "bg-primary text-white"
      }`}
    >
      {children}

      {icon ? (
        <div
          className={`absolute w-[2.0625rem] h-[2.0625rem] rounded-full top-1/2 -translate-y-1/2 right-[0.5rem] flex justify-center items-center group-hover:text-secondary bg-[#8ee9b2] group-hover:bg-white transition-500 ${
            alt ? "text-secondary bg-[#f0f0f0]" : "text-white bg-[#8ee9b2]"
          }`}
        >
          {icon}
        </div>
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
