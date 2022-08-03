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
        <button className="w-56 bg-transparent hover:bg-teal-600 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default StoreItem;
