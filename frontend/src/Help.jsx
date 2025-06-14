import React from 'react';
import {  FaPhoneAlt, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import { MdSupportAgent } from "react-icons/md";

const Help = () => {
  return (
    <div style={{ position: "relative" }}>
      <h3 style={{ textAlign: "center", color: "#FF5300", marginBottom: "30px" }}>
        Help & support
      </h3>
      <div style={{ position: "relative" }}>
        <div style={{
          height: "80px",
          width: "80px",
          borderRadius: "50%",
          backgroundColor: "#FFEDE6",
          position: "relative",
          left: "38%",
          top: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "60px",
          color: "#FF5300"
        }}>
          <MdSupportAgent />
        </div>
        <div style={{
          width: "95%",
          backgroundColor: "#FF5300",
          color: "white",
          borderRadius: "0.8rem",
          padding: '60px 10px 20px 10px'
        }}>
          <p style={{ textAlign: "center" }}>
            <FaPhoneAlt style={{ marginRight: 8 }} />
            <span style={{ fontWeight: "bold" }}>Contact us at : 9999999110</span>
            <br /><br />
            <FaEnvelope style={{ marginRight: 8 }} />
            <span>support@example.com</span>
            <br /><br />
            <FaQuestionCircle style={{ marginRight: 8 }} />
            We are available 24 hours to respond to your doubts and solve your problems regarding your ordered services.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Help;