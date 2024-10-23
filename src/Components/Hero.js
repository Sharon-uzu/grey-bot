import React from 'react'
import img from '../Asset/Robot_PNG_-_Free_Download-removebg-preview.png'

const Hero = () => {
  return (
    <div>
        <div className="hero">
            <div className="bg"></div>
            

            <section>

                <div className="text">
                    <h2>Welcome to Zipha Tech</h2>
                    <p>Your One-Stop Shop for Telegram Bot Automation Solutions.</p>
                    <a href="#about"><button>About Us</button></a>
                </div>

                <div className="img">
                    <img src={img} alt="" />
                </div>

            </section>
        </div>
    </div>
  )
}

export default Hero