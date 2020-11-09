import React from "react";

// Defaukt imports
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

import { BrowserRouter as Router, Route } from "react-router-dom";

// react Bootstrap imports
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
