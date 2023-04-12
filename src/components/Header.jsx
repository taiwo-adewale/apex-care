import { useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import TopBar from "./TopBar";
import Button from "./Button";

import { navLinks } from "../data";

const Header = () => {
  const navRef = useRef();

  useEffect(() => {
    document.addEventListener("scroll", function () {
      if (document.documentElement.scrollTop > 120) {
        navRef.current.classList.add("fixed", "animate-nav-drop");
      } else {
        navRef.current.classList.remove("fixed", "animate-nav-drop");
      }
    });
  }, []);

  return (
    <header className="relative z-20">
      <TopBar />

      <div ref={navRef} className="bg-white shadow-nav py-5 w-full">
        <div className="container flex justify-between items-center">
          <Link to="/" className="text-secondary font-bold text-3xl">
            ApexCare
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-x-30px">
              {navLinks.map((link, index) => (
                <li key={`nav-link-${index}`}>
                  <NavLink
                    to={link.url}
                    className="px-1.5 py-1 hover:text-primary text-secondary text-base font-medium transition-all duration-300"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
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
