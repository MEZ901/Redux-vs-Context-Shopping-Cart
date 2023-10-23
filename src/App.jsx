import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About, Home, Store } from "./pages";

const App = () => {
  return (
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
  );
};

export default App;
