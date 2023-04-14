import { Banner, OurServices } from "../components";

import contactBg from "../assets/contact-img.jpg";

const Services = () => {
  return (
    <main>
      <Banner bgImg={contactBg} title="Our Services" currentPage="Services" />
      <OurServices />
    </main>
  );
};

export default Services;
