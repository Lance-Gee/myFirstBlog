import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    document.title = "MyFirstBlog";
  }, []);
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

export default App;
