import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Info } from "./pages";
import SmoothScroll from "./components/SmoothScroll";

const App = () => {
  return (
    <Router>
      <Nav />
      <main className="w-full h-auto overflow-x-clip">
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </SmoothScroll>
      </main>
    </Router>
  );
};

export default App;
