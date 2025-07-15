import Navbar from "./modules/Navbar";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Resume from "./sections/resume/Resume";
import Contact from "./sections/contact/Contact";
import Footer from "./modules/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="xl:w-[75%] w-[90%] mx-auto flex flex-col items-center">
        <Hero />
      </div>
      <About />
      <div className="xl:w-[75%] w-[90%] mx-auto flex flex-col items-center">
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
