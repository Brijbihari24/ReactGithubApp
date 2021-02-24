import React, { useState } from "react";
import "./App.css";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Router
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

//Components
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PageNotFound from "./pages/PageNotFound";

//Firebase
import Firebase from "firebase/app";
import "firebase/auth";

//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";

import { UserContext } from "./context/userContext";

import firebaseConfig from "./config/firebaseConfig";
//initializing firebase
Firebase.initializeApp(firebaseConfig); // simply putting the key value variable in the initiaizeApp method

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
