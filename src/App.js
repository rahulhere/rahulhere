import "./App.css";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./Component/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />

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
