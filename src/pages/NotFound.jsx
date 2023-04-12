import { FaChevronRight } from "react-icons/fa";

import errorImg from "../assets/error.png";
import { Button } from "../components";

const NotFound = () => {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="container">
        <div className="text-center py-8">
          <img
            src={errorImg}
            alt="page not found"
            className="w-full max-w-[420px] mx-auto"
          />

          <h3 className="mt-10 mb-2.5 font-bold text-secondary text-[1.5625rem] md:mb-4 md:mt-12 md:text-[2.5rem]">
            Page Not Found
          </h3>

          <p className="block max-w-[520px] mx-auto mb-5 text-13px text-textPrimary md:text-15px">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>

          <Button icon={<FaChevronRight />} href="/">
            Go To Home
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
