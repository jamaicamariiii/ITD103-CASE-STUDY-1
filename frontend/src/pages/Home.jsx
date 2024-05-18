import React from "react";
import heroImg01 from "../assets/images/greenclean.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import videoIcon from "../assets/images/video-icon.png";
import { Link } from "react-router-dom";
import { BiArrowToRight } from "react-icons/bi";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServicesList";
import CleanersList from "../components/Cleaners/CleanersList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";



const Home = () => {
    return (
        <>
            {/*------hero section---- */}
            <>
                <section className="hero__section pt-[60px] 2xl:h-[800px]">
                    <div className="container">
                        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                            {/*-----hero content----- */}
                            <div>
                                <div className="lg:w-[570px]">
                                    <h1 className="text-[36px] leading-[46px] text-headingColor font-bold font[800] md:text-[60px] md:leading-[70px]">Leading the charge for eco-friendly cleaning solutions.</h1>
                                    <p className="text__para">Green Cleaning tranforms cleanliness with sustainable solutions. Our eco-friendly services prioritize environmental responsibility, ensuring a healthier, greener clean for your home. Say goodbye to harmful chemicals and hello to a safer, more sustainable way of cleaning with Green Cleaning.</p>

                                    <button className="btn">Request an Appointment</button>
                                </div>
                                {/*----hero counter---- */}
                                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                                    <div>
                                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">20+</h2>
                                        <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                                        <p className="text__para">Years of Experience</p>
                                    </div>
                                    <div>
                                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">10+</h2>
                                        <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                                        <p className="text__para">Cleaning Services</p>
                                    </div>
                                    <div>
                                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                                        <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                                        <p className="text__para">Customer Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                            {/*----hero content---- */}

                            <div className="flex gap-[30px] justify-end">
                                <div>
                                    <img className="w-full" src={heroImg01} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*------hero section---- */}
                <section>
                    <div className="container">
                        <div className="lg:w-[470px] mx-auto">
                            <h2 className="heading text-center">Providing the best cleaning services</h2>
                            <p className='text__para text-center'>Experience a fresh, sustainable approach to cleaning with Green Clean.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                            {/*-------------------------------------*/}
                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center"><img src={icon01} alt="" /></div>

                                <div className="mt-[30px]">
                                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Cleaner</h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Our cleaners are dedicated professionals committed to delivering exceptional service with eco-friendly practices.</p>

                                    <Link to='/cleaners' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover: bg-primaryColor hover:border-none">
                                        <BiArrowToRight className="group-hover:text-white w-6 h-5" />
                                    </Link>
                                </div>
                            </div>
                            {/*---------------------------------------------*/ }
                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center"><img src={icon02} alt="" /></div>

                                <div className="mt-[30px]">
                                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find Location</h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Know our hotlines to easily reach out and discover where to contact us for exceptional eco-friendly cleaning services.</p>

                                    <Link to='/services' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover: bg-primaryColor hover:border-none">
                                        <BiArrowToRight className="group-hover:text-white w-6 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/**------------------------------ */}
                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center"><img src={icon03} alt="" /></div>

                                <div className="mt-[30px]">
                                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book Appointment</h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Book an appointment with us for exceptional eco-friendly cleaning services.</p>

                                    <Link to='/cleaners' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover: bg-primaryColor hover:border-none">
                                        <BiArrowToRight className="group-hover:text-white w-6 h-5" />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <About />
                {/*------services section------- */}
                <section>
                    <div className="container>">
                        <div className="xl:w-[470px] mx-auto">
                            <h2 className="heading text-center">Our Green Cleaning Services</h2>
                            <p className="text__para text-center">Discover our eco-friendly green cleaning services!</p>
                        </div>

                        <ServiceList />

                    </div>
                </section>
                {/*------services section end------- */}

                {/*-------feature section----------*/}
                <section>
                    <div className="container">
                        <div className="flex items-center justify-between flex-col lg:flex-row">
                            {/*------feature content------ */}
                            <div className="xl:w-[670px]">
                                <h2 className="heading">Get Virtual Cleaning Training <br /> anytime!</h2>

                                <ul className="pl-4">
                                    <li className="text__para mb-2">1. Schedule the appointment directly.</li>
                                    <li className="text__para mb-2">2. Search for a cleaner here, and contact them directly.</li>
                                    <li className="text__para mb-2">3. View our cleaners who are accepting new clients by using the online scheduling tool to select an appointment time.</li>
                                </ul>
                                <Link to='/'>
                                    <button className="btn">Learn More</button>
                                </Link>
                            </div>

                            {/*------feature img------- */}
                            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt">
                                <img src={featureImg} className="w-3/4" alt="" />

                                <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] d:left-5 z-20 p-z pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                                    <div className="flex items-center justify between">
                                        <div className="flex items-center gap[6px] lg:gap-3">
                                            <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text headingColor font-[600]">Tue, 24 </p>
                                            <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text textColor font-[400]"> 10:00AM </p>
                                        </div>
                                        <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                                            <img src={videoIcon} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*-------feature section end----------*/}


                {/*----our great cleaners----*/}
                <section>
                    <div className="container">
                        <div className="xl:w-[470px] mx-auto">
                            <h2 className="heading text-center">Our Green Cleaners</h2>
                            <p className="text__para text-center">Discover our eco-friendly green cleaners!</p>
                        </div>

                        <CleanersList />

                    </div>
                </section>
                {/*----our great cleaners end----*/}

                {/*------faq section--------*/}

                <section>
                    <div className="container">
                        <div className="flex justify-between gap-[50px] lg:gap-0">
                            <div className="w-full md:w-1/2 relative">
                                <img src={faqImg} alt="" className="absolute bottom-10px left-20px" style={{ maxWidth: "100%" }} />
                            </div>

                            <div className="w-full md:w-1/2">
                                <h2 className="heading">Frequently asked questions</h2>
                                <FaqList />
                            </div>
                        </div>
                    </div>
                </section>

                {/*------faq section end--------*/}

                {/*------testimonial section end--------*/}
                <section>
                    <div className="container">
                        <div className="xl:w-[470px] mx-auto">
                            <h2 className="heading text-center">What our clients say</h2>
                            <p className="text__para text-center">See here for green cleaning services ratings!</p>
                        </div>
                      <Testimonial />
                    </div>
                </section>
                {/*------testimonial section end--------*/}
            </>
        </>
    );
};

export default Home;
