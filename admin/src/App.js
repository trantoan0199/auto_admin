import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import routes from "./routes";
import "./scss/style.scss";

const showContent = (routes) => {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          element={route.element}
        />
      );
    });
  }
  return <Routes>{result}</Routes>;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="dashboard">{showContent(routes)}</div>
      </Router>
    </div>
  );
}

export default App;
