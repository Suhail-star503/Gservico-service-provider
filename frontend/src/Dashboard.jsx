import React, { useState } from 'react';
import './Dashboard.css'; // You'll create this for styles
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import {Link} from "react-router-dom";
import Buyservice from './Buyservice';
import Trackservice from './Trackservice';

import Help from './Help';
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [component,setcomponent] = useState("buyservice");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-container" style={{ padding: '100px ' }}>
      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div style={{ width: "100%", textAlign: "center",marginBottom:"50px" }}> <span style={{ color: "#FF5300", display: "flex" }}><img src="/logo4-removebg-preview.png" alt="Logo" width="40" height="30" style={{ position: "relative", top: "5px" }} /> <p style={{ fontSize: "24px", fontWeight: "bold" }}>Gservico</p></span> </div>
        <ul style={{listStyleType:"none"}}>
          <li style={{height:"auto",padding:"8px",width:"100%",backgroundColor:"#FFEDE6",borderRadius:"0.8rem",marginLeft:"-24px",display:"flex",justifyContent:"center",marginBottom:"15px",cursor:"pointer"}}>
             <span className="text" style={{color:"#FF5300",fontWeight:"bold"}}onClick={()=>setcomponent('buyservice')}>Buy service</span>
          </li>
          <li style={{height:"auto",padding:"8px",width:"100%",backgroundColor:"#FFEDE6",borderRadius:"0.8rem",marginLeft:"-24px",display:"flex",justifyContent:"center",marginBottom:"15px",cursor:"pointer"}}>
            <span className="text" style={{color:"#FF5300",fontWeight:"bold"}}onClick={()=>setcomponent('trackservice')}>Your order</span>
          </li>
          
          <li style={{height:"auto",padding:"8px",width:"100%",backgroundColor:"#FFEDE6",borderRadius:"0.8rem",marginLeft:"-24px",display:"flex",justifyContent:"center",marginBottom:"15px",cursor:"pointer"}}>
            <span className="text" style={{color:"#FF5300",fontWeight:"bold"}}onClick={()=>setcomponent('help')}>Help & support</span>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <button onClick={toggleSidebar} className="toggle-button" style={{ backgroundColor: "transparent", border: 'none', position: 'relative', top: '0px', left: '0px' }}>
          {sidebarOpen ? <FaAnglesLeft style={{ fontSize: '24px', color: '#FF5300' }} /> : <FaAnglesRight style={{ fontSize: '24px', color: '#FF5300' }} />}

        </button>
        <div className="content">
          {component === "buyservice" && <Buyservice/>}
          {component === "trackservice" && <Trackservice/>}
          
          {component === "help" && <Help/>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
