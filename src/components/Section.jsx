import React from "react";

const Section = ({ padding, bgImg, className, children }) => {
  return (
    <section
      className={`${
        padding ? "py-[3.75rem] md:py-[4.375rem] lg:py-[6.25rem]" : ""
      } ${className ? className : ""} ${
        bgImg ? "bg-cover bg-no-repeat bg-center" : ""
      }`}
      style={{ backgroundImage: bgImg ? `url('${bgImg}')` : "none" }}
    >
      {children}
    </section>
  );
};

export default Section;
