import "./App.css";
import RetrieveQuote from "./sections/RetrieveQuote"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/HomePage";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/retrievequote" element={<RetrieveQuote />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
