import { Outlet } from "react-router-dom";
import { Header, Footer } from "..";

const RootLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
