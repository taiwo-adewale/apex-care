import {
  Hero,
  Features,
  AboutUs,
  MissionAndVision,
  FunFacts,
  OurServices,
  Doctors,
  BookAppointment,
  Feedback,
  Faq,
  FeaturedCustomers,
} from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <AboutUs slice={4} />
      <MissionAndVision />
      <FunFacts />
      <OurServices sectionTitle={false} slice={6} />
      <Doctors />
      <BookAppointment />
      <Feedback />
      <Faq />
      <FeaturedCustomers />
    </div>
  );
};

export default Home;
