import "./App.scss";
import Banner from "./Components/Banner/Banner.tsx";
import NavBar from "./Components/NavBar/NavBar.tsx";

function App() {
  return (
    <>
      <main className="app__container">
        <NavBar />
        <Banner />
        <section className="app__container__TEST_DIV">TEST</section>
      </main>
    </>
  );
}

export default App;
