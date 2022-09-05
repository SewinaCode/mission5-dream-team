import "./App.css";
import Header from "./sections/header";
import Introduction from "./sections/Intro-Section";
import MainNav from "./sections/mainNav";

function App() {
  return (
    <div className="App">
      <Header />
      <MainNav />
      <Introduction />
    </div>
  );
}

export default App;
