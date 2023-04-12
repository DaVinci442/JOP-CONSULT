import React from 'react';
import './services.css';
import Two from '../../assets/2.jpg'
import {AiTwotonePhone} from 'react-icons/ai'
import {HiUserGroup} from 'react-icons/hi'
import {IoMdArrowDropdown} from 'react-icons/io'
import {MdOutlineContactEmergency, MdOutlineEventNote} from 'react-icons/md'

const Services = () => {
    return (
        <div className='services' >
            <div className="top">
                <img src={Two} alt="" />
                <h2>Services</h2>
            </div>
            <div className="middle">
                <div className="container">
                    <span className="text">
                        Our clients’ long-term sustainable development and growth is our top priority. We provide a comprehensive and flexible range of services to our clients, specialising in audit, accountancy, advisory, tax and legal services. Our integrated approach is designed to leverage a global talent pool and serve organisations of all sizes, from SMEs to the largest multinational corporations. In order to provide our clients with the best, most relevant services, we continuously invest in developing strong sectoral expertise as well as the technological, scientific and soft skills that will shape professional services in the near future.
                    </span>

                    <div className="one">
                        <span className="title">Audit & assurance</span>
                        <IoMdArrowDropdown className='downIcon' />
                    </div>
                    <div className="two">
                        <span className="title">Consulting</span>
                        <IoMdArrowDropdown className='downIcon' />
                    </div>
                    <div className="three">
                        <span className="title">Doing business abroad</span>
                        <IoMdArrowDropdown className='downIcon' />
                    </div>
                    <div className="four">
                        <span className="title">Financial advisory</span>
                        <IoMdArrowDropdown className='downIcon' />
                    </div>
                    <div className="five">
                        <span className="title">Privately owned business services</span>
                        <IoMdArrowDropdown className='downIcon' />
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

export default Services
