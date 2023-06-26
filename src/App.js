import './App.css';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" style={{ backgroundColor: loading ? "#1b212b" : "transparent" }}>
      <div className="sweet-loading">
      
              <BeatLoader size={50} color="#ffffff" loading={loading} />

      </div>

      {!loading && (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
