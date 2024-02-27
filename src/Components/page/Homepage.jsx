import About from "../organism/About";
import Contact from "../organism/Contact";
import Footer from "../organism/Footer";
import Header from "../organism/Header";
import Hero from "../organism/Hero";
import ProjectsOrg from "../organism/ProjectsOrg";

function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <div className="px-4 sm:px-6 lg:px-8">
        <About />
        <ProjectsOrg />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
