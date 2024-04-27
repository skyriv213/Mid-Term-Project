import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";

function GlobalStyle() {
  return (
    <style>
      {`
        body {
          background: url('https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?cs=srgb&dl=pexels-jakub-novacek-924824.jpg&fm=jpg') no-repeat center center;
          justify-content: center;
        }
      `}
    </style>
  );
}

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <TransitionGroup className="transition-group">
          <CSSTransition classNames="fade" timeout={500}>
            <Routes>
              <Route path="/Mid-Term-Project/" element={<Home />} />
              <Route path="/Mid-Term-Project/about" element={<About />} />
              <Route path="/Mid-Term-Project/contact" element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Router>
    </div>
  );
}

export default App;
