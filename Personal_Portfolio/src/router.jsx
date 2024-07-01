import { createBrowserRouter } from "react-router-dom";
import Practice from "./components/Practice";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Practice />,
  },
]);



