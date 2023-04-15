import { Banner } from "../components";
import { SendMessage } from "../containers";

import contactBg from "../assets/contact-img.jpg";

const Contact = () => {
  return (
    <main>
      <Banner bgImg={contactBg} title="Contact" currentPage="Contact" />
      <SendMessage />
    </main>
  );
};

export default Contact;
