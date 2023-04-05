import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaPaperPlane, FaSearch } from 'react-icons/fa'
import { BsStopwatch, BsFillTelephoneFill, BsCart2 } from 'react-icons/bs'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((prevVal) => !prevVal)
  }

  return (
    <header className="font-rubik">
      <div className="info-bar bg-header flex flex-col md:flex-row justify-between p-2">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="flex flex-row p-2">
            <span className="rounded-full bg-green-100 hover:bg-green-200 p-3 mx-1">
              <BsStopwatch color="#19ce67" />
            </span>
            <p className="">
              Mon-Fri 09:00-19:00
            </p>
          </div>

          <div className="flex flex-row p-2">
            <span className="rounded-full bg-green-100 hover:bg-green-200 p-3 mx-1">
              <BsFillTelephoneFill color="#19ce67" />
            </span>
            <p className="">
              Call Us: +07 554 332 322
            </p>
          </div>

          <div className="flex flex-row p-2">
            <span className="rounded-full bg-green-100 hover:bg-green-200 p-3 mx-1">
              <FaPaperPlane color="#19ce67" />
            </span>
            <p className="">
              youremail@example.com
            </p>
          </div>
        </div>

        <div className="social-icons-and-language flex flex-col md:flex-row">
          <div className="social-icons flex flex-row mx-auto">
            <button className="rounded-full bg-green-100 hover:bg-green-200 p-3 mx-1">
              <FaFacebookF color="#19ce67" />
            </button>

            <button className="rounded-full bg-green-100 hover:bg-green-200 p-3 mx-1">
              <FaTwitter color="#19ce67" />
            </button>

            <button className="rounded-full bg-green-100 hover:bg-green-200 p-3 mx-1">
              <FaLinkedin color="#19ce67" />
            </button>

            <button className="rounded-full bg-green-100 hover:bg-green-200 p-3 mx-1">
              <FaInstagram color="#19ce67" />
            </button>
          </div>

          <div className="mx-auto my-2">
            <select name="language" id="language" className="rounded-full p-2">
              <option value="english">Eng</option>
              <option value="spanish">Spa</option>
              <option value="arabic">Ara</option>
              <option value="french">Fre</option>
            </select>
          </div>
        </div>
      </div>

      <div className="navbar sticky top-0">
        <nav className="flex flex-row justify-between items-center shadow p-4">
          <div className="brand px-2">
            <strong className="font-inter text-2xl text-green-500">
              ApexCare
            </strong>
          </div>

          <div className="hidden justify-center px-2 md:flex">
            <a className="font-medium hover:text-green-500 px-4">Home</a>
            <a className="font-medium hover:text-green-500 px-4">Department</a>
            <a className="font-medium hover:text-green-500 px-4">Doctor</a>
            <a className="font-medium hover:text-green-500 px-4">Shop</a>
            <a className="font-medium hover:text-green-500 px-4">Blog</a>
            <a className="font-medium hover:text-green-500 px-4">Pages</a>
            <a className="font-medium hover:text-green-500 px-4">Contact</a>
          </div>

          <div className="nav-icons p-2">
            <button className="px-4">
              <BsCart2 />
            </button>
            <button className="px-4">
              <FaSearch />
            </button>
          </div>

          {
            navOpen ?
              (
                // CLOSE ICON
                <svg style={{ "color": "#ffffff" }} width="30" height="40"
                  viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleNav}
                  className="sm:hidden"
                >
                  <rect width="48" height="48" fill="white" fillOpacity="0.01"></rect>
                  <path d="M14 14L34 34" stroke="#19ce67" strokeWidth="5" strokeLinecap="round"
                    strokeLinejoin="round" fill="#19ce67"></path>
                  <path d="M14 34L34 14" stroke="#19ce67" strokeWidth="5" strokeLinecap="round"
                    strokeLinejoin="round" fill="#19ce67"></path>
                </svg>

              ) : (
                <svg viewBox="0 0 100 80" width="30" height="40"
                  onClick={toggleNav}
                  className="sm:hidden"
                >
                  <rect width="100" height="10" stroke='#19ce67' fill='#19ce67'></rect>
                  <rect y="30" width="100" height="10" stroke='#19ce67' fill='#19ce67'></rect>
                  <rect y="60" width="100" height="10" stroke='#19ce67' fill='#19ce67'></rect>
                </svg>
              )
          }
        </nav>

        {navOpen && (
          <div className="shadow-md justify-center px-2 flex-col">
            <div className="p-3">
              <a className="font-medium hover:text-green-500 ">Home</a>
            </div>
            <hr />

            <div className="p-3">
              <a className="font-medium hover:text-green-500 ">Department</a>
            </div>
            <hr />

            <div className="p-3">
              <a className="font-medium hover:text-green-500 ">Doctor</a>
            </div>
            <hr />

            <div className="p-3">
              <a className="font-medium hover:text-green-500 ">Shop</a>
            </div>
            <hr />

            <div className="p-3">
              <a className="font-medium hover:text-green-500 ">Blog</a>
            </div>
            <hr />

            <div className="p-3">
              <a className="font-medium hover:text-green-500 ">Pages</a>
            </div>
            <hr />

            <div className="p-3">
              <a className="font-medium hover:text-green-500 ">Contact</a>
            </div>
            <hr />
          </div>
        )}
      </div>

    </header>

  );
};

export default Header;