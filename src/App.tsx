import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Nav from "./components/Nav";

const Home = lazy(() => import("./pages/Home"));
const Info = lazy(() => import("./pages/Info"));
const Cambridge = lazy(() => import("./pages/Cambridge"));
const SvelteBlog = lazy(() => import("./pages/SvelteBlog"));
const Brainwave = lazy(() => import("./pages/Brainwave"));

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
            <Route
              path="/cambridge-hospital"
              element={
                <Suspense fallback={<Loader />}>
                  <Cambridge />
                </Suspense>
              }
            />
            <Route
              path="/svelte-blog"
              element={
                <Suspense fallback={<Loader />}>
                  <SvelteBlog />
                </Suspense>
              }
            />
            <Route
              path="/brainwave"
              element={
                <Suspense fallback={<Loader />}>
                  <Brainwave />
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
