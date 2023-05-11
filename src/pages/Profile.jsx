import { Banner } from "../components";
import { MedicalProfile, Calendar } from "../containers";

import contactBg from "../assets/contact-img.jpg";

const Profile = () => {
  return (
    <main>
      <Banner bgImg={contactBg} title="Profile" currentPage="Profile" />
      <Calendar />
      <MedicalProfile />
    </main>
  );
};

export default Profile;
