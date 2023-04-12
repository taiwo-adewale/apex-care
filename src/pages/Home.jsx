import {
  Hero,
  Doctors,
  FunFacts,
  Services,
  BookAppointment,
  MissionAndVision,
  About,
  Features,
  Faq,
  Feedback,
  FeaturedCustomers,
} from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      <MissionAndVision />
      <FunFacts />
      <Services />
      <Doctors />
      <BookAppointment />
      <Feedback />
      <Faq />
      <FeaturedCustomers />
    </div>
  );
};

export default Home;
