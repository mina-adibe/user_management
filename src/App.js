import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ListOfUsers from "./component/listOfUsers/listOfUsers";
import ModifyUses from "./component/ModifyUser/modifyUses";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <Router>
      <LandingPage />

      <Switch>
        <Route path="/ListOfUsers">
          <ListOfUsers />
        </Route>
        <Route path="/ModifyUses">
          <ModifyUses />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
