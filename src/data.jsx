import {
  FaTrophy,
  FaAward,
  FaBriefcaseMedical,
  FaLightbulb,
} from "react-icons/fa";
import { GiLiver } from "react-icons/gi";

import service01 from "./assets/service-1.jpg";
import service02 from "./assets/service-2.jpg";
import service03 from "./assets/service-3.jpg";
import service04 from "./assets/service-4.jpg";
import service05 from "./assets/service-5.jpg";
import service06 from "./assets/service-6.jpg";

export const funFacts = [
  {
    title: "Expert Doctors",
    value: 540,
    icon: <FaBriefcaseMedical />,
    suffix: "+",
  },
  {
    title: "Problems Solved",
    value: 899,
    icon: <FaLightbulb />,
    suffix: "K",
  },
  {
    title: "Awards Won",
    value: 100,
    icon: <FaAward />,
    suffix: "+",
  },
  {
    title: "Experiences",
    value: 56,
    icon: <FaTrophy />,
    suffix: "K",
  },
];

export const services = [
  {
    name: "Cancer Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    url: "/",
    icon: <GiLiver />,
    bgImg: service01,
  },
  {
    name: "Liver Transplant",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    url: "/",
    icon: <GiLiver />,
    bgImg: service02,
  },
  {
    name: "Kidney Cancer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    url: "/",
    icon: <GiLiver />,
    bgImg: service03,
  },
  {
    name: "Cardiac Arrhythmia",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    url: "/",
    icon: <GiLiver />,
    bgImg: service04,
  },
  {
    name: "Dental Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    url: "/",
    icon: <GiLiver />,
    bgImg: service05,
  },
  {
    name: "Radiation Oncology",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    url: "/",
    icon: <GiLiver />,
    bgImg: service06,
  },
];
