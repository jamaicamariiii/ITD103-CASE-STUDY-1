import React, { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from "./FeedbackForm";

const Feedback = () => {

    const [showFeedbackForm, setShowFeedbackForm] = useState(false)
    return (
        <div>
            <div className="mb-[50px]">
                <h4 className="text-[20] leading-[30px] font-bold text-headingColor mb-[30px]">All Reviews (272)</h4>

                <div className="flex justify-between gap-10 mb-[30px]">
                    <div className="flex gap-3 items-start"> {/* Added items-start for aligning items at the start */}
                        <figure className="w-10 h-10 rounded-full">
                            <img className="w=full" src={avatar} alt=""/>
                        </figure>
                        <div>
                            <h5 className="text-16px leading-6 text-primaryColor font-bold">
                                Json Bayn
                            </h5>
                            <p className="text-[14px] leading-6 text-textColor">
                                {formateDate("07-20-22")}
                            </p>
                            <div className="flex gap-1">
                        {[...Array(5).keys()].map((_, index) => <AiFillStar key={index} color="#0067FF" />)}
                    </div>
                    <p className="text__para mt-3 font-medium text-[15px]">
                    Good service! Left no dust in my home. Will contact again hehe.
                </p>
                        </div>
                    </div>
                </div>
            </div>

           {!showFeedbackForm &&  <div className="text-center">
                <button className="btn" onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
            </div>}

{showFeedbackForm && <FeedbackForm />}
        </div>
    );
};

export default Feedback;
