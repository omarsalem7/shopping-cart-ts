import { GrAdd } from 'react-icons/gr';
type storeItemType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const StoreItem = ({ id, name, price, imgUrl }: storeItemType) => {
  return (
    <div className="mb-8 pt-4  bg-gray-100 text-center max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="object-cover h-48 mx-auto"
        src={imgUrl}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="text-center mb-1 w-56 bg-white-500 shadow-2xl hover:text-gray-800 hover:shadow-gray-800 text-gray-600 font-bold py-2 px-4 rounded-full">
          <span className="flex justify-center items-center gap-2">
            <GrAdd />
            Add to cart
          </span>
        </button>
      </div>
    </div>
  );
};

export default StoreItem;
