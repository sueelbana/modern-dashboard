import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
import Ticketing from "./pages/Ticketing";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
     <div className="flex min-h-screen bg-bg overflow-y-auto overflow-x-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TopNavbar />
        <div className="flex flex-1">
            <Switch>
              <Route exact path="/">
        <div className="flex flex-1">
        <div className="flex-1 p-6">
            <DashboardSummary />
       </div>
           <RightSidebar />

      </div>
    </Route>

              <Route path="/crypto">
                <CryptoDashboard />
              </Route>

              <Route path="/email">
                  <Email />
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
