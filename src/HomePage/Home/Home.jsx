import { Helmet } from "react-helmet";
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
              <Helmet>
                <meta charSet="utf-8" />
                <title>Blog Sphere || Home</title>
             
            </Helmet>
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