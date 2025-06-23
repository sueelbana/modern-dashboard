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
import Reports from "./pages/Reports";
import Banking from "./pages/Banking";
import Ticketing from "./pages/Ticketing"; // ✅ Import

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-bg overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TopNavbar />
          <div className="flex flex-1 overflow-hidden">
            <Switch>
              <Route exact path="/">
                <div className="flex flex-1 overflow-hidden">
                  <div className="flex-1 overflow-y-auto p-6">
                    <DashboardSummary />
                  </div>
                  <RightSidebar />
                </div>
              </Route>

              <Route path="/crypto">
                <CryptoDashboard />
              </Route>

              <Route path="/email">
                <div className="flex-1 overflow-y-auto p-6">
                  <Email />
                </div>
              </Route>

              <Route path="/contacts">
                <div className="flex-1 overflow-y-auto p-6">
                  <ContactPage />
                </div>
              </Route>

              <Route path="/kanban">
                <div className="flex-1 overflow-y-auto p-6">
                  <Kanban />
                </div>
              </Route>

              <Route path="/reports">
                <div className="flex-1 overflow-y-auto p-6">
                  <Reports />
                </div>
              </Route>

              <Route path="/banking">
                <div className="flex-1 overflow-y-auto p-6">
                  <Banking />
                </div>
              </Route>

              {/* ✅ Ticketing Page Route */}
              <Route path="/tickets">
                <div className="flex-1 overflow-y-auto p-6">
                  <Ticketing />
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
