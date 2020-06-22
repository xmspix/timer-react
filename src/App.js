import React, { useState } from "react";
import Timer from "./components/timer";
import Svg from "./components/svg";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Context from "./store/context";
import Menu from "./components/menu";

const App = () => {
  const [counter, setCounter] = useState(false);

  const Home = () => {
    return (
      <>
        <div id="firework">
          <div className="before"></div>
          <div className="after"></div>
        </div>
        <Menu />
        <main className="light">
          <Timer />
        </main>
      </>
    );
  };

  const Footer = () => {
    return (
      <footer>
        <a href="http://www.github.com/xmspix">
          <Svg src="icon-github" custom_class="icon" />
          <div>Build by Mark Stoler</div>
        </a>
      </footer>
    );
  };

  return (
    <Context.Provider value={{ counter, setCounter }}>
      {/* <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        <Footer />
      </BrowserRouter> */}
      <Home />
      <Footer />
    </Context.Provider>
  );
};

export default App;
