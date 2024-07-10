import { About, Contact, Footer, Header, Hero, ProjectsOrg } from "../organism";

function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <About />
        <ProjectsOrg />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
