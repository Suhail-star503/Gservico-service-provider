import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Signup from "./signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { AppData } from "./context";
import { toast } from "react-toastify";

function App() {
  const { signin, setsignin, setUser } = useContext(AppData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // const token = localStorage.getItem("token");
        const token = sessionStorage.getItem("token");
        if(!token){
          // If no token, user is not authenticated
          setsignin(false);
          setLoading(false);
          return;
        }
        const response = await fetch("http://localhost:4000/api/user/check-auth", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token

          }
          
        });
        const data = await response.json();
        if (data.authenticated) {
          setsignin(true);
          return
        } else {
          setsignin(false);
          return;
        }
      } catch (error) {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setsignin(false);
      }
      finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    // Only fetch user if signed in
    if (!signin) return;

    const fetchUser = async () => {
      setLoading(true);
      try {
        const token = sessionStorage.getItem("token");
        const response = await fetch("http://localhost:4000/api/user/getbyid", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
           "Authorization": token

          }
        });
        const data = await response.json();
        
        if (data.status) {
          setUser(data.user.name);
        } else {
          setUser(null);
        }
      } catch (error) {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [signin]); // <--- run when signin changes

  const ProtectRoute = ({ children }) => {
    if (!signin) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  if (loading) {
    // Show a loading spinner or nothing while checking auth
    return <div style={{ textAlign: "center", marginTop: "100px" }}><div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div></div>;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectRoute><Dashboard /></ProtectRoute>} />
      </Routes>
    </Router>
  );
}

export default App;