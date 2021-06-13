import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./views/layout/Header";
import Footer from "./views/layout/Footer.js";

import Home from "./views/Home";



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
