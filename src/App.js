import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog"
import SinglePost from "./components/Single Post/SinglePost"


const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SinglePost />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
