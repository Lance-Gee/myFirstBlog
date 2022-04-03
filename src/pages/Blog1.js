import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Blog1() {
  return (
    <div>
      <Header />
      <Container>
        <Body />
      </Container>
      <Footer />
    </div>
  );
}

export default Blog1;
