import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";

function App() {
  useEffect(() => {
    document.title = "My Blogs";
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/lancegee.com" element={<Blog1 />}></Route>
        <Route path="/lancegee.com/blog2" element={<Blog2 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
