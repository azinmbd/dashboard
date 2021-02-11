import React from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import Menu from "./Component/Menu";
import Home from "./Pages/Home";
import Reports from "./Pages/Reports";
import Setting from "./Pages/Setting";
import NotFound from "./Pages/NotFound";
import TowerDetail from "./Pages/TowerDetail";
import SearchResult from "./Pages/SearchResult";
import GetBillDates from "./Pages/GetBillDates";
import ElectricityTemplate from "./Pages/pageTemplates/ElectricityTemplate";
import GasTemplate from "./Pages/pageTemplates/GasTemplate";
import WaterTemplate from "./Pages/pageTemplates/WaterTemplate";

const App = () => {
  return (
    <BrowserRouter>
      <section className="rtl container-fluid h-100">
        <div className="row h-100">
          <Menu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home/:id">
              <TowerDetail />
            </Route>

            <Route exact path="/reports">
              <Reports />
            </Route>

            <Route path="/reports/search/:id">
              <SearchResult />
            </Route>

            <Route exact path="/reports/bill/">
              <GetBillDates />
            </Route>

            <Route path="/reports/bill/gas/:id">
              <GasTemplate />
            </Route>

            <Route path="/reports/bill/electricity/:id">
              <ElectricityTemplate />
            </Route>

            <Route path="/reports/bill/water/:id">
              <WaterTemplate />
            </Route>

            <Route path="/setting">
              <Setting />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route path="*">
              <Redirect from="*" to="/404" />
              <NotFound />
            </Route>
          </Switch>
        </div>
      </section>
    </BrowserRouter>
  );
};

export default App;
