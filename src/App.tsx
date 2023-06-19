import "./App.scss";
import Banner from "./Components/Banner/Banner.tsx";
import NavBar from "./Components/NavBar/NavBar.tsx";
import Project from "./Components/Projects/Project.tsx";

import Skills from "./Components/Skills/Skills.tsx";

function App() {
  return (
    <>
      <main className="app__container">
        <NavBar />
        <Banner />
        <Skills />
        <Project />
        {/* <ContactForm />
        <section className="app__container__TEST_DIV">TEST</section> */}
      </main>
    </>
  );
}

export default App;
