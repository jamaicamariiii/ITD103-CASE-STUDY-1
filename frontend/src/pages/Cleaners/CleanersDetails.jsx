import React, { useState } from "react";
import cleanerImg from "../../assets/images/cleaner2.png";
import starIcon from "../../assets/images/Star.png.jpg";
import CleanersAbout from "./CleanersAbout";
import Feedback from "./Feedback"; 
import SidePanel from "./SidePanel";


const CleanersDetails = () => {
    const [tab, setTab] = useState('about');

    return (
        <section>
            <div className="max-w-[1170px] px-5 mx-auto">
                <div className="grid md:grid-cols-3 gap-[50px]">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-5">
                            <figure className="max-w-[300px] max-h-[300px]">
                                <img src={cleanerImg} alt="" className="w-full" />
                            </figure>

                            <div>
                                <span className="bg-[#CCFOF3] text-irisBlueColor py-1 px-6 lg:py-3 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">General Cleaners</span>
                                <h3 className="text-headingColor text-[22px] leading-9 mt-1 font-bold">Jack and Jill</h3>
                                <div className="flex items-center gap-[6px] mt-1">
                                    <span className="flex items-center gap-[6px] text[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                                        <img src={starIcon} alt=""/> 4.8
                                    </span>
                                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">(272)</span>
                                </div>

                                <p className="text__para text-[14px] md:text-[15px] lg:max-w-[390px]">
                                    Highly skilled general cleaners.
                                </p>
                            </div>
                        </div>

                        <div className="mt-[50px] border-b border-solid border-[#0066FF34]">
                            <button onClick={() => setTab('about')} 
                                className={`${tab === 'about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                                About
                            </button>
                               
                            <button onClick={() => setTab('feedback')}
                                className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                                Feedback
                            </button>
                        </div>

                        <div className="mt-[50px]">
                            {
                                tab==='about' && <CleanersAbout/>
                            }
                            {
                                tab==='feedback' && <Feedback/>
                            }
                        </div>
                    </div>
                    <div>
                        <SidePanel />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CleanersDetails;
