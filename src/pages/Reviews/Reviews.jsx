import review1 from '../../assets/reviews/review1.jpg';
import review2 from '../../assets/reviews/review2.jpg';
import review3 from '../../assets/reviews/review3.jpg';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


const Reviews = () => {
    return (
      <div className='my-10'>
        <h2 className=" font-bold text-3xl mb-10 text-center ">Customers <span className='text-teal-400'>Reviews</span> </h2>
          <div className="customer-reviews grid grid-cols-1 md:grid-cols-3 gap-6 my-12 px-4">
            
            <div className="review-card shadow-lg rounded-lg p-4 ">
              <div className="review-image">
                <img
                  src={review1}
                  alt="Customer 1"
                  className="w-12 h-12 rounded-full mb-4"
                />
              </div>
              <div className="review-content">
                <div className="review-rating flex mb-2 text-orange-500 ">
                  <span className="star"><AiFillStar className='w-5/6'/></span>
                  <span className="star"><AiFillStar className='w-5/6'/></span>
                  <span className="star"><AiFillStar className='w-5/6'/></span>
                  <span className="star"><AiFillStar className='w-5/6'/></span>
                  <span className="star"><AiOutlineStar className='w-5/6'/></span>
                </div>
                <h3 className="text-lg font-bold mb-2">Great </h3>
                <p className="mb-2">
                  This toy car is amazing! My son loves it and plays with it all the
                  time. The quality is excellent and it is really fun to use.
                </p>
                <p className="text-sm text-gray-600">- Shuvo Ahamed .</p>
              </div>
            </div>
            <div className="review-card shadow-lg rounded-lg p-4">
              <div className="review-image">
                <img
                  src={review2}
                  alt="Customer 2"
                  className="w-12 h-12 rounded-full mb-4"
                />
              </div>
              <div className="review-content ">
                <div className="review-rating flex mb-2 text-orange-500">
                <span className="star"><AiFillStar className='w-5/6'/></span>
                  <span className="star"><AiFillStar className='w-5/6'/></span>
                  <span className="star"><AiFillStar className='w-5/6'/></span>
                  <span className="star"><AiFillStar className='w-5/6'/></span>
                  <span className="star"><AiFillStar className='w-5/6'/></span>
                </div>
                <h3 className="text-lg font-bold mb-2">Fantastic </h3>
                <p className="mb-2">
                  This toy car exceeded my expectations! The design is impressive, and
                  it is incredibly durable. My kids have a blast playing with it.
                </p>
                <p className="text-sm text-gray-600">- Mahmad Rimon .</p>
              </div>
            </div>
            <div className="review-card shadow-lg rounded-lg p-4">
              <div className="review-image">
                <img
                  src={review3}
                  alt="Customer 3"
                  className="w-12 h-12 rounded-full mb-4"
                />
              </div>
              <div className="review-content">
              <div className="review-rating flex mb-2 text-orange-500">
                <span className="star"><AiFillStar className='w-5/6'/></span>
                  <span className="star"><AiFillStar className='w-5/6'/></span>
                  <span className="star"><AiFillStar className='w-5/6'/></span>
                  <span className="star"><AiFillStar className='w-5/6'/></span>
                  <span className="star"><AiFillStar className='w-5/6'/></span>
                </div>
                <h3 className="text-lg font-bold mb-2">Awesome </h3>
                <p className="mb-2">
                  We love this toy car! It is well-made, easy to use, and provides
                  hours of entertainment. Highly recommended!
                </p>
                <p className="text-sm text-gray-600">- Tahiyat .</p>
              </div>
            </div>
          </div>
      </div>
    );
};

export default Reviews;