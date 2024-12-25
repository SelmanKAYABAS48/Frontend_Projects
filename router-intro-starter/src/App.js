import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Nav />
      <Home />

      <Contact />
      <NotFound />
      <Footer />
    </>
  );
}

export default App;
