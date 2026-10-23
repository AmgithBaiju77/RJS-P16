
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <h1>My Website</h1>

          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact Us</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contactus" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2026 My Website. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

