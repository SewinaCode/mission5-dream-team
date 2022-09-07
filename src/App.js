import "./App.css";
import Header from "./sections/header";
import Introduction from "./sections/Intro-Section";
import MainNav from "./sections/mainNav";
import RetrieveQuote from "./sections/RetrieveQuote/RetrieveQuote"
import Policies from "./sections/policy-sec";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/">
            <MainNav />
            <Introduction />
            <Policies />
          </Route>
          <Route path="retrievequote">
            <RetrieveQuote />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
