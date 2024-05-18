import React from "react";
import { cleaners } from "../../assets/data/cleaners";
import CleanersCard from "./CleanersCard";

const CleanersList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-30px mt-30px lg:mt-55px">
            {cleaners.map((cleaner) =>
                <CleanersCard key={cleaner.id} cleaners={cleaner}/>
            )}
        </div>
    );
};

export default CleanersList;
