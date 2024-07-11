import locationIcon from "../../assets/icons/Location.png";
import moneyIcon from "../../assets/icons/money.png";
import phoneIcon from "../../assets/icons/phone.png";
import emailIcon from "../../assets/icons/email.png";
import jobCalenderIcon from "../../assets/icons/calendar.png";
const FeaturedJobsDetailsPage = ({ job, handelJobApply }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
    contact_information,
  } = job;
  return (
    <div className="container m-auto py-28">
      <div className="grid gap-4 md:grid-cols-4">
        {/*----------Right-----Side-------*/}
        <div className="md:col-span-3">
          {/*--------Step------1------*/}
          <h3 className="text-[22px] text-black font-bold">
            Job Discription:
            <small className="text-[16px] text-slate-500 font-medium ml-2">
              {job.job_description}
            </small>
          </h3>
          {/*--------Step------2------*/}
          <h3 className="text-[22px] text-black font-bold mt-6">
            job Responsibility:
            <small className="text-[16px] text-slate-500 font-medium ml-2 mt-10">
              {job.job_responsibility}
            </small>
          </h3>
          {/*--------Step------3------*/}
          <h3 className="text-[22px] text-black font-bold mt-6">
            Educational Requirements:
          </h3>
          <small className="text-[16px] text-slate-500 font-medium ml-2 mt-10">
            {job.educational_requirements}
          </small>
          {/*--------Step------4------*/}
          <h3 className="text-[22px] text-black font-bold mt-6">
            Experiences:
          </h3>
          <small className="text-[16px] text-slate-500 font-medium ml-2">
            {job.experiences}
          </small>
        </div>
        {/*----------Left-----Side-------*/}
        <div>
          <div className="border-2 bg-slate-300 p-6 rounded-lg">
            <h2 className="text-xl text-black font-bold py-2">Job Details</h2>
            <hr className="bg-slate-400 h-1" />
            {/*-------Part------1--------*/}
            <div className="flex items-center gap-2 py-1">
              <img src={moneyIcon} />
              <h2 className="text-black text-xl font-bold">
                Salary:{" "}
                <small className="text-slate-500 font-medium">{salary}</small>
              </h2>
            </div>
            <div className="flex items-center gap-2 py-1">
              <img src={jobCalenderIcon} />
              <h2 className="text-black text-xl font-bold">
                Job Title{" "}
                <small className="text-slate-500 font-medium">
                  {job_title}
                </small>
              </h2>
            </div>

            <h2 className="text-xl text-black font-bold py-2">
              Contact Information
            </h2>
            <hr className="bg-slate-400 h-1" />
            <div className="flex items-center gap-2 py-2">
              <img src={phoneIcon} />
              <h3 className="text-black text-xl font-bold">
                Phone:{" "}
                <small className="text-slate-500 font-medium">
                  {job?.phone}
                </small>
              </h3>
            </div>
            <div className="flex items-center gap-2 py-2">
              <img src={emailIcon} />
              <h3 className="text-black text-xl font-bold">
                Email:{" "}
                <small className="text-slate-500 font-medium">
                  {job?.email}
                </small>
              </h3>
            </div>
            <div className="flex items-center gap-2 py-2">
              <img src={locationIcon} />
              <h3 className="text-black text-xl font-bold">
                Address:{" "}
                <small className="text-slate-500 font-medium">
                  {job?.address}
                </small>
              </h3>
            </div>
          </div>
        {/*------Button---------*/}
        <button onClick={handelJobApply}
            className="w-full bg-gradient-to-r from-sky-400 to-blue-400
          hover:from-sky-500 hover:to-blue-500 text-xl py-2 px-4 
          rounded-md mt-4"
          >
            Apply Now
          </button>
        </div>

        {/*-------Part------2--------*/}
      </div>
    </div>
  );
};

export default FeaturedJobsDetailsPage;
