import catagoryList1 from "../../assets/icons/accounts.png"
import catagoryList2 from "../../assets/icons/creative.png"
import catagoryList3 from "../../assets/icons/marketing.png"
import catagoryList4 from "../../assets/icons/chip.png"
const CategoryList = () => {
    return (
        <div className="container m-auto mt-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-slate-950 text-center font-bold">Job Category List</h1>
            <div className="bg-orange-600 w-[150px] h-1 m-auto mt-2"></div>
            <p className="text-xl text-center py-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
        
          <div className="flex gap-6 flex-wrap items-center justify-center">
            {/*----------Catagory---List----1-----*/}
             <div className="bg-slate-300 p-5 rounded-lg">
                <img className="bg-slate-200 p-2 rounded-md" src={catagoryList1}  />
                <h3 className="text-xl text-slate-900 mt-3">Account & Finance</h3>
                <p className="text-sm text-slate-600 mt-1">300 Jobs Available</p>
             </div>
            {/*----------Catagory---List----2-----*/}
             <div className="bg-slate-300 p-5 rounded-lg">
                <img className="bg-slate-200 p-2 rounded-md" src={catagoryList2}  />
                <h3 className="text-xl text-slate-900 mt-3">Creative Design</h3>
                <p className="text-sm text-slate-600 mt-1">100+ Jobs Available</p>
             </div>
            {/*----------Catagory---List----3-----*/}
             <div className="bg-slate-300 p-5 rounded-lg">
                <img className="bg-slate-200 p-2 rounded-md" src={catagoryList3}  />
                <h3 className="text-xl text-slate-900 mt-3">Marketing & Sales</h3>
                <p className="text-sm text-slate-600 mt-1">150 Jobs Available</p>
             </div>
            {/*----------Catagory---List----4-----*/}
             <div className="bg-slate-300 p-5 rounded-lg">
                <img className="bg-slate-200 p-2 rounded-md" src={catagoryList4}  />
                <h3 className="text-xl text-slate-900 mt-3">Engineering Job</h3>
                <p className="text-sm text-slate-600 mt-1">224 Jobs Available</p>
             </div>
          </div>
        </div>
    );
};

export default CategoryList;