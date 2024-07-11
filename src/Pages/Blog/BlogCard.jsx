const BlogCard = ({ blog }) => {
  const { job_title, img, job_name, apply_pepole } = blog || {};
  return (
    <div>
      <div className="card bg-white shadow-xl border-2 border-sky-700">
        <figure>
          <img src={img} className="w-full h-[300px]"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-slate-900 font-bold">Name: <small className="text-[16px] font-normal">{job_title}</small></h2>
          <h3 className="text-slate-600 text-xl font-bold">Job: <small className="text-[16px] font-normal">{job_name}</small></h3>
          <h3 className="text-slate-600 text-xl font-bold">Apply: <small className="text-[16px] font-normal">{apply_pepole}</small></h3>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
