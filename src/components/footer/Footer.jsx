import React from 'react';
import './footer.css'
import {BsTwitter, BsFacebook, BsYoutube, BsLinkedin, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='footer' >
      <div className="top">
        <span className="follow">Follow us</span>
        <div className="socials">
          <BsTwitter className='icon' />
          <BsFacebook className='icon' />
          <BsYoutube className='icon' />
          <BsLinkedin className='icon' />
          <BsInstagram className='icon' />
        </div>
      </div>
      <div className="down">
        
        <div className="one">
          <span className="title">Your Business</span>
          <span className="item">Large & listed companies</span>
          <span className="item">Public and non-for-profit organisations </span>
          <span className="item">Private Individauls </span>
        </div>

        <div className="one">
          <span className="title">Services</span>
          <span className="item">Audit & assurance</span>
          <span className="item">Consulting</span>
          <span className="item">Doing business abroad</span>
          <span className="item">Financial advisory</span>
          <span className="item">Global compliance and reporting</span>
          <span className="item">Legal</span>
          <span className="item">Outsourcing</span>
          <span className="item">Privately owned business services</span>
          <span className="item">Substainability</span>
          <span className="item">Tax</span>
        </div>

        <div className="one">
          <span className="title">Industries</span>
          <span className="item">Consumer</span>
          <span className="item">Energy, infrastructure & environment </span>
          <span className="item">Financial services </span>
          <span className="item">Healthcare & life sciences </span>
          <span className="item">Industrials</span>
          <span className="item">Public & social sector</span>
          <span className="item">Real estate</span>
          <span className="item">Technology, media & telecommunications</span>
          <span className="item">Transport & logistics</span>
        </div>

        <div className="one">
          <span className="title">Insights</span>
          <span className="item">Myths preventing the progression of women</span>
          <span className="item">Mazars C-suite barometer </span>
          <span className="item">Let's talk: expert blogs </span>
          <span className="item">The future of audit: market view </span>
          <span className="item">Latest insights</span>
          <span className="item">CEO blog</span>
          <span className="item">Trust Equation</span>
          <span className="item">Shaping the agenda</span>
          <span className="item">Technical documentation</span>
        </div>

        <div className="one">
          <span className="title">About us</span>
          <span className="item">Our story: growing with purpose</span>
          <span className="item">Mazars at a glance </span>
          <span className="item">Diversity and inclusion</span>
          <span className="item">Our brand identity</span>
          <span className="item">Mazars around the world</span>
        </div>

        
      </div>
    </footer>
  )
}

export default Footer