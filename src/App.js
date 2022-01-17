import "./App.css";
import React from "react"; 
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="test">
      <Router>
        <Navbar />
        <Switch> 
          
        </Switch>
        <Footer />
      </Router>
    </div>

    );
  }
}

export default App;
