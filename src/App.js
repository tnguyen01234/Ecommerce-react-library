import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Books" element={<Books books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
