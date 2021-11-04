import { Route, Switch, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Calender from "./Pages/Calender";
import Settings from "./Pages/Settings";
import { AnimatePresence } from "framer-motion";
import UserDetails from "./Pages/UserDetails";
import User from "./Pages/User";
import Map from "./Pages/Map";

function App() {
  const location = useLocation();
  return (
    <>
      <Sidebar />
      <div className="container" style={{ marginLeft: 70 }}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/calender" component={Calender} />
            <Route path="/map" component={Map} />
            <Route path="/settings" component={Settings} />
            <Route path="/userdetails/:id" component={UserDetails} />
          </Switch>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
