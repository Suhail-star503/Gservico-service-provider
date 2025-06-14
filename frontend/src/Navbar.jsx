import React from 'react'
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppData } from './context';
const Navbar = () => {
    const [loading, setloading] = useState(false);
    const { signin, setsignin, user } = useContext(AppData);
    const navigate = useNavigate();
    // const logout = async () => {
    //     setloading(true);
    //     try {
    //         const response = await fetch("http://localhost:4000/api/user/logout", {
    //             method: "POST",
    //             credentials: "include"
    //         });
    //         const data = await response.json();
    //         if (data.success) {
    //             toast.success("Logout successful", {
    //                 position: "top-right",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //             setsignin(false); // Update signin state to false
    //             navigate('/login');
    //         } else {
    //             toast.error(data.error, {
    //                 position: "top-right",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             })
    //         }
    //     } catch (error) {
    //         toast.error(error.message, {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,

    //         })
    //     } finally {
    //         setloading(false);
    //     }
    // }
    const logout=()=>{
        // remove the token from sessionStorage
        sessionStorage.removeItem("token");
        
        setsignin(false);
        navigate('/login');
        toast.success("Logout successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const handleOffcanvasClose = () => {
        const offcanvas = document.getElementById('offcanvasNavbar');
        if (offcanvas) {
            const bsOffcanvas = window.bootstrap?.Offcanvas.getInstance(offcanvas);
            if (bsOffcanvas) {
                bsOffcanvas.hide();
            }
        }
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#FFD5BF", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", position: "fixed", width: "100%", zIndex: 100, height: "80px" }}>
                <div className="container-fluid">

                    <Link to={'/'} style={{ textDecoration: "none" }}>
                        <img src="/logo4-removebg-preview.png" alt="Logo" width="40" height="30" className="d-inline-block align-text-top" />
                        <span style={{ color: '#FF5300', fontWeight: "bold", fontSize: "25px", position: "relative", top: "6px", backgroundColor: "transparent" }}>Gservico</span>
                    </Link>

                    <span className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" style={{ cursor: "pointer", border: "none", backgroundColor: "transparent" }}>
                        <span><AiOutlineMenuFold style={{ fontSize: "25px", fontWeight: "bold", color: "black" }} /></span>
                    </span>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ backgroundColor: "#FFEDE6" }}>
                        <div className="offcanvas-header">

                            <img src="/logo4-removebg-preview.png" alt="Logo" width="40" height="30" className="d-inline-block align-text-top" style={{ position: "relative", top: "-20px" }} />
                            <span style={{ color: '#FF5300', fontWeight: "bold", fontSize: "25px", position: "relative", top: "3px", backgroundColor: "transparent", marginBottom: "50px" }}>Gservico</span>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link" style={{ color: "#FF5300", fontWeight: "bold" }} onClick={handleOffcanvasClose}>
                                        <div className="btn" style={{ backgroundColor: "#FF5300", color: "white", width: "75px" }}>Home</div>
                                    </Link>
                                </li>
                                {signin ? <><li className="nav-item dropdown" style={{ position: "relative", top: "10px" }}>
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{
                                            padding: "8px 16px",
                                            borderRadius: "30px",
                                            background: "#fff",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            fontWeight: "bold",
                                            color: "#FF5300"
                                        }}
                                    >
                                        <FaUserAlt style={{ fontSize: 22, color: "#FF5300", marginRight: 8 }} />
                                        {user}
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end"
                                        style={{
                                            minWidth: "220px",
                                            borderRadius: "16px",
                                            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                                            padding: "18px 0 8px 0",
                                            background: "#fff"
                                        }}
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <li className="text-center mb-2">
                                            <FaUserAlt style={{ fontSize: 38, color: "#FF5300", marginBottom: 6 }} />
                                            <div style={{ fontWeight: "bold", color: "#333" }}>{user}</div>
                                            <div style={{ fontSize: 13, color: "#888" }}>Profile</div>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <button className='btn' style={{ color: "#FF5300", border: 'none', backgroundColor: 'transparent' }} onClick={logout}>
                                                {loading ? <div className="spinner-border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div> : "Logout"}
                                            </button>
                                        </li>
                                        <li>
                                            <Link to={'/dashboard'} className="dropdown-item" style={{ fontWeight: 500, color: "black" }} onClick={handleOffcanvasClose}>

                                                Your Dashboard
                                            </Link>
                                        </li>
                                    </ul>
                                </li></> : <><li className="nav-item">
                                    <Link to={'/signup'} className="nav-link" style={{ color: "#FF5300", fontWeight: "bold" }} onClick={handleOffcanvasClose}>
                                        <div className="btn" style={{ backgroundColor: "#FF5300", color: "white" }}>Signup</div>
                                    </Link>
                                </li>
                                    <li className="nav-item">
                                        <Link to={'/login'} className="nav-link" style={{ color: "#FF5300", fontWeight: "bold" }} onClick={handleOffcanvasClose}>
                                            <div className="btn" style={{ backgroundColor: "#FF5300", color: "white", width: "75px" }}>Login</div>
                                        </Link>
                                    </li></>}


                            </ul>

                        </div>
                    </div>


                </div>
            </nav>
        </div>
    )
}

export default Navbar
