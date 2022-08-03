import StoreItem from '../components/storeItem';
import items from '../data/items.json';
const Store = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center my-8">Store</h1>
      <div className="flex mx-4 flex-col items-center justify-center gap-5 md:flex-row  md:flex-wrap">
        {items.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Store;
