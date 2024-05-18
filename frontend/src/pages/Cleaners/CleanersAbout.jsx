import { formateDate } from "../../utils/formateDate";

const CleanersAbout = () => {
    return (
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">About
                    <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                        Jack and Jill
                    </span>
                </h3>
                <p className="text__para">
                    Highly skilled general cleaners known for their meticulous work and friendly service. 
                    With years of experience, they ensure every space they clean shines with perfection, earning them a stellar reputation among clients.
                </p>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Trainings</h3>

                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">  {formateDate("09-04-10")} - {formateDate("09-04-11")}</span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">Green Cleaning Certification</p>
                        </div>
                        <p className="text-[14px] leading-5 font-medium text-textColor">Technical Education and Skills Development Authority (TESDA)</p>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                            {formateDate("07-04-10")} - {formateDate("07-04-11")}
                                </span> 
                            <p className="text-[15px] leading-6 font-medium text-textColor">Green Cleaning Certification</p>
                        </div>
                        <p className="text-[14px] leading-5 font-medium text-textColor">Technical Education and Skills Development Authority (TESDA)</p>
                    </li>
                </ul>
            </div>


            <div className= "mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                    Experience</h3>

                    <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                        <li className="p-4 rounded bg-[#FFF9EA]">
                            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {formateDate("07-04-10")} - {formateDate("07-04-11")}
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">Head Cleaner</p>
                            <p className="text-[14px] leading-6 font-medium text-textColor">Green Cleaning Services</p>
                        </li>
                    </ul>
                    <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                        <li className="p-4 rounded bg-[#FFF9EA]">
                            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {formateDate("07-04-10")} - {formateDate("07-04-11")}
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">Head Cleaner</p>
                            <p className="text-[14px] leading-6 font-medium text-textColor">Green Cleaning Services</p>
                        </li>
                    </ul>

            </div>
        </div>
    );
};

export default CleanersAbout;
