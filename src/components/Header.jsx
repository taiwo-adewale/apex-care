import { Link } from "react-router-dom";

import TopBar from "./TopBar";
import Button from "./Button";

const Header = () => {
  return (
    <header className="relative z-20">
      <TopBar />

      <div className="bg-white shadow-nav py-5">
        <div className="container flex justify-between items-center">
          <Link to="/" className="text-secondary font-bold text-3xl">
            ApexCare
          </Link>

          <nav>
            <ul className="flex gap-x-30px">
              <li>
                <Link
                  to="/"
                  className="px-1.5 py-1 hover:text-primary text-secondary text-base font-medium transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="px-1.5 py-1 hover:text-primary text-secondary text-base font-medium transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="px-1.5 py-1 hover:text-primary text-secondary text-base font-medium transition-all duration-300"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="px-1.5 py-1 hover:text-primary text-secondary text-base font-medium transition-all duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="px-1.5 py-1 hover:text-primary text-secondary text-base font-medium transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <Button href="/login" className="!py-3">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
