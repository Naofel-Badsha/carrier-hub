const StatisticsCard = ({ statistic }) => {
  const { image, job_conferences_name, jobs_conferences_title } =
    statistic || {};
  return (
    <div>
      <div className="card bg-white shadow-xl border-2 border-sky-700">
        <figure>
          <img src={image} className="w-full h-[350px]"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold text-slate-900">Name: <small className="text-[16px] font-medium text-slate-500">
            {job_conferences_name}</small>
            </h2>
          <h2 className="text-xl font-bold text-slate-900">Title: <small className="text-[16px] font-medium text-slate-500">
            {jobs_conferences_title}</small>
         </h2>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
