import {
  FaTrophy,
  FaAward,
  FaBriefcaseMedical,
  FaLightbulb,
} from "react-icons/fa";
import { GiLiver } from "react-icons/gi";

import heroBg1 from "./assets/hero-bg-1.jpg";
import heroBg2 from "./assets/hero-bg-2.jpg";
import heroBg3 from "./assets/hero-bg-3.jpg";

import service01 from "./assets/service-1.jpg";
import service02 from "./assets/service-2.jpg";
import service03 from "./assets/service-3.jpg";
import service04 from "./assets/service-4.jpg";
import service05 from "./assets/service-5.jpg";
import service06 from "./assets/service-6.jpg";
import service07 from "./assets/service-7.jpg";
import service08 from "./assets/service-8.jpg";
import service09 from "./assets/service-9.jpg";

import doctor01 from "./assets/doctor-1.jpg";
import doctor02 from "./assets/doctor-2.jpg";
import doctor03 from "./assets/doctor-3.jpg";
import doctor04 from "./assets/doctor-4.jpg";
import doctor05 from "./assets/doctor-5.jpg";

import customer1 from "./assets/customer-1.png";
import customer2 from "./assets/customer-2.png";
import customer3 from "./assets/customer-3.png";
import customer4 from "./assets/customer-4.png";
import customer5 from "./assets/customer-5.png";
import customer6 from "./assets/customer-6.png";
import customer7 from "./assets/customer-7.png";
import customer8 from "./assets/customer-8.png";
import customer9 from "./assets/customer-9.png";

import feedback1 from "./assets/feedback-1.jpg";
import feedback2 from "./assets/feedback-2.jpg";
import feedback3 from "./assets/feedback-3.jpg";
import feedback4 from "./assets/feedback-4.jpg";
import feedback5 from "./assets/feedback-5.jpg";

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
  {
    name: "Ophthalmology",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    url: "/",
    icon: <GiLiver />,
    bgImg: service07,
  },
  {
    name: "Otolaryngology",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    url: "/",
    icon: <GiLiver />,
    bgImg: service08,
  },
  {
    name: "Internal Medicine",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    url: "/",
    icon: <GiLiver />,
    bgImg: service09,
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
    title: "How often should I get a physical exam?",
    content:
      "It's recommended that adults get a physical exam at least once a year. However, the frequency may vary depending on your age, health status, and family history. It's best to discuss with your healthcare provider to determine how often you should get a physical exam.",
  },
  {
    title: "What is the best way to treat a migraine?",
    content:
      "Treatment for migraines may include medication, lifestyle changes, and alternative therapies. Some common medications used to treat migraines include triptans, ergotamines, and pain relievers.",
  },
  {
    title: "What is the recommended daily amount of exercise?",
    content:
      "The recommended amount of exercise for adults is at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week, in addition to muscle-strengthening activities at least two days per week.",
  },
  {
    title: "What should I do if I think I have a concussion?",
    content:
      " If you think you have a concussion, it's important to seek medical attention right away. Rest is also crucial for recovery, so avoid activities that could make your symptoms worse.",
  },
  {
    title: "How can I prevent the spread of the flu?",
    content:
      "You can prevent the spread of the flu by getting vaccinated every year, washing your hands frequently, covering your mouth and nose when coughing or sneezing, and avoiding close contact with sick people.",
  },
];

export const featuredCustomers = [
  {
    url: "https://medplusnig.com/",
    image: customer1,
  },
  {
    url: "https://healthplusnigeria.com/",
    image: customer2,
  },
  {
    url: "https://medplusnig.com/",
    image: customer3,
  },
  {
    url: "https://healthplusnigeria.com/",
    image: customer4,
  },
  {
    url: "https://medplusnig.com/",
    image: customer5,
  },
  {
    url: "https://healthplusnigeria.com/",
    image: customer6,
  },
  {
    url: "https://medplusnig.com/",
    image: customer7,
  },
  {
    url: "https://healthplusnigeria.com/",
    image: customer8,
  },
  {
    url: "https://medplusnig.com/",
    image: customer9,
  },
];

