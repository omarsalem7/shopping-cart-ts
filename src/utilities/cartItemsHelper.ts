type ItemType = {
  id: number;
  quantity: number;
};

export function getItemQuantity(id: number, items: ItemType[]) {
  return items.find((item) => item.id === id)?.quantity || 0;
}

// function increaseQuantity(id: number) {
//   setItems((currentItems) => {
//     if (currentItems.find((item) => item.id === id) == null) {
//       return [...currentItems, { id, quantity: 1 }];
//     } else {
//       return items.map((item) => {
//         if (item.id === id) {
//           return { ...item, quantity: item.quantity + 1 };
//         } else {
//           return item;
//         }
//       });
//     }
//   });
// }
