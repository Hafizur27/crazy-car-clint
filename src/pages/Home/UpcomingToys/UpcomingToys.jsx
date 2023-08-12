import upcoming1 from '../../../assets/upcoming/upcoming-1.jpg';
import upcoming2 from '../../../assets/upcoming/upcoming-2.jpg';
import upcoming3 from '../../../assets/upcoming/upcoming-3.jpg';
import { TbCurrencyTaka } from "react-icons/tb";


const UpcomingToys = () => {
    return (
        <div className='my-10 px-4'>
            <h2 className=" font-bold text-3xl mb-10 text-center">
        Upcoming <span className="text-teal-400">Toy</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10" >
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-slate-600" >
        <img
          src={upcoming1}
          alt="Porsche 718"
          className="rounded mb-4 h-48 w-full object-cover"
        />
        <h3 className="text-xl font-bold mb-4">Porsche 718</h3>
        <p className="text-gray-700 flex items-center gap-1">Price: 40000<TbCurrencyTaka className="text-orange-500 h-4 w-4"/>
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-slate-600" >
        <img
          src={upcoming3}
          alt="Audi RS5"
          className="rounded mb-4 h-48 w-full object-cover"
        />
        <h3 className="text-xl font-bold mb-4">Audi RS5</h3>
        <p className="text-gray-700 flex items-center gap-1">Price: 55000<TbCurrencyTaka className="text-orange-500 h-4 w-4"/>
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-slate-600" >
        <img
          src={upcoming2}
          alt="ord Ranger"
          className="rounded mb-4 h-48 w-full object-cover"
        />
        <h3 className="text-xl font-bold mb-4">Ford Ranger</h3>
        <p className="text-gray-700 flex items-center gap-1">Price: 35000<TbCurrencyTaka className="text-orange-500 h-4 w-4"/>
        </p>
      </div>
      
    </div>
        </div>
    );
};

export default UpcomingToys;