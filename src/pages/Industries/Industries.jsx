import React from 'react';
import './industries.css';
import Three from '../../assets/3.jpg'
import {AiTwotonePhone} from 'react-icons/ai'
import {HiUserGroup} from 'react-icons/hi'
import {IoMdArrowDropdown} from 'react-icons/io'
import {MdOutlineContactEmergency, MdOutlineEventNote} from 'react-icons/md'

const Industries = () => {
    return (
        <div className='industries' >
            <div className="top">
                <img src={Three} alt="" />
                <h2>Industries</h2>
            </div>
            <div className="middle">
                <div className="container">
                    <span className="text">
                        A deep understanding of sector-specific environments, issues, and trends is critical to delivering relevant services to our clients, to anticipate and address evolving needs, as well as to capture opportunities. We put a strong focus on developing our sectoral expertise through our international sector communities. These bring together our experts from all corners of the globe who combine deep knowledge of specific sectors and understanding of local contexts and cultures with international perspective.
                    </span>

                    <div className="one">
                        <span className="title">Consumer</span>
                        <IoMdArrowDropdown className='downIcon' />
                    </div>
                    <div className="two">
                        <span className="title">Energy, infrastructure & environment</span>
                        <IoMdArrowDropdown className='downIcon' />
                    </div>
                    <div className="three">
                        <span className="title">Financial services</span>
                        <IoMdArrowDropdown className='downIcon' />
                    </div>
                    <div className="four">
                        <span className="title">Industrials</span>
                        <IoMdArrowDropdown className='downIcon' />
                    </div>
                    <div className="five">
                        <span className="title">Public & social sector</span>
                        <IoMdArrowDropdown className='downIcon' />
                    </div>
                </div>
            </div>
            <div className="down">
                <sapn className='contactus' >Contact Us</sapn>
                <div className="downdown">
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
        </div>
    )
}

export default Industries
