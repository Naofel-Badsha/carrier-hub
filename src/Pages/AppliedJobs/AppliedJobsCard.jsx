import { Link } from "react-router-dom";
import locationIcon from "../../assets/icons/Location.png";
import moneyIcon from "../../assets/icons/money.png";
const AppliedJobsCard = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job || {};
  return (
    <div className="container m-auto ">
      <div className=" bg-slate-50 border-2 p-6 rounded-md shadow-xl card border-2 border-sky-700">
        <div className="flex items-center justify-between flex-wrap">
          <div>
            <img className="w-[100px]" src={logo} />
            <h3 className="text-2xl text-slate-900 font-bold py-1">
              {job_title}
            </h3>
            <p className="text-xl text-slate-600 py-1">{company_name}</p>
            <div className="py-3 flex gap-4">
              <button
                className="text-sky-400 bg-white border-2 border-blue-600 text-xl py-2 px-4 rounded-md">
                {remote_or_onsite}
              </button>
              <button
                className="text-sky-400 bg-white border-2 border-blue-600 text-xl py-2 px-4 rounded-md">
                {job_type}
              </button>
            </div>
            <div className="flex items-center flex-wrap gap-5 py-2">
              <div className="flex items-center gap-2">
                <img src={locationIcon} />
                <p className="text-slate-500">{location}</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={moneyIcon} />
                <p className="text-slate-500">{salary}</p>
              </div>
            </div>
          </div>
          <div>
            <Link to={`/featuredJobsDetails/${id}`}>
              <button
                className="bg-gradient-to-r from-sky-400 to-blue-400
          hover:from-sky-500 hover:to-blue-500 text-xl py-2 px-4 rounded-md mt-4"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsCard;
