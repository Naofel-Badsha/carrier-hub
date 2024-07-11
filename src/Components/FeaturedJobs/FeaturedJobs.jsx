import { useEffect, useState } from "react";
import FeaturedJobsCard from "../FeaturedJobsCard/FeaturedJobsCard";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLemgth, setDataLemgth] = useState([4]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(jobs);
  return (
    <div className="container m-auto mt-20">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-slate-950 text-center font-bold">
        Featured Jobs
      </h1>
      <div className="bg-orange-600 w-[150px] h-1 m-auto mt-2"></div>
      <p className="text-xl text-center py-5">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-3">
        {jobs?.slice(0, dataLemgth).map(job =>
          <FeaturedJobsCard key={job.id} job={job}></FeaturedJobsCard>
        )}
      </div>
      <div className="flex items-center justify-center">
        <div className={dataLemgth === jobs.length ? "hidden" : ''}>
          <button
            onClick={() => setDataLemgth(jobs.length)}
            className="bg-gradient-to-r from-sky-400 to-blue-400
          hover:from-sky-500 hover:to-blue-500 text-xl py-2 px-4 
          rounded-md mt-4"
          >
            View All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
