import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

import { Button } from "../components";
import missionImg from "../assets/mission-img.jpg";

const Login = () => {
  return (
    <main className="py-20">
      <div className="container">
        <section className="bg-white overflow-hidden w-full rounded-md border-b-8 border-b-primary mx-auto flex shadow-[rgba(0,0,0,0.24)_0px_3px_8px] max-w-[940px]">
          <div
            className="w-1/2"
            style={{ backgroundImage: `url('${missionImg}')` }}
          ></div>

          <div className="w-1/2 px-12 py-20 text-center">
            <h2 className="text-4xl font-bold text-secondary">ApexCare</h2>
            <p className="text-textPrimary text-13px md:text-15px block mt-2">
              Welcome back! Please login to your account.
            </p>

            <form className="mt-12">
              <input
                type="text"
                placeholder="Email address"
                className="block border-b w-full focus:outline-none text-13px md:text-15px py-3 mb-4"
              />
              <input
                type="text"
                placeholder="Password"
                className="block border-b w-full focus:outline-none text-13px md:text-15px py-3 mb-4"
              />

              <Button icon={<FaChevronRight />} className="mt-10 w-1/2">
                Sign In
              </Button>

              <p className="text-13px md:text-15px block mt-30px">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
