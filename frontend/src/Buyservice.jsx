import React from 'react'
import { toast } from 'react-toastify';
import { useState } from 'react';
const Buyservice = () => {
    const [loading, setLoading] = useState(false);
    const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const token = sessionStorage.getItem("token");

        if (!token) {
            toast.error("No authentication token found. Please log in.");
            setLoading(false);
            return;
        }

        const response = await fetch("http://localhost:4000/api/service", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(data),
            credentials: "include"
        });

        const result = await response.json();

        if (response.ok) {
            toast.success("Service request submitted successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            e.target.reset();
        } else {
            toast.error(result.error || "Failed to submit service request", {
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
    } catch (error) {
        toast.error(error.message || "An error occurred while submitting the service request", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } finally {
        setLoading(false); // Ensure loading is stopped in all cases
    }
}

    return (
        <div style={{ width: "100%", margin: "auto" }}>
            <h3 style={{ marginBottom: "45px",color:"#FF5300" }}>Buy service</h3>
            <form onSubmit={handlesubmit} >
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="service" className="form-label" style={{ fontWeight: 500 }}>Service</label>
                        <select className="form-control" id="service" name="service" required>
                            <option value="">Select a service</option>
                            <option value="Web development">Web development</option>
                            <option value="Graphic design">Graphic design</option>
                            <option value="Video editing">Video editing</option>
                            <option value="Digital marketing">Digital marketing</option>
                            <option value="Content writing">Content writing</option>
                            <option value="Thumbnail design">Thumbnail design</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="date" className="form-label" style={{ fontWeight: 500 }}>Your expected date for completion.</label>
                        <input type='text' className="form-control" id="date" placeholder='DD-MM-YYYY' name='date' required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="worktype" className="form-label" style={{ fontWeight: 500 }}>Work type</label>
                        <select className="form-control" id="worktype" name="worktype" required>
                            <option value="">Select work type</option>
                            <option value="Long-term">Long-term</option>
                            <option value="Short-term">Short-term</option>
                            <option value="One-time">One-time</option>

                            {/* Add more options as needed */}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label" style={{ fontWeight: 500 }}>Describe your requirements</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            placeholder="Describe your requirements or details for the service"
                            rows={4}
                            required
                        />
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn" style={{ backgroundColor: "#FF5300", color: "white", fontWeight: "bold", padding: "10px 32px", borderRadius: "24px" }}>
                        {loading ? <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Buyservice