export const heroItems = [
  {
    title: "Best Healing Service",
    heading: "ApexCare is the No. 1 Hospital",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Quis ipsumpsum dolor sit amet consectetur.",
    bgImage: heroBg1,
  },
  {
    title: "Women Care",
    heading: "Exceptional Care for Women",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Quis ipsumpsum dolor sit amet consectetur.",
    bgImage: heroBg2,
  },
  {
    title: "Health Service",
    heading: "Your Health is Our Top Priority",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Quis ipsumpsum dolor sit amet consectetur.",
    bgImage: heroBg3,
  },
];

export const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Profile",
    url: "/profile",
  },
  {
    name: "Appointments",
    url: "/appointments",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export const feedbacks = [
  {
    name: "John Lucy",
    role: "Founding Partner",
    message:
      "I've been struggling with chronic pain for years and had almost given up hope. But thanks to the team at Apex Care, I finally found a treatment that works for me. I'm now able to live my life to the fullest, pain-free!",
    img: feedback2,
  },
  {
    name: "John Smith",
    role: "Web Developer",
    message:
      "I can't thank Apex Care enough for their exceptional customer service. The team went above and beyond to ensure that I received the care and support I needed throughout my entire treatment process.",
    img: feedback4,
  },
  {
    name: "Maxwell Warner",
    role: "Web Designer",
    message:
      "I've tried so many different products and services to improve my health, but nothing seemed to work. That is, until I discovered Apex Care. The personalized approach and expertise of their team have helped me achieve my wellness goals like never before.",
    img: feedback1,
  },
  {
    name: "Ross Taylor",
    role: "Patient",
    message:
      "The quality of the products and services at Apex Care is unmatched. I always feel confident that I'm receiving the best care possible when I visit their facility. I highly recommend them to anyone looking for top-notch healthcare solutions.",
    img: feedback5,
  },
  {
    name: "James Anderson",
    role: "CEO",
    message:
      "I've been struggling with chronic pain for years and had almost given up hope. But thanks to the team at Apex Care, I finally found a treatment that works for me. I'm now able to live my life to the fullest, pain-free!",
    img: feedback1,
  },
  {
    name: "Steven Smith",
    role: "Manager",
    message:
      "I can't thank Apex Care enough for their exceptional customer service. The team went above and beyond to ensure that I received the care and support I needed throughout my entire treatment process.",
    img: feedback3,
  },
  {
    name: "Steven Lucy",
    role: "Patient",
    message:
      "I've tried so many different products and services to improve my health, but nothing seemed to work. That is, until I discovered Apex Care. The personalized approach and expertise of their team have helped me achieve my wellness goals like never before.",
    img: feedback5,
  },
  {
    name: "John Terry",
    role: "Patient",
    message:
      "The quality of the products and services at Apex Care is unmatched. I always feel confident that I'm receiving the best care possible when I visit their facility. I highly recommend them to anyone looking for top-notch healthcare solutions.",
    img: feedback3,
  },
  {
    name: "Jake Brown",
    role: "Graphic Designer",
    message:
      "I've been struggling with chronic pain for years and had almost given up hope. But thanks to the team at Apex Care, I finally found a treatment that works for me. I'm now able to live my life to the fullest, pain-free!",
    img: feedback2,
  },
  {
    name: "Monkey D Luffy",
    role: "Patient",
    message:
      "I can't thank Apex Care enough for their exceptional customer service. The team went above and beyond to ensure that I received the care and support I needed throughout my entire treatment process.",
    img: feedback4,
  },
  {
    name: "Westlife",
    role: "HR",
    message:
      "I've tried so many different products and services to improve my health, but nothing seemed to work. That is, until I discovered Apex Care. The personalized approach and expertise of their team have helped me achieve my wellness goals like never before.",
    img: feedback1,
  },
  {
    name: "Zach King",
    role: "Co Founder",
    message:
      "The quality of the products and services at Apex Care is unmatched. I always feel confident that I'm receiving the best care possible when I visit their facility. I highly recommend them to anyone looking for top-notch healthcare solutions.",
    img: feedback4,
  },
];

export const aboutList = [
  "Scientific Skills For getting a better result",
  "Communication Skills to getting in touch",
  "A Career Overview opportunity Available",
  "A good Work Environment For work",
  "Scientific Skills For getting a better result",
  "Communication Skills to getting in touch",
];
