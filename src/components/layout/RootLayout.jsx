import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

import ScrollToTop from "../ScrollToTop";

const RootLayout = () => {
  return (
    <ScrollToTop>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </ScrollToTop>
  );
};

export default RootLayout;
