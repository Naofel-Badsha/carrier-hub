import { useLoaderData, useParams } from "react-router-dom";
import jobdetailsBanner from "../../assets/images/bg1.png";
import { useEffect, useState } from "react";
import FeaturedJobsDetailsPage from "../FeaturedJobsDetailsPage/FeaturedJobsDetailsPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localStorage";
const FeaturedJobsDetails = () => {
  const [job, setJob] = useState({})
  const jobs = useLoaderData();
  const { id } = useParams();
  //---caking--for----id---And---type----
  const idInt = parseInt(id);
  useEffect(() => {
    const detailsJob = jobs.find((job) => job.id == idInt);
    setJob(detailsJob)
  },[id, jobs])
  console.log(job);

  const handelJobApply = () => {
    saveJobApplication(idInt)
    toast('You have applied successFullly')
  }

  return (
    <div className="bg-white">
      <div className="relative">
        <div className="w-full h-[300px] bg-white ">
          <img className="absolute mt-20" src={jobdetailsBanner} alt="" />
        </div>
        <hr className="bg-orange-600 h-1"/>
        
        <div className="flex items-center justify-center">
          <h1 className="absolute -mt-72 text-slate-900 text-3xl  font-bold">
            Jobs Details: {id}
          </h1>
        </div>
      </div>
      <ToastContainer />
      <FeaturedJobsDetailsPage 
      job={job}
      handelJobApply={handelJobApply}
      ></FeaturedJobsDetailsPage>
    </div>
  );
};

export default FeaturedJobsDetails;
