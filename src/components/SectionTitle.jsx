const SectionTitle = ({ center, title, heading, desc, className }) => {
  return (
    <div
      className={`${center ? "text-center md:max-w-[700px] md:mx-auto" : ""}  ${
        className ? className : ""
      }`}
    >
      {title && (
        <span className="text-sm md:text-base lg:text-[1.0625rem] mb-1.5 block text-primary">
          {title}
        </span>
      )}

      {heading && (
        <h2 className="text-[1.625rem] font-semibold md:text-[2.1875rem] lg:text-[2.5rem] text-secondary leading-[1.2]">
          {heading}
        </h2>
      )}

      {desc && (
        <p
          className={`block mt-2 text-[0.8125rem] md:mt-2.5 md:text-[0.9375rem] ${
            center ? "md:max-w-[520px] md:mx-auto" : ""
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
