import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import BookWash from "./pages/BookWash.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/book-wash" element={<BookWash />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
