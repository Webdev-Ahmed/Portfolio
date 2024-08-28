import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const Info = lazy(() => import("./pages/Info"));

const App = () => {
  return (
    <Router>
      <Nav />
      <main className="w-full h-auto overflow-x-clip">
        <SmoothScroll>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/info"
              element={
                <Suspense fallback={<Loader />}>
                  <Info />
                </Suspense>
              }
            />
          </Routes>
        </SmoothScroll>
      </main>
    </Router>
  );
};

export default App;
