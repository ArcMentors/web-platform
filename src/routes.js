// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";

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
  {
    path: "/register",
    layout: DefaultLayout,
    component: Register
  },
];

export default Paths;
