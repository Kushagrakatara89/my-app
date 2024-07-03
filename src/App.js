import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/services.scss";
import "./styles/mediaquery.scss";


function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        {/* Define routes properly, here as an example */}
        <Route path="/" element={<Home />} />
        
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
      <Contact />
      <Services />
    </Router>
  );
}

export default App;
