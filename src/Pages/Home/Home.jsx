import Banner from "../../Components/Banner/Banner";
import CategoryList from "../../Components/CategoryList/CategoryList";
import FeaturedJobs from "../../Components/FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;