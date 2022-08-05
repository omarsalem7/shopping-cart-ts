type ItemType = {
  id: number;
  quantity: number;
};

export function getItemQuantity(id: number, items: ItemType[]) {
  return items.find((item) => item.id === id)?.quantity || 0;
}

