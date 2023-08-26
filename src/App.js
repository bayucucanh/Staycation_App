import "assets/scss/style.scss";
import { Button } from "elements";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={LandingPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
