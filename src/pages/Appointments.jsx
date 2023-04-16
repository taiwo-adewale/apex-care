import { Banner } from "../components";
import { Calendar, BookAppointment, Feedback } from "../containers";

import appointmentBg from "../assets/appointment.jpg";

const Appointments = () => {
  return (
    <main>
      <Banner
        bgImg={appointmentBg}
        title="Appointments"
        currentPage="Appointments"
      />
      <Calendar />
      <BookAppointment />
      <Feedback bgShape={true} />
    </main>
  );
};

export default Appointments;
