const SectionTitle = ({ center, title, heading, desc, className }) => {
  return (
    <div
      className={`${
        center ? "text-center" : "text-left"
      } md:max-w-[700px] md:mx-auto ${className ? className : ""}`}
    >
      <span className="text-sm md:text-base lg:text-[1.0625rem] mb-1.5 block text-primary">
        {title}
      </span>
      <h2 className="text-[1.625rem] font-semibold md:text-[2.1875rem] lg:text-[2.5rem] text-secondary leading-[1.2]">
        {heading}
      </h2>
      {desc ? (
        <p className="block mt-2 text-[0.8125rem] md:max-w-[520px] md:mt-2.5 md:mx-auto lg:text-[0.9375rem]">
          {desc}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default SectionTitle;