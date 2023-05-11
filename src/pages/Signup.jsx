import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

import { Button } from "../components";
import missionImg from "../assets/mission-img.jpg";

const Signup = () => {
  return (
    <main className="py-14 md:py-20">
      <div className="container">
        <section className="bg-white overflow-hidden w-full rounded-md border-b-8 border-b-primary mx-auto flex flex-wrap md:flex-nowrap shadow-[rgba(0,0,0,0.24)_0px_3px_8px] max-w-[940px]">
          <div
            className="w-full md:w-1/2 bg-cover bg-center bg-no-repeat min-h-[300px]"
            style={{ backgroundImage: `url('${missionImg}')` }}
          ></div>

          <div className="w-full px-6 py-12 text-center md:w-1/2 md:px-12 md:py-20">
            <h2 className="text-4xl font-bold text-secondary">ApexCare</h2>
            <p className="block mt-2 text-textPrimary text-13px md:text-15px">
              Welcome back! Please login to your account.
            </p>

            <form className="mt-12">
              <input
                type="text"
                placeholder="Email address"
                className="block w-full py-3 mb-4 border-b focus:outline-none text-13px md:text-15px"
              />
              <input
                type="text"
                placeholder="Password"
                className="block w-full py-3 mb-4 border-b focus:outline-none text-13px md:text-15px"
              />

              <Button icon={<FaChevronRight />} className="w-1/2 mt-10">
                Sign Up
              </Button>

              <p className="block text-13px md:text-15px mt-30px">
                Already have an account?{" "}
                <Link to="/login" className="text-primary">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Signup;
