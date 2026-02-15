import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateBlogPage from "./pages/CreateBlogPage";
import UpdateBlogPage from "./pages/UpdateBlogPage";
import HomePage from "./pages/HomePage";
import FeedPage from "./pages/FeedPage";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-purple-300 min-h-screen">
      <Navbar/>
      <Routes>
        {/* 
        Luego...
        <Route path="/" element={<HomePage />} />
        <Route path="/notes" element={<FeedPage/>}/>
        */}
        <Route path="/" element={<FeedPage />} />
        <Route path="/login" element={<HomePage/>}/>
        <Route path="/createBlog" element={<CreateBlogPage />} />
        <Route path="/updateBlog/:id" element={<UpdateBlogPage />} />
        <Route path="*" element={<FeedPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
