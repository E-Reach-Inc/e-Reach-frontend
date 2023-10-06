import React from 'react'
import aboutUs from '../../assets/landingPageImage/aboutus2.json'
import ourService from '../../assets/landingPageImage/aboutus.json'
import Lottie from 'lottie-react'
import '../../styles/landingPage/landingPageAboutUs.css'


export const LandingPageAboutUs = () => {

    return(
        <div className="Main-container">
            <div className="container">
                <div className= "about-Image">
                    <Lottie animationData={aboutUs} />
                </div>
                <div className= "writeUp">
                    <p id= "about-us">About us</p>
                    <p id= "who-we-are">Who We Are
                        e-REACH is all about making healthcare better. We're a group of people who care deeply about helping doctors, nurses, and hospitals take care of patients.</p>

                    <p id= "our-story">Our Story</p>
                    <p id= "who-started">We started e-REACH because we saw that healthcare could be easier. We wanted to create a computer system that helps doctors and nurses keep track of patients' information quickly and safely.</p>

                    <p id= "what-we-promise">What We Promise</p>
                    <p id= "who-promise"> We promise to make healthcare simpler and less confusing.
                        We promise to keep your information safe and private.
                        We promise to make our computer system easy to use for everyone.
                        What We Want to Do
                        We want to work with hospitals and doctors to make healthcare better. Our goal is to help them take care of patients even better than they do now.</p>
                </div>
            </div>
            <div className= "ourService">
                <div className= "holder">
                    <p id= "our">Our Services</p>
                    <p id= "our-service">Electronic Health Records (EHR)</p>
                    <p id= "electronic">Revolutionize your practice with our state-of-the-art EHR system. Our user-friendly platform allows healthcare providers to manage patient records seamlessly, improve clinical workflows, and enhance patient engagement.</p>

                    <p id= "our-service">Data Security and Compliance</p>
                    <p id= "electronic">Protect your patients' sensitive information with our robust data security and compliance solutions. We help you navigate the complex regulatory landscape while maintaining the highest standards of data protection.</p>
                </div>
                <div className= "our-service-image">
                    <Lottie animationData={ourService} />
                </div>
            </div>
        </div>
    )
}