import Footer from "../Footer";
import Banner from "../Header/Banner";
import Navbar from "../Header/Navbar";
import Newsletter from "../Newsletter";
import Tips from "../Tips";
import Trending from "../Trending";
import RecentBlogs from "./RecentBlogs";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <Newsletter></Newsletter>
            <Tips></Tips>
            <Trending></Trending>
            <Footer></Footer>
        </div>
    );
};

export default Home;