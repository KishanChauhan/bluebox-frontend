import './App.css';
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./views/layout/Header";
import Footer from "./views/layout/Footer";

import Home from "./views/Home";
import MovingBox from "./views/MovingBoxes";
import BoxPackages from "./views/BoxPackages";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/moving-box" exact component={() => <MovingBox />} />
          <Route path="/box-packges" exact component={() => <BoxPackages />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
