import React from "react";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import Videos from "./components/Videos";
import SearchPage from "./components/SearchPages"
import "./Css/App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search/:searchTerm">
              <div className="app_page">
                <Sidebar />
                <SearchPage/>
              </div>
          </Route>
            <Route path="/">
              <div className="app_page">
                <Sidebar />
                <Videos/>
              </div>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
