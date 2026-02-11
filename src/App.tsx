import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CreateBlogPage from "./pages/CreateBlogPage";
import UpdateBlogPage from "./pages/UpdateBlogPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-purple-300 min-h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createBlog" element={<CreateBlogPage />} />
        <Route path="/updateBlog" element={<UpdateBlogPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
