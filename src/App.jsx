import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Victim from "./pages/Victim";
import Counsellor from "./pages/Counsellor";
import LegalInfo from "./pages/LegalInfo";
import Counselling from "./pages/Counselling";
import Users from "./pages/Users";   // ✅ ADD THIS

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login page */}
        <Route path="/" element={<Login />} />

        {/* Home */}
        <Route path="/home" element={
          <>
            <Navbar />
            <div className="page-content">
              <Home />
            </div>
            <Footer />
          </>
        }/>

        {/* Admin */}
        <Route path="/admin" element={
          <>
            <Navbar />
            <div className="page-content">
              <Admin />
            </div>
            <Footer />
          </>
        }/>

        {/* Victim */}
        <Route path="/victim" element={
          <>
            <Navbar />
            <div className="page-content">
              <Victim />
            </div>
            <Footer />
          </>
        }/>

        {/* Counsellor */}
        <Route path="/counsellor" element={
          <>
            <Navbar />
            <div className="page-content">
              <Counsellor />
            </div>
            <Footer />
          </>
        }/>

        {/* Legal */}
        <Route path="/legal" element={
          <>
            <Navbar />
            <div className="page-content">
              <LegalInfo />
            </div>
            <Footer />
          </>
        }/>

        {/* Counselling */}
        <Route path="/counselling" element={
          <>
            <Navbar />
            <div className="page-content">
              <Counselling />
            </div>
            <Footer />
          </>
        }/>

        {/* ✅ NEW USERS PAGE */}
        <Route path="/users" element={
          <>
            <Navbar />
            <div className="page-content">
              <Users />
            </div>
            <Footer />
          </>
        }/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;