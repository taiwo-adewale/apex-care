import {
  Doctors,
  FunFacts,
  Services,
  BookAppointment,
  MissionAndVision,
} from "../components";

const Home = () => {
  return (
    <div>
      <MissionAndVision />
      <FunFacts />
      <Services />
      <Doctors />
      <BookAppointment />
    </div>
  );
};

export default Home;
