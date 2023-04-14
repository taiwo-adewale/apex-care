import {
  Banner,
  AboutUs,
  AboutFeatures,
  MissionAndVision,
  BookAppointment,
  FunFacts,
  Doctors,
  OurApproach,
  Feedback,
  FeaturedCustomers,
} from "../components";

import aboutBg from "../assets/about-bg.jpg";

const About = () => {
  return (
    <main>
      <Banner bgImg={aboutBg} title="About Us" currentPage="About Us" />
      <AboutUs padding={true} />
      <AboutFeatures />
      <MissionAndVision />
      <BookAppointment />
      <FunFacts />
      <Doctors />
      <OurApproach />
      <Feedback bgShape={true} />
      <FeaturedCustomers />
    </main>
  );
};

export default About;
