import { Doctors, FunFacts, Services, BookAppointment } from "../components";

const Home = () => {
  return (
    <div>
      <FunFacts />
      <Services />
      <Doctors />
      <BookAppointment />
    </div>
  );
};

export default Home;
