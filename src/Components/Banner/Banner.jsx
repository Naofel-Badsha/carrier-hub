import userInage from "../../assets/images/user.png";
const Banner = () => {
  return (
    <div>
      <div className="  h-screen  container m-auto">
        <div className="flex items-center justify-between mt-32 flex-col lg:flex-row-reverse">
          <div className="w-full flex-1 ">
            <div className=" w-full ">
              <img src={userInage} className="rounded-lg w-full h-[500px]" />
            </div>
          </div>

          <div className="text-center lg:text-left flex-1 mt-10">
            <div className="">
              <h2 className="text-6xl text-black font-bold ">One Step</h2>
              <h2 className="text-6xl text-black font-bold py-3">
                Closer To Your
              </h2>
              <h2 className="text-6xl text-blue-500 font-bold ">Dream Job</h2>
            </div>
            <p className="text-xl py-6">
              Explore thousands of job opportunities with all the information
              you need. <br></br> Its your future. Come find it. Manage all your
              job application from start to finish.
            </p>
            <button
              className="bg-gradient-to-r from-sky-400 to-blue-400
    hover:from-sky-500 hover:to-blue-500 text-xl py-2 px-4 rounded-md mt-4"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /* <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
<div>
    <h2>
      One Step <br></br> Closer To Your <br></br> Dream Job
    </h2>
    <p>
      Explore thousands of job opportunities with all the information you
      need. Its your future. Come find it. Manage all your job application
      from start to finish.
    </p>
    <button
    className="bg-gradient-to-r from-sky-400 to-blue-400
    hover:from-sky-500 hover:to-blue-500 text-xl py-2 px-4 rounded-md mt-4"
  >
    Get Started
  </button>
  </div>
  <div>
    <img src={userInage} className="max-w-sm rounded-lg " />
  </div>
</div> */
}
