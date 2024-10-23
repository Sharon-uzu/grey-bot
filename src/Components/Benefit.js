import React from 'react'
import img from '../Asset/9 Most Helpful Telegram Bots for Channel Admins.jpeg'
import {FaReceipt, FaPhone} from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { RiFolderReduceFill } from "react-icons/ri";
import { MdAddChart } from "react-icons/md";
import { AiFillSecurityScan } from "react-icons/ai";




const Benefit = () => {
  return (
    <div>
        <div className="service benefits">

            <h1>Benefits</h1>
            <p className='zipha'>By choosing <b>Zipha Tech,</b> businesses can:</p>

            {/* <div className="serv-l">
                <img src={img} alt="" />
            </div> */}

            <div className="serv-r">

                <div className="serv1">
                    <div className="text">
                        <h3>Reduce Stress</h3>
                        <p>Minimize the burden of customer inquiries and messages.</p>
                    </div>
                    <span style={{backgroundColor:'#71f1f5'}}>
                        <RiFolderReduceFill  className='s-i' style={{color:'#000'}}/>
                    </span>
                </div>

                <div className="serv1">
                    <div className="text">
                        <h3>Enhance Customer Experience</h3>
                        <p>Provide 24/7 support and self-service options.</p>
                    </div>
                    <span style={{backgroundColor:'#03103f'}}>
                        <FaUserGroup className='s-i'/>
                    </span>
                </div>


                <div className="serv1">
                    <div className="text">
                        <h3>Increase Efficiency</h3>
                        <p>Automate routine tasks and focus on core business activities.</p>
                    </div>
                    <span>
                        <MdAddChart className='s-i'/>
                    </span>
                </div>


                <div className="serv1">
                    <div className="text">
                        <h3>Improve Security</h3>
                        <p>Ensure secure payment processing and user data management.</p>
                    </div>
                    <span style={{backgroundColor:'#71f1f5'}}>
                        <AiFillSecurityScan className='s-i' style={{color:'#000'}}/>
                    </span>
                </div>

                <div className="serv1">
                    <div className="text">
                        <h3>Boost Customer Satisfaction</h3>
                        <p>Deliver personalized and responsive support.</p>
                    </div>
                    <span style={{backgroundColor:'#03103f'}}>
                        <FaUserGroup className='s-i'/>
                    </span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Benefit