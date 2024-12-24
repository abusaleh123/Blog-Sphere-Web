import life from '../assets/Images/ella-jardim-M0zs81FNm6s-unsplash.jpg';
import health from '../assets/Images/vd-photography-sUVS46T2WoY-unsplash (1).jpg'
import tech from '../assets/Images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg'
import finance from '../assets/Images/traxer-_neg4fKOZlk-unsplash.jpg'
import cooking from '../assets/Images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg'
import business from '../assets/Images/adeolu-eletu-rFUFqjEKzfY-unsplash.jpg'

const Trending = () => {
    return (
        <div>
            
    <section className="py-16 ">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-6xl font-extrabold text-gray-800 mb-4">Trending Topics</h2>
    <p className="text-lg text-gray-600 mb-12">Stay updated with the most talked about topics in the blogosphere.</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={tech} alt="Technology" className="w-full h-56 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technology</h3>
          <p className="text-gray-600 mb-4">Get the latest insights into the world of technology, gadgets, and innovations shaping the future.</p>
        </div>
      </div>


      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={health} alt="Health" className="w-full h-56 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Health & Wellness</h3>
          <p className="text-gray-600 mb-4">Stay informed with the latest trends in mental and physical health, nutrition, and fitness.</p>
        </div>
      </div>


      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={life} alt="Lifestyle" className="w-full h-56 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lifestyle</h3>
          <p className="text-gray-600 mb-4">Explore a range of lifestyle topics including travel, productivity, and self-care.</p>
        </div>
      </div>


      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={finance} alt="Finance" className="w-full h-56 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Finance</h3>
          <p className="text-gray-600 mb-4">Learn how to manage your money, invest wisely, and navigate the complex world of personal finance.</p>
        </div>
      </div>

    
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={cooking} alt="Food" className="w-full h-56 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Food & Cooking</h3>
          <p className="text-gray-600 mb-4">Get delicious recipes, cooking tips, and everything related to food and culinary arts.</p>
        </div>
      </div>

  
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={business} alt="Business" className="w-full h-56 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Business</h3>
          <p className="text-gray-600 mb-4">Stay on top of the latest trends in business, entrepreneurship, and corporate strategies.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<p className="mt-20 mb-20 border-t w-10/12 mx-auto"></p>
        </div>
    );
};

export default Trending;