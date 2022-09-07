import "./App.css";
import Header from "./sections/header";
import Introduction from "./sections/Intro-Section";
import MainNav from "./sections/mainNav";
import RetrieveQuote from "./sections/RetrieveQuote"
import Policies from "./sections/policy-sec";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainNav />
        <Introduction />
        <Policies />
        <Switch>
          <Route path="retrievequote">
            <RetrieveQuote />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
