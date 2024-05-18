import { useState } from "react";
import Loader from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";
import useGetProfile from "../../hooks/useFetchData.jsx";
import { BASE_URL } from "../../config.js";
import Tabs from "./Tabs.jsx";


const Dashboard = () => {

    const { data, loading, error} = useGetProfile(`${BASE_URL}/cleaner/profile/me`)


    const [tab,setTab] = useState("overview")

    return (
    <section>
        <div className="max-w-[1170px] px-5 mx-auto">
            {loading && !error && <Loader/>}
            {error && !loading && <Error/>}

            {!loading && !error &&  (
            <div className="grid lg:grid-cols-3 gap-[30px] lg:ga-[50px]">
                   <Tabs tab={tab} setTab={setTab}/>       
                </div>
            )}
        </div>
    </section>
    ); 
};

export default Dashboard;