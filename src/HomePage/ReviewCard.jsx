import { useContext } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../Provider/AuthProvider';

const ReviewCard = ({rev}) => {
  const {theme} = useContext(AuthContext)
    return (
      <div className={`h-full  ${theme === 'dark' ? 'bg-black': 'bg-white'} `}>
      <section className={` ${theme === 'dark' ? 'bg-black': 'bg-white'} py-6 h-full`}>
        <div className="mx-auto px-4 h-full text-center">
          <Zoom className='h-full'>
          <PhotoProvider className='h-full'>
            <div className={`border backdrop-blur-lg border-[#5451C4] ${theme === 'dark' ? '' : 'shadow-lg shadow-purple-100'} rounded-lg p-6 hover:shadow-lg transition duration-300 h-fit py-10`}>
 
              <PhotoView src={rev.photo}>
                <img
                  src={rev.photo}
                  alt="User Avatar"
                  className="w-20 h-20 mx-auto mb-4 rounded-full object-cover cursor-pointer"
                />
              </PhotoView>

       
              <h3 className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-800'} font-semibold `}>{rev.name}</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>{rev.occupation}</p>
              <p className={`${theme === 'dark' ? 'text-white/40' : 'text-gray-600'} mt-4 h-24`}>{rev.review}</p>
            </div>
          </PhotoProvider>
          </Zoom>
        </div>
      </section>
    </div>
    );
};

export default ReviewCard;