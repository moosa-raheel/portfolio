import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { About, Home, Resume } from "./pages";
import useLenis from "./hooks/uselenis";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
    </Route>
  )
);
const App = () => {
  useLenis();
  return <RouterProvider router={router} />;
};

export default App;
