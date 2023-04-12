import React from 'react'
import One from '../../assets/1.jpg'
import Five from '../../assets/5.jpg'
import Four from '../../assets/4.jpg'
import './home.css';

const Home = () => {
    return (
        <div className='home' >
            <div className="top">
                <img src={One} alt="" />
                <h1>WELCOME TO JOP CONSULT</h1>
            </div>
            <div className="down">
                <div className="left">
                    <div className="lefttop">
                        <h2>WHAT WE DO</h2>
                        <div className="content">
                            <div className="up">
                                <div className="titles">
                                    <span className="active">Your Business</span>
                                    <span className="inactive">Industries</span>
                                </div>
                                <span className="words">
                                Whatever your industry, issue, state of business, we promise to bring expertise
                                agility and understanding to deliver the answer and experience that is right for you 
                                </span>
                            </div>
                            <div className="down-down">
                                <button className="leftt">Large & Listed companies</button>
                                <button className="rightt">Private Individuals</button>
                            </div>
                        </div>
                    </div>
                    <div className="leftdown">
                        <h1>INDUSTRIES</h1>
                        <img src={Five} alt="" />
                    </div>
                </div>

                <div className="right">
                    <img src={Four} alt="" />
                    <h5>
                        We pride ourselves on our independent perspective: one that balances local and global, business and society, in a different way. We provide insights on the future of our profession and its role in building a fair and prosperous world. Through our publications, we highlight and share our views on the major changes that will impact the lives and business models of our clients, as well as on the megatrends that will reshape our world.
                    </h5>
                    <button className="read">Read more</button>
                </div>
            </div>
        </div>
    )
}

export default Home
