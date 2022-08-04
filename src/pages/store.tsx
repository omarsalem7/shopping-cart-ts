import StoreItem from '../components/storeItem';
import items from '../data/items.json';
const Store = () => {
  return (
    <div className="">
      <h1 className="text-2xl  w-fit text-teal-600 mx-auto my-8">Store</h1>
      <div className="flex mx-4 flex-col items-center justify-center gap-5 md:flex-row  md:flex-wrap">
        {items.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Store;
