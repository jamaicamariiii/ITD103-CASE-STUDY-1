import React from "react";
import aboutImg from "../../assets/images/about.png";
import { Link } from 'react-router-dom';

const About = () => {
    return <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/*----- about img------- */}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src={aboutImg} alt=""/>
                </div>
                {/*----- about content----- */}
                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                    <h2 className="heading">Proud to be one of the nations best</h2>
                    <p className="text__para">Green Cleaning has proudly held the top spot in the Philippines for eco-friendly services for over 20 years. 
                    Our commitment to green practices ensures a healthier, safer, and more sustainable cleaning experience for our customers. 
                    With two decades of excellence, we continue to lead the industry in providing environmentally conscious cleaning solutions</p>

                  <p className="text__para mt-[30px]">We are striving to enhance our green cleaning practices, prioritizing eco-friendly solutions that promote a healthier environment.
                   Our ongoing commitment to sustainability drives us to innovate and continually improve our services, ensuring that every clean is not only effective but also 
                   environmentally responsible.</p>  

                   <Link to="/">
                    <button className="btn">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
};

export default About;
