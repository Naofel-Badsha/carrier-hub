import { useEffect, useState } from "react";
import StatisticsCard from "./StatisticsCard";
import jobdetailsBanner from "../../assets/images/bg1.png";
const Statistics = () => {
  const [statistics, setStatistics] = useState([]);
  useEffect(() => {
    fetch("statistics.json")
      .then((res) => res.json())
      .then((data) => setStatistics(data));
  }, []);
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="w-full h-[300px] bg-white ">
          <img className="absolute mt-20" src={jobdetailsBanner} alt="" />
        </div>
        <hr className="bg-orange-600 h-1" />

        <div className="flex items-center justify-center">
          <h1 className="absolute -mt-72 text-slate-900 text-3xl  font-bold">
            <h1>Job Statistics: {statistics.length}</h1>
          </h1>
        </div>
      </div>
      <div className="container m-auto">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 py-20">
        {statistics.map((statistic) => (
          <StatisticsCard
            key={statistic}
            statistic={statistic}
          ></StatisticsCard>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Statistics;
