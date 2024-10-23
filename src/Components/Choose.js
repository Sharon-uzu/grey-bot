import React from 'react'
import img from '../Asset/Premium Photo _ Telegram sign 3d rendering abstract look dark realistic iconic background with a podium stage (1).jpeg'
import { FaSun, FaReceipt, FaPhone} from "react-icons/fa";
import { GoSun } from "react-icons/go";

const Choose = () => {
  return (
    // <div>
    //     <div className="service why">

    //         <h1>Why Choose Zipha Tech?</h1>

           

    //         <div className="serv-r">

    //             <div className="serv1">
    //                 <div className="text">
    //                     <h3>Expert Support</h3>
    //                     <p>Our team of experts is available 24/7 to assist you with any queries or concerns.</p>
    //                 </div>
    //                 <span style={{backgroundColor:'#71f1f5'}}>
    //                     <GoSun className='s-i' style={{color:'#000'}}/>
    //                 </span>
    //             </div>

    //             <div className="serv1">
    //                 <div className="text">
    //                     <h3>Customizable Solutions</h3>
    //                     <p>We tailor our automation solutions to meet your unique business needs.</p>
    //                 </div>
    //                 <span style={{backgroundColor:'#03103f'}}>
    //                     <FaReceipt className='s-i'/>
    //                 </span>
    //             </div>


    //             <div className="serv1">
    //                 <div className="text">
    //                     <h3>Proven Track Record</h3>
    //                     <p>Our bots have successfully automated numerous Forex trading businesses and Telegram groups.</p>
    //                 </div>
    //                 <span>
    //                     <FaPhone className='s-i'/>
    //                 </span>
    //             </div>

    //         </div>

    //         <div className="serv-l">
    //             <img src={img} alt="" />
    //         </div>


    //     </div>
    // </div>


    <div className='pricing choose'>
        <h2>Why Choose Zipha Tech?</h2>

        <div className="price">
            <div className="price1">
                <div className='cnt'>
                <div className='circle'><h1>1</h1></div>
                    <h2>Expert Support</h2>
                    <p>Our team of experts is available 24/7 to assist you with any queries or concerns.</p>

                    
                </div>
            </div>

            <div className="price1">
                <div className='cnt'>
                <div className='circle'><h1>2</h1></div>
                    <h2>Customizable Solutions</h2>
                    <p>We tailor our automation solutions to meet your unique business needs.</p>

                </div>
            </div>


            <div className="price1">
                <div className='cnt'>
                    <div className='circle'><h1>3</h1></div>
                    <h2>Proven Track Record</h2>
                    <p>Our bots have successfully automated numerous Forex trading businesses and Telegram groups.</p>
                    
                </div>
            </div>


        </div>
    </div>
  )
}

export default Choose