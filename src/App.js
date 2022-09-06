import "./App.css";
import Header from "./sections/header";
import Introduction from "./sections/Intro-Section";
import MainNav from "./sections/mainNav";
import Policies from "./sections/policy-sec";

function App() {
  return (
    <div className="App">
      <Header />
      <MainNav />
      <Introduction />
      <Policies />
    </div>
  );
}

export default App;
