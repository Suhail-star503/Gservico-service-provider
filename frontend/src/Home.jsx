import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Signup from './signup';
const services = [
    {
        title: "Web Development",
        description: "All type of web development services available whether it's frontend development, backend development or full stack development for your business needs.",
        icon: "🌐"
    },
    
    {
        title: "Graphic Design",
        description: "Creative designs for branding, marketing, and more.",
        
        icon: "🎨"
    },
    {
        title: "Digital Marketing",
        description: "Grow your brand with SEO and social media marketing.",
        icon: "📈"
    },
    {
        title: "Thumbnail Design",
        description: "Eye-catching thumbnails for YouTube and other platforms.",
        icon: "🖼️"
        
    },
    {
        title: "Content Writing",
        description: "Engaging content for blogs, websites, and social media.",
        icon: "✍️"
    },
    
    
    {
        title: "Video Editing",
        description: "Professional video editing services for all your needs.",
        icon: "🎥"
    }
]

const Home = () => {
    return (
        <div>
            <Hero />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center' style={{ marginTop: '50px' }}>
                        <h2 style={{ color: '#FF5300', fontWeight: 'bold', fontSize: '36px' }}>About us</h2>
                        <p style={{ color: '#333', fontSize: '20px', marginTop: '20px' }}>
                            We offer a wide range of best services to meet your needs. We have skilled and experienced team that can provide you the best service. Explore our offerings and find the perfect solution for you!
                        </p>
                    </div>
                </div>

                <h3 style={{ marginTop: "25px", textAlign: "center",marginBottom:"20px"}} id='services'>Services<span role="img" aria-label="announcement" style={{ fontSize: 32 }}>📢</span></h3>

                <div className="row justify-content-center" style={{ gap: "10px" }}>
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="col-12 col-md-5 col-lg-3 d-flex align-items-stretch service-card"
                            style={{ margin: "10px", padding: 0, minWidth: 270, maxWidth: 320 }}
                        >
                            <div className="card shadow-sm w-100" style={{ borderRadius: 18 }}>
                                <div className="card-body text-center">
                                    <div style={{
                                        fontSize: 48,
                                        marginBottom: 18
                                    }}>{service.icon}</div>
                                    <h5 className="card-title" style={{ fontWeight: "bold", color: "#FF5300" }}>{service.title}</h5>
                                    <p className="card-text" style={{ color: "#333" }}>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <h2 style={{textAlign:"center",color:"#FF5300",marginTop:"40px",marginBottom:"30px"}}>How to start <BsPersonWorkspace/></h2>
                    <div className="col col-10" style={{margin:'auto',height:"auto",padding:"30px 10px",borderRadius:"0.8rem",backgroundColor:"#FF5300",color:"white"}}>
                        <p style={{textAlign:"center"}}>To start using our services, first you need to connect with us by signup. If you have any question you can get in touch with us by sending mail or through whatsApp. Our team is here to assist you every step of the way!</p>
                        
                    </div>
                    <div className="col col-12">
                       <div style={{width:"50px",height:"50px",margin:"10px auto",display:"flex",justifyContent:"center",alignItems:"center"}}><FaArrowDown style={{fontSize:"25px",color:"#FF5300"}}/></div>
                    </div>
                    <div className="col col-10" style={{margin:'auto',height:"auto",padding:"30px 10px",borderRadius:"0.8rem",backgroundColor:"#FF5300",color:"white"}}>
                        <p style={{textAlign:"center"}}>After signup, we will connect with you by phone to answer all your questions regarding our services, pricing, and more before moving further.</p>
                        
                    </div>
                    <div className="col col-12">
                       <div style={{width:"50px",height:"50px",margin:"10px auto",display:"flex",justifyContent:"center",alignItems:"center"}}><FaArrowDown style={{fontSize:"25px",color:"#FF5300"}}/></div>
                    </div>
                    <div className="col col-10" style={{margin:'auto',height:"auto",padding:"30px 10px",borderRadius:"0.8rem",backgroundColor:"#FF5300",color:"white"}}>
                        <p style={{textAlign:"center"}}>After logging in, you will have access to your dashboard, where you can purchase our various services. You will also receive contact details for our support and help team, so you can easily resolve any questions or technical issues.  </p>
                        
                    </div>
                </div>
                <hr style={{
                    border: "none",
                    borderTop: "4px solid #FF5300",
                    width: "120px",
                
                marginLeft:"50px",
                position: "relative",
                top: "50px"

                }} />
                <div className="row" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    
                    <div className="col-10 col-lg-8 " style={{ marginTop: '50px' }}>
                        <h2 style={{ color: '#FF5300', fontWeight: 'bold', fontSize: '36px' }}>The only platform you need to get best services</h2>
                        
                    </div>
                    <div className="col-10 col-lg-3 text-center" style={{ marginTop: '50px' }}>
                        
                        <Link to="/signup" className="btn" style={{ backgroundColor: "#FF5300", borderRadius: "50px", padding: "10px 20px", fontSize: "18px", fontWeight: "bold",color: "white", textDecoration: "none" }}>
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
            
          
            <div className="container" style={{ marginTop: "70px", marginBottom: "40px" }}>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div className="card shadow" style={{ borderRadius: 18, padding: "32px 24px", background: "#fff" }}>
                            <h2 className="text-center" style={{ color: "#FF5300", fontWeight: "bold", marginBottom: 18 }}>
                                Contact Us
                            </h2>
                            <p className="text-center" style={{ color: "#555", marginBottom: 32 }}>
                                Have a question or want to work with us? Fill out the form, WhatsApp or mail and our team will get back to you soon!
                            </p>
                            <Signup />
                            <div className="row mt-4 text-center" style={{ color: "#FF5300" }}>
                                <div className="col-md-4 mb-2">
                                    <span role="img" aria-label="phone" style={{ fontSize: 30 }}><IoLogoWhatsapp style={{color:"green"}}/></span>
                                    <div style={{ color: "#333" }}>+91 8766311237</div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <span role="img" aria-label="email" style={{ fontSize: 24 }}>✉️</span>
                                    <div style={{ color: "#333" }}>info@gservico.com</div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <span role="img" aria-label="location" style={{ fontSize: 24 }}><FaLocationDot/></span>
                                    <div style={{ color: "#333" }}>Delhi, India</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />


            
        </div>
    )
}

export default Home