import Banner from "../Header/Banner";
import Navbar from "../Header/Navbar";
import Newsletter from "../Newsletter";
import RecentBlogs from "./RecentBlogs";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;