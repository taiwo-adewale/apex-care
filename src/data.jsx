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

import doctor01 from "./assets/doctor-1.jpg";
import doctor02 from "./assets/doctor-2.jpg";
import doctor03 from "./assets/doctor-3.jpg";
import doctor04 from "./assets/doctor-4.jpg";
import doctor05 from "./assets/doctor-5.jpg";

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

export const doctors = [
  {
    name: "Dr. Addison Smith",
    role: "Cardiologist",
    image: doctor01,
  },
  {
    name: "Dr. Aiken Ward",
    role: "Dermatologist",
    image: doctor02,
  },
  {
    name: "Dr. Babatunde Jon",
    role: "Endocrinologist",
    image: doctor03,
  },
  {
    name: "Dr. Eachann John",
    role: "Gastroenterologist",
    image: doctor04,
  },
  {
    name: "Dr. Sarah Taylor",
    role: "Nephrologist",
    image: doctor05,
  },
];

export const servicesList = [
  "cardiology",
  "urologic oncology",
  "neurology",
  "medicine",
  "surgery",
  "urology",
  "radiology",
  "neurosurgery",
  "bariatric surgery",
];

export const departments = [
  "Surgery and Radiology",
  "Departments",
  "Family",
  "Our Doctors",
  "Woman's Health",
  "Blog",
];

export const links = [
  "Optician",
  "Shop",
  "Pediatrics",
  "Contact Us",
  "Dermatology",
  "Doctors",
];

export const faqs = [
  {
    title: "My physician is a faculty member—what does that mean?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
  },
  {
    title: "What is an academic medical center?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
  },
  {
    title: "What doctor will I see?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
  },
  {
    title: "What is a medical student?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
  },
  {
    title: "How are residents supervised?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
  },
];
