import { useLoaderData, useParams } from "react-router-dom";

const Job = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job); 
    return (
        <div>
            
        </div>
    );
};

export default Job;