import { useState } from 'react';
import CleanersCard from "../../components/Cleaners/CleanersCard";
import { cleaners } from "../../assets/data/cleaners";
import Testimonial from "../../components/Testimonial/Testimonial";

const Cleaners = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCleaners, setFilteredCleaners] = useState(cleaners);

    // Function to handle search input change
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Function to handle search button click
    const handleSearch = () => {
        const filtered = cleaners.filter(cleaner =>
            cleaner.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCleaners(filtered);
    };

    return (
        <>
            <section className="bg-[#FFF9EA]">
                <div className="container text-center">
                    <h2 className="heading">Find a Cleaner</h2>
                    <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0099FF2C] rounded-md flex items-center justify-between">
                        <input
                            type="search"
                            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
                            placeholder="Search Cleaner"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                        <button
                            className="btn mt-0 rounded-[0px] rounded-r-md"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {filteredCleaners.map(cleaner => (
                            <CleanersCard key={cleaner.id} cleaners={cleaner} />
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center">What our clients say</h2>
                        <p className="text__para text-center">See here for green cleaning services ratings!</p>
                    </div>
                    <Testimonial />
                </div>
            </section>
        </>
    );
};

export default Cleaners;
