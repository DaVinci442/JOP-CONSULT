import React, { useState } from 'react';
import './header.css';
import Logo from '../../assets/logo.jpg';
import {FaRegUserCircle} from 'react-icons/fa'
import {MdAlternateEmail} from 'react-icons/md'
import {BsLock} from 'react-icons/bs'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc';
import Got from '../../assets/forgot.webp';
import { useNavigate, useNavigation } from 'react-router-dom';

const Header = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [loginForm, setLoginForm] = useState(false);
    const [forgotForm, setForgotForm] = useState(false);
    const [signForm, setSignForm] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);

    const navigate = useNavigate();

    const handleSignupForm = ()=>{
        setForgotForm(false);
        setLoginForm(false);
        setSignForm(true);
    }

    const handleLoginForm = ()=>{
        setForgotForm(false);
        setLoginForm(true);
        setSignForm(false);
    }

    const handleForgotForm = ()=>{
        setForgotForm(true);
        setLoginForm(false);
        setSignForm(false);
    }
    const handleCancelForm = ()=>{
        setForgotForm(false);
        setLoginForm(false);
        setSignForm(false);
    }

    const handleBusiness = ()=>{
        setSelectedTab('b');
        navigate('/businesses')
    }
    const handleServices = ()=>{
        setSelectedTab('s');
        navigate('/services')
    }
    const handleIndustries = ()=>{
        setSelectedTab('i');
        navigate('/industries')
    }
    const handleHome = ()=>{
        setSelectedTab('');
        navigate('/')
    }
    return (
        <header className='header' >
            <div onClick={handleHome} className="left">
                <img src={Logo} alt="" />
            </div>
            <div className="right">
                <div className="top">
                    <FaRegUserCircle onClick={handleLoginForm} className='uicon' />
                    <button>Contact Us</button>
                </div>
                <div className="down">
                    <button className={selectedTab === 'b' ? 'active':''} onClick={handleBusiness} >Your Business</button>
                    <button className={selectedTab === 's' ? 'active':''} onClick={handleServices} >Services</button>
                    <button className={selectedTab === 'i' ? 'active':''} onClick={handleIndustries} >Industries</button>
                    <button className={selectedTab === 'a' ? 'active':''} onClick={()=>setSelectedTab('a')} >About Us</button>
                </div>
            </div>

            {/* others */}
            {
                loginForm &&
                <div className="login">
                    <img src={Logo} alt="" />
                    <div className="inp">
                        <span className='head' >Login</span>
                        <div className="one">
                            <MdAlternateEmail className='licon' />
                            <input className='user' type="email"  />
                        </div>
                        <div className="one">
                            <BsLock className='licon' />
                            <input className='user' type={showPassword?'text':'password'}  />
                            {
                                showPassword ?
                                <AiOutlineEyeInvisible className='eye' onClick={()=>setShowPassword(false)} />
                                :
                                <AiOutlineEye className='eye' onClick={()=>setShowPassword(true)} />
                            }
                        </div>
                        <div className="links">
                            <div className="remember">
                                <input className='check' type='checkbox' checked={remember} onClick={()=>setRemember(!remember)} />
                                <span className="rem">Remember me</span>
                            </div>
                            <span className="forgotp" onClick={handleForgotForm} >Forgot Password?</span>
                        </div>

                        <div className="downdwon">
                            <span className="or">Or login with</span>
                            <FcGoogle className='google' />
                            <div className="butts">
                                <button className='cont' >Continue</button>
                                <button onClick={handleCancelForm} className='canc' >Cancel</button>
                            </div>
                            <div className="already">
                                <span className="span1">Don't have an account?</span>
                                <span onClick={handleSignupForm} className="forgotp">Sign up</span>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* forgot */}
                {
                    forgotForm &&
                    <div className="forgot">
                        <img src={Got} alt="" />
                        <div className="forgot-inp">
                            <span className='forgot-head' >Forgot Password?</span>
                            <span className='forgot-words' >Don't worry, it happens. <br /> Please enter the email associated to your account. </span>
                            <div className="one">
                                <MdAlternateEmail className='forgot-licon' />
                                <input className='forgot-user' type="email" placeholder='email ID'  />
                            </div>

                            <div className="forgot-downdwon">
                                <div className="forgot-butts">
                                    <button className='cont' >Submit</button>
                                    <button onClick={handleCancelForm} className='canc' >Cancel</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                }


                {
                    signForm &&
                    <div className="signup">
                        <div className="sign-top">
                            <div className="btop">
                                <span className="sign-head">Sign up</span>
                                <img src={Logo} alt="" />
                            </div>
                            <div className="google1">
                                <FcGoogle className='google2' />
                                <span className="google-title">Sign up with Google</span>
                            </div>
                        </div>

                        <div className="sign-middle">
                            <div className="one-sign">
                                <span className="name">Name*</span>
                                <input type="text" placeholder='Enter your name' />
                            </div>
                            <div className="one-sign">
                                <span className="name">Email*</span>
                                <input type="email" placeholder='Enter your email' />
                            </div>
                            <div className="one-sign">
                                <span className="name">Password*</span>
                                <input type="password" placeholder='Enter your password' />
                            </div>
                        </div>

                        <div className="sign-down">
                            <span className="sign-rem">Read <span className="sign-forgot">Terms of Service and Privacy Policy</span> </span>
                            <span className="sign-rem">Already a member? <span onClick={handleLoginForm} className="sign-forgot">Login</span> </span>
                            <div className="forgot-downdwon">
                                <div className="forgot-butts">
                                    <button className='cont' >Sign Up</button>
                                    <button onClick={handleCancelForm} className='canc' >Cancel</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                }

        </header>
    )
}

export default Header
