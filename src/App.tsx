import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";

import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

{
  /*
  ESEMPIO DI ROUTING TRA PAGINE
  <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  */
}

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
