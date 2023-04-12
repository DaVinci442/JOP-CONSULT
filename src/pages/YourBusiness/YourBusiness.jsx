import React from 'react';
import './yourBusiness.css';
import Six from '../../assets/6.jpg'
import {AiTwotonePhone} from 'react-icons/ai'
import {HiUserGroup} from 'react-icons/hi'
import {MdOutlineContactEmergency, MdOutlineEventNote} from 'react-icons/md'

const YourBusiness = () => {
    return (
        <div className='business' >
            <div className="top">
                <img src={Six} alt="" />
                <h2>Your Business</h2>
            </div>
            <div className="middle">
                <div className="container">
                    <span className="text">
                        Whatever your issue, industry, or stage of development, we promise to bring expertise, agility and understanding to deliver the answer and experience that is right for you. Read more to find out how we can help you
                    </span>
                    <div className="one">
                        <span className="title">Large & listed companies</span>
                        <span className="inner">
                            We are an integrated, international and multicultural partnership with the scale to serve global clients while remaining agile and personal in our approach. The breadth and depth of our expertise and service offering allows us to support leaders across various different business functions. Learn more about the services we offer to support your business function.
                        </span>
                        <button>Read more</button>
                    </div>

                    <div className="one">
                        <span className="title">Privately owned businesses</span>
                        <span className="inner">
                            We believe society is built on the success of businesses like yours. That’s why we are dedicated to helping make the dreams you have a reality. We work with over 50,000 privately owned businesses worldwide – from start-ups to mature multinationals and family businesses – giving them confidence in their organisations and helping them achieve their ambitions.
                        </span>
                        <button>Read more</button>
                    </div>

                    <div className="one">
                        <span className="title">Public and not-for-profit organisations</span>
                        <span className="inner">
                            In these challenging times, the pressure on those delivering public services is intense. Our international expertise, technical excellence and local understanding drive answers that are tailored to the unique circumstances you face. We will always be accountable, take responsibility, and seek to do the right thing
                        </span>
                        <button>Read more</button>
                    </div>

                    <div className="one">
                        <span className="title">Private individuals</span>
                        <span className="inner">
                            We understand your goals and concerns are unique, and that you have your own personal reasons for doing what you do. Your Mazars advisor will be your sounding board, answering your sensitive questions, making the complex simple, and ensuring you have the information you need to make the right decisions for your future.
                        </span>
                        <button>Read more</button>
                    </div>
                </div>
            </div>
            <div className="down">
                <div className="item">
                    <AiTwotonePhone className='icon' />
                    <span className="call">+233 201561744</span>
                </div>
                <div className="item">
                    <HiUserGroup className='icon' />
                    <span className="call">+233 201561744</span>
                </div>
                <div className="item">
                    <MdOutlineEventNote className='icon' />
                    <span className="call">+233 201561744</span>
                </div>
                <div className="item">
                    <MdOutlineContactEmergency className='icon' />
                    <span className="call">+233 201561744</span>
                </div>
            </div>
        </div>
    )
}

export default YourBusiness
