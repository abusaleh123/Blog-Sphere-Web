// import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div  className='flex  flex-col min-h-screen ' data-theme="light">
             {/* <Helmet>
             
             <title>Chill Gamer || Error</title>
            
         </Helmet> */}
           
          <div className='flex flex-col justify-center items-center '>
          <h1 style={{
 background: "linear-gradient(to top, #5350C3 0%, #8784F8 59%)",
 WebkitBackgroundClip: "text",
 WebkitTextFillColor: "transparent"
 }} className=" lg:text-[400px] text-[100px] font-bold text-background">
    Oops!
</h1>
<p className="text-4xl uppercase font-bold my-4">404 - page not Found</p>
<p className="text-xl w-2/4 text-center font-semibold mb-4">The page you are looking for might have been removed had its name changed or is temporary unavailable</p>

          <Link style={{
 background: "linear-gradient(to top, #5350C3 0%, #8784F8 59%)"
 }} className='btn flex text-white text-lg items-center w-72 justify-center border-white border btn-ghost'  to={'/'}> Back to home</Link>
          </div>
        </div>
    );
};

export default ErrorPage;