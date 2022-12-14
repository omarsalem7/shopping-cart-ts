import { GrAdd } from 'react-icons/gr';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { formatCurrency } from '../utilities/currencyFormat';
type storeItemType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const StoreItem = ({ id, name, price, imgUrl }: storeItemType) => {
  const quan: number = 1;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          className="object-cover h-48 mx-auto"
          src={imgUrl}
          alt="Sunset in the mountains"
        />
      </figure>
      <div className="px-3 card-body items-center text-center">
        <div className="flex py-4 justify-between">
          <span>{name}</span>
          <span className="text-gray-500 text-sm">{formatCurrency(price)}</span>
        </div>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="py-4">
          {quan === 0 ? (
            <button
              className="text-center mb-1 w-56 bg-white-500 shadow-2xl
             hover:text-gray-800 hover:scale-95 transition 
              shadow-gray-800 text-gray-600 
             font-bold py-2 px-4 "
            >
              <span className="flex justify-center items-center gap-2">
                <GrAdd />
                Add to cart
              </span>
            </button>
          ) : (
            <div className="border-gray-500">
              <button className="border-2 mr-2 p-1 border-gray-500">
                <AiOutlinePlus />
              </button>
              <span className="">{quan}</span>
              <button className="border-2 ml-2 p-1 border-gray-500">
                <AiOutlineMinus />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
