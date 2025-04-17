import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/Scrolltop";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Contact } from "./pages/Contact";
import { Company } from "./pages/Company";
import { Productdetail } from "./pages/Productdetail"; 
import AppLayout from "./AppLayout";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Productdetail/:id" element={<Productdetail />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;