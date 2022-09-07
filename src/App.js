import "./App.css";
import Header from "./sections/header";
import Introduction from "./sections/Intro-Section";
import MainNav from "./sections/mainNav";
import RetrieveQuote from "./sections/RetrieveQuote"
import Policies from "./sections/policy-sec";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Introduction />
        <MainNav />
        <Policies />
        <Routes>
          <Route exact path="retrievequote" element={<RetrieveQuote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
