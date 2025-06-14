import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        // Convert phone to string and trim all fields
        data.phone = String(data.phone).trim();
        data.name = data.name.trim();
        data.email = data.email.trim();
        data.country = data.country.trim();
        data.password = data.password.trim();

        try {
            const response = await fetch('http://localhost:4000/api/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (!response.ok) {

                toast.error(`${result.error || 'Something went wrong'}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return;
            }


            toast.success("Signup successful!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            e.target.reset();
            navigate('/login'); // Redirect to login page after successful signup

        } catch (error) {

            toast.error(`Signup failed: ${error.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setIsLoading(false);


        }
    };

    return (
        <div style={{ padding: "90px 20px", maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", color: "#FF5300", marginBottom: "30px" }}>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label" style={{ fontWeight: 500 }}>Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Your Name" name='name' required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label" style={{ fontWeight: 500 }}>Email</label>
                        <input type="email" className="form-control" id="email" placeholder="you@email.com" name='email' required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="phone" className="form-label" style={{ fontWeight: 500 }}>Phone number</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Phone number" name='phone' required pattern="\d{10}" maxLength={10} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="country" className="form-label" style={{ fontWeight: 500 }}>Country</label>
                        <input type="text" className="form-control" id="country" placeholder="Your country" name='country' required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label" style={{ fontWeight: 500 }}>Create password for your account</label>
                        <input type="text" className="form-control" id="password" placeholder="Create password" name='password' required minLength={6} />
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn" style={{ backgroundColor: `${isLoading ? "#FF855C" : "#FF5300"}`, color: "white", fontWeight: "bold", padding: "10px 32px", borderRadius: "24px" }} disabled={isLoading}>
                        {isLoading ? (
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        ) : "Signup"}
                    </button>
                </div>
            </form>
            <div className="text-center mt-4">
                <p >Already have an account?
                    <Link to='/login' style={{ color: "#FF5300", textDecoration: "underline" }}>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;