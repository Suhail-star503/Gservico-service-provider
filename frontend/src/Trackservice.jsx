import React, { use } from 'react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
const Trackservice = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const handleclick = () => {
    return toast.warn('You cannot delete or mark it as complete until the process is completed by our team.', {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const response = await fetch("http://localhost:4000/api/service", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token
          }
        });
        if (!response.ok) {

          return;
        }
        const data = await response.json();
        
        if (data.message) {
          setServices(data.services || []);
          
        } else if (data.error) {
          toast.error(data.error, {
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
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#FF5300" }}>Your order</h2>
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="service-list" style={{ padding: "20px" }}>
          {services.length > 0 ? (
            services.map((service, index) => (
              <div
                key={index}
                className="service-item"
                style={{
                  marginBottom: "24px",
                  padding: "20px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                  fontFamily: "Segoe UI, sans-serif",
                  transition: "transform 0.2s",
                  cursor: "pointer",
                  maxWidth: "500px",
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.01)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <h3 style={{ marginBottom: "12px", color: "#333" }}>{service.service}</h3>
                <p style={{ margin: "6px 0" }}>
                  <strong style={{ color: "#666" }}>Status:</strong>
                  <span style={{ color: "#d97706", marginLeft: "5px" }}>Pending</span>
                </p>
                <p style={{ margin: "6px 0" }}>
                  <strong style={{ color: "#666" }}>Expected Date:</strong>
                  <span style={{ marginLeft: "5px" }}>{service.date}</span>
                </p>
                <p style={{ margin: "6px 0" }}>
                  <strong style={{ color: "#666" }}>Work Type:</strong>
                  <span style={{ marginLeft: "5px" }}>{service.worktype}</span>
                </p>
                <p style={{ margin: "6px 0" }}>
                  <strong style={{ color: "#666" }}>Ordered At:</strong>
                  <span style={{ marginLeft: "5px" }}>
                    {(() => {
                      const d = new Date(service.createdAt);
                      const day = String(d.getDate()).padStart(2, '0');
                      const month = String(d.getMonth() + 1).padStart(2, '0');
                      const year = d.getFullYear();
                      return `${day}-${month}-${year}`;
                    })()}
                  </span>
                </p>
                <p style={{ margin: "6px 0" }}>
                  <strong style={{ color: "#666" }}>Description:</strong>
                  <span style={{ marginLeft: "5px" }}>{service.description}</span>
                </p>
                <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
                  <button className='btn' style={{ backgroundColor: "#FF5300", fontWeight: "bold", color: "white" }} onClick={handleclick}>
                    Delete or mark as complete
                  </button>
                </div>
              </div>

            ))
          ) : (
            <div style={{ textAlign: "center", marginTop: "-120px", padding: "50px 0" }}>
              <img src="/data-error-8597339-6842609.gif" class="img-fluid" alt="..."></img>
              <h3 style={{ color: "#FF5300", marginTop: "20px" }}>No services found</h3>
              <p style={{ color: "#666" }}>It seems you haven't ordered any services yet.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Trackservice
