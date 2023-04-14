import { Link } from "react-router-dom";

const Banner = ({ bgImg, title, currentPage }) => {
  return (
    <section
      style={{ backgroundImage: `url('${bgImg}')` }}
      className="py-[4.375rem] bg-center bg-no-repeat bg-cover md:h-[18.75rem] flex items-center"
    >
      <div className="container">
        <div className="text-center">
          <h2 className="font-semibold text-secondary text-[1.75rem] md:text-[2.5rem] !leading-[1.3]">
            {title}
          </h2>

          <ul className="mt-1.5 md:mt-4">
            <li className="mx-3 text-sm md:text-base text-[#545A73] hover:text-primary transition-300 relative inline-block before:absolute before:content-['>'] before:text-[#545A73] before:-right-4 before:top-0">
              <Link to="/">Home</Link>
            </li>
            <li className="inline-block mx-3 text-sm md:text-base text-primary">
              {currentPage}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
