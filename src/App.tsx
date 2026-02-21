import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateBlogPage from "./pages/CreateBlogPage";
import UpdateBlogPage from "./pages/UpdateBlogPage";
import HomePage from "./pages/HomePage";
import FeedPage from "./pages/FeedPage";
import NavbarHome from "./components/Navbar/NavbarHome";
import { ToastContainer } from "react-toastify";
import RegisterPage from "./pages/RegisterPage";
import NavbarFeed from "./components/Navbar/NavbarFeed";
import VerifyPage from "./pages/verifyPage";

function App() {
  return (
    <div className="bg-purple-300 min-h-screen">
      <Routes>
        <Route path="/" element={<><NavbarHome/><HomePage /></>} />
        <Route path="/register" element={<><NavbarHome/><RegisterPage /> </>} />
        <Route path="/verify/:token" element={<><NavbarHome/><VerifyPage /></>} />
        <Route path="/notes" element={<><NavbarFeed/><FeedPage/></>}/>
        <Route path="/createBlog" element={<><NavbarFeed/><CreateBlogPage /></>} />
        <Route path="/updateBlog/:id" element={<><NavbarFeed/><UpdateBlogPage /></>} />
        <Route path="*" element={<><NavbarHome/><HomePage /></>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
