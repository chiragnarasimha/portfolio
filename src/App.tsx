import "./App.scss";
import Banner from "./Components/Banner/Banner.tsx";
import NavBar from "./Components/NavBar/NavBar.tsx";
import CircleProgressBar from "./Components/Skills/CircleProgressBar.tsx";
import Skills from "./Components/Skills/Skills.tsx";

function App() {
  return (
    <>
      <main className="app__container">
        <NavBar />
        <Banner />
        <Skills />
        <section className="app__container__TEST_DIV">TEST</section>
      </main>
    </>
  );
}

export default App;
