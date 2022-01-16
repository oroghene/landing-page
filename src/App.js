import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from './components';
import { HomePage, Services, Products, SignUp } from "./pages";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
