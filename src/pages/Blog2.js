import React from "react";
import { Container } from "react-bootstrap";
import Blog2Body from "../components/Blog2Body";
import Footer from "../components/Footer2";
import Header from "../components/Header2";

function Blog2() {
  return (
    <div>
      <Header />
      <Container>
        <Blog2Body />
      </Container>
      <Footer />
    </div>
  );
}

export default Blog2;
