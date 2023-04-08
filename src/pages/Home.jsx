import {
  Doctors,
  FunFacts,
  Services,
  BookAppointment,
  MissionAndVision,
  About,
} from "../components";

const Home = () => {
  return (
    <div>
      <About />
      <MissionAndVision />
      <FunFacts />
      <Services />
      <Doctors />
      <BookAppointment />
    </div>
  );
};

export default Home;
