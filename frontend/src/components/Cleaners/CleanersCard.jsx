// CleanersCard.jsx (Frontend)

import React from "react";
import { Link } from "react-router-dom";
import { BiArrowToRight } from "react-icons/bi";

const CleanersCard = ({ cleaners }) => { 
    const { name, avgRating, totalRating, photo, specialization, totalClients } = cleaners;

    return (
        <div className="p-3 lg:p-5 flex justify-center items-center flex-col text-center relative">
            <div>
                <img src={photo} className="w-full" alt=""/>
            </div>
            <h2 className="text-[18px] leading-3[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">{name}</h2>
            
            <div className="mt-2 lg:mt-4 flex items-center justify-between w-full">
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text[26px] lg:leading-7 font-semibold rounded">{specialization}</span>

                <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-6 lg: text-[16px] leading-7 font-semibold text-headingColor">
                        {avgRating}
                    </span>
                    <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">({totalRating})</span>
                </div>
            </div>

            <div className="mt-[18px] lg:mt-5">
                <Link to='/cleaners' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover: bg-primaryColor hover:border-none">
                    <BiArrowToRight className="group-hover:text-white w-6 h-5"/>
                </Link>
            </div>
        </div>
    );
};

export default CleanersCard;
