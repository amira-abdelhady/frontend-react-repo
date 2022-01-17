import "./App.css";
import React from "react"; 
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserForm from "./pages/UserForm";
import UserListAPI from "./pages/UserList";
import UserDetails from './pages/UserDetails';


class App extends React.Component {
  render() {
    return (
      <div className="test">
      <Router>
        <Navbar />
        <Switch> 
        <Route path={"/user"} exact component={UserListAPI} />
        <Route path={"/user/:id"} exact component={UserDetails} />
        <Route path={"/user/list"} exact component={UserForm} />

        </Switch>
        <Footer />
      </Router>
    </div>

    );
  }
}

export default App;
