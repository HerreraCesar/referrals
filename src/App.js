import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import Details from "./components/details/Details";
import Header from "./components/header/Header"
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/promotions/:promotionId" element={<Details/>} />
      </Routes>
    </Router>
  );
}

export default App;
