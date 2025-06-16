import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import DashboardSummary from "./components/DashboardSummary";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import Email from "./pages/Email";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-bg overflow-hidden">
        {/* Persistent Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Persistent TopNavbar */}
          <TopNavbar />

          <div className="flex flex-1 overflow-hidden">
            <Switch>
              <Route exact path="/">
                <div className="flex flex-1 overflow-hidden">
                  <div className="flex-1 overflow-y-auto p-6">
                    <DashboardSummary />
                  </div>
                  {/* Right Sidebar only on Dashboard */}
                  <RightSidebar />
                </div>
              </Route>

              <Route path="/email">
                <div className="flex-1 overflow-y-auto p-6">
                  <Email />
                </div>
              </Route>

              {/* Add more routes here as needed */}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
