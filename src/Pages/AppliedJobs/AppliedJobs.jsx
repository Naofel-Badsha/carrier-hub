import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Components/Utility/localStorage";
import AppliedJobsCard from "./AppliedJobsCard";
import jobdetailsBanner from "../../assets/images/bg1.png";
const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([])
  
  const handleJobsFilter = filter =>{
    if(filter === 'all'){
        setDisplayJobs(appliedJobs)  
    }
    else if(filter === 'remote'){
        const remoteJobs = appliedJobs.filter(job => 
            job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
    }
    else if(filter === 'onsite'){
        const onsiteJobs  = appliedJobs.filter(job => 
            job.remote_or_onsite === 'Onsite')
        setDisplayJobs(onsiteJobs)
    } 
  }

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied)
    }
  }, [jobs]);

  return (
    <div className="bg-white">
      <div className="relative">
        <div className="w-full h-[300px] bg-white ">
          <img className="absolute mt-20" src={jobdetailsBanner} alt="" />
        </div>
        <hr className="bg-orange-600 h-1" />

        <div className="flex items-center justify-center">
          <h1 className="absolute -mt-72 text-slate-900 text-3xl  font-bold">
            <h1>AppliedJobs: {appliedJobs.length}</h1>
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center py-6">
        <details className="dropdown">
          <summary className="px-4 py-2 rounded-md bg-gradient-to-r from-sky-400 to-blue-400
          hover:from-sky-500 hover:to-blue-500 text-xl cursor-pointer">All Jobes</summary>
          <ul className="menu dropdown-content bg-base-100 
          rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
            <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
            <li onClick={() => handleJobsFilter('onsite')}><a>OnSite</a></li>
          </ul>
        </details>
      </div>

      <div className="grid gap-8  py-28">
        {displayJobs.map((job) => (
          <AppliedJobsCard 
          key={job.id}
          job={job}> :{job.remote_or_onsite}
          </AppliedJobsCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;