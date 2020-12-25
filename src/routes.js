// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Home from "./views/Home";
import Login from "./views/Login";

const Paths = [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Home
  },
  {
    path: "/login",
    layout: DefaultLayout,
    component: Login
  },
];

export default Paths;
