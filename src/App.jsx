import Boite3D from "./components/Boite3D";
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Info from "./components/Info";
import ProductShowcase from "./components/ProductShowcase";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Info />
      <ProductShowcase />
      <Countdown />
      <Form />
      <Gallery />
    </div>
  )
}

export default App
