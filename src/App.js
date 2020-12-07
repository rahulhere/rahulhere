import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./Component/Home/Home";
import SideDrawer from "./UI/SideDrawer/SideDrawer";

function App() {
  const [hide, _setHide] = useState(true);

  const setHide = (bool) => {
    _setHide(bool);
  };

  const isTabletMobile = useMediaQuery({ query: "(max-width: 760px)" });
  if (!isTabletMobile && hide === false) {
    setHide(true);
  }

  return (
    <div className="App">
      <Header hide={hide} setHide={setHide} />
      <SideDrawer hide={hide} setHide={setHide} />

      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
