import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Order from "./components/Order";
import ProductAdd from "./components/ProductAdd";
import ProductLists from "./components/ProductLists";

const routes = [
  {
    path: "/",
    exact: true,
    element: <Dashboard />,
  },
  {
    path: "/products",
    exact: true,
    element: <ProductLists />,
  },
  {
    path: "/product/add",
    exact: true,
    element: <ProductAdd />,
  },
  {
    path: "/order",
    exact: true,
    element: <Order />,
  },
  {
    path: "/contact",
    exact: true,
    element: <Contact />,
  },
];

export default routes;
