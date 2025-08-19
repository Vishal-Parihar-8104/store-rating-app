import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard";
import StoreList from "./pages/StoreList";
import Profile from "./pages/Profile";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<StoreList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
          <Route path="/profile" element={user ? <Profile /> : <Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
