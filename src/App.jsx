import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Info from "./components/Info";
import ProductShowcase from "./components/ProductShowcase";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Functionality from "./components/Functionality";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Info />
      <Functionality />
      <ProductShowcase />
      <Countdown />
      <Form />
      <Gallery />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
