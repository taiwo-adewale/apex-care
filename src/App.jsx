import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Home, NotFound, Login, Signup } from "./pages";
import RootLayout from "./components/layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
