import "./App.css";
import Intro from "./components/Intro";
import NavigationBar from "./components/NavigationBar";
import Trending from "./components/Trending";
import "./style/landingPage.css";

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End Intro Section */}
      <div className="trending">
        <Trending />
      </div>
    </div>
  );
}

export default App;
