import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 hero-text'>
                <h1 className='text-center' style={{ color: '#FF5300', fontWeight: 'bold', fontSize: '50px'}}>Your one-stop solution for all your service needs</h1>
                <p className='text-center' style={{ color: '#333', fontSize: '20px', marginTop: '20px' }}>
                    Whether it's graphic design, website development and marketing, or any other service like that, we've got you covered!
                </p>
                <div className='text-center' style={{ marginTop: '30px' }}>
                    <Link to={'/dashboard'}>
                        <button className='btn btn-primary' style={{ backgroundColor: '#FF5300', borderColor: '#FF5300', padding: '10px 20px', fontSize: '18px',margin:"10px" }}>
                        Get Started
                    </button>
                     </Link>
                    <a href="#services">
                        <button className='btn btn-secondary' style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '18px',margin:"10px" }}>
                        Explore Services
                    </button>
                    </a>
                </div>
            </div>
            <div className='col-md-6' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',paddingLeft:"30px" }}>
                
                <img src="/logodesign-1076200_1920.png" className="img-fluid hero-img" alt="img" ></img>
            </div>
        </div>
        <hr />
        
      
    </div>
  )
}

export default Hero
