import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import DashboardSummary from "./components/DashboardSummary";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import Email from "./pages/Email";
import ContactPage from "./pages/ContactPage";
import CryptoDashboard from "./pages/CryptoDashboard";
import Kanban from "./pages/Kanban";

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
              {/* Dashboard Route */}
              <Route exact path="/">
                <div className="flex flex-1 overflow-hidden">
                  <div className="flex-1 overflow-y-auto p-6">
                    <DashboardSummary />
                  </div>
                  <RightSidebar />
                </div>
              </Route>

              {/* Crypto Dashboard Route */}
              <Route path="/crypto">
                <CryptoDashboard />
              </Route>

              {/* Email Page */}
              <Route path="/email">
                <div className="flex-1 overflow-y-auto p-6">
                  <Email />
                </div>
              </Route>

              {/* Contacts Page */}
              <Route path="/contacts">
                <div className="flex-1 overflow-y-auto p-6">
                  <ContactPage />
                </div>
              </Route>
              
              {/* Kanban Page */}
              <Route path="/kanban">
                <div className="flex-1 overflow-y-auto p-6">
                  <Kanban />
                </div>
              </Route>

            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
