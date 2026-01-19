import "./App.css";
import About from "./components/sections/About";
import Header from "./components/layout/Header";
import Container from "./components/common/Container";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Container>
      <Header />
      <About />
      <Footer />
    </Container>
  );
}

export default App;
