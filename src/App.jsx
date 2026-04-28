import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Victim from "./pages/Victim";
import Counsellor from "./pages/Counsellor";
import LegalInfo from "./pages/LegalInfo";
import Counselling from "./pages/Counselling";
import Users from "./pages/Users";

/* ✅ SAFE USER FETCH */
const getUser = () => {
  try {
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

/* 🔐 PROTECTED ROUTE (LOGIN REQUIRED) */
const ProtectedRoute = ({ children }) => {
  const user = getUser();
  return user ? children : <Navigate to="/" replace />;
};

/* 🔒 ADMIN ONLY */
const AdminRoute = ({ children }) => {
  const user = getUser();

  if (!user) return <Navigate to="/" replace />;

  if (user.role !== "admin") {
    return <Navigate to="/home" replace />;
  }

  return children;
};

/* 🎨 COMMON LAYOUT */
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="page-content">{children}</div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔓 LOGIN */}
        <Route path="/" element={<Login />} />

        {/* 🏠 HOME (FIXED — no unnecessary redirect) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* 🔒 ADMIN ONLY */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Layout>
                <Admin />
              </Layout>
            </AdminRoute>
          }
        />

        {/* 👤 VICTIM */}
        <Route
          path="/victim"
          element={
            <ProtectedRoute>
              <Layout>
                <Victim />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* 👨‍⚕️ COUNSELLOR */}
        <Route
          path="/counsellor"
          element={
            <ProtectedRoute>
              <Layout>
                <Counsellor />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* ⚖️ LEGAL */}
        <Route
          path="/legal"
          element={
            <ProtectedRoute>
              <Layout>
                <LegalInfo />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* 💬 COUNSELLING */}
        <Route
          path="/counselling"
          element={
            <ProtectedRoute>
              <Layout>
                <Counselling />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* 👥 USERS (ADMIN ONLY) */}
        <Route
          path="/users"
          element={
            <AdminRoute>
              <Layout>
                <Users />
              </Layout>
            </AdminRoute>
          }
        />

        {/* 🔁 DEFAULT */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;