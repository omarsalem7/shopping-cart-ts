import data from '../data/items.json';
type ItemType = {
  id: number;
  quantity: number;
};

export function getItemQuantity(id: number, items: ItemType[]) {
  return items.find((item) => item.id === id)?.quantity || 0;
}

export function getTotalItems(items: ItemType[]) {
  return items.length;
}

export const cartItemName = (id: number) => {
  return data.find((it) => it.id == id)?.name;
};
