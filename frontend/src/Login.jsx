import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { AppData } from './context';
import { useContext } from 'react';
const Login = () => {
    const { signin, setsignin } = useContext(AppData);
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    const handlesubmit = async (e) => {
        e.preventDefault();
        setloading(true);

        // Use FormData to reliably get form values
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const response = await fetch("http://localhost:4000/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password }),
                credentials: "include"
            });
            const data = await response.json();
            if (data.success) {
                // // Store the token in localStorage
                // localStorage.setItem("token", data.token, {
                //     httpOnly: true,
                //     // secure: process.env.NODE_ENV === 'production',

                // });
                sessionStorage.setItem("token", data.token);
                toast.success("Login successful", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                e.target.reset();
                setsignin(true); // Update signin state to true
                navigate('/dashboard'); // Redirect to dashboard on successful login
            } else {
                toast.error(` ${data.error}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return
            }
        } catch (error) {
            toast.error(`${error.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setloading(false);

        }
    };

    return (
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
            <div style={{ width: "19rem", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 24px rgba(0,0,0,0.1)", backgroundColor: "#fff" }}>
                <h2 style={{ textAlign: "center", color: "#FF5300", marginBottom: "29px" }}>Login</h2>
                <form onSubmit={handlesubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" style={{ fontWeight: 500 }}>Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" required name='email' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label" style={{ fontWeight: 500 }}>Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" required name='password' />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn" style={{ backgroundColor: `${loading ? "#FF855C" : "#FF5300"}`, color: "white", fontWeight: "bold", padding: "10px 32px", borderRadius: "24px" }}>
                            {loading ? <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div> : "Login"}
                        </button>

                        <p>Don't have account? <span><Link to={'/signup'} style={{ color: "#FF5300" }}>Signup</Link></span></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;