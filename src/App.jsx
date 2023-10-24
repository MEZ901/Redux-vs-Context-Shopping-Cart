import { Route, Routes } from "react-router-dom";
import { About, Home, Store } from "./pages";
import { Navbar } from "./components";
import { ShoppingCartProvider } from "./context";


const App = () => {
  return (
    <ShoppingCartProvider>
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
    </ShoppingCartProvider>
  );
};

export default App;
