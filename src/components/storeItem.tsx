import { GrAdd } from 'react-icons/gr';
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
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="px-6 py-3">
          {quan === 0 ? (
            <span>{quan}</span>
          ) : (
            <button className="text-center mb-1 w-56 bg-white-500 shadow-2xl hover:text-gray-800 shadow-gray-800 text-gray-600 font-bold py-2 px-4 ">
              <span className="flex justify-center items-center gap-2">
                <GrAdd />
                Add to cart
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
