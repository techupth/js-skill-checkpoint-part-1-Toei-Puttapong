// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
function minQuantity(inventory) {
  let minValue = Infinity;
  let fruitName;
  for (let item of inventory) {
    if (item.quantity < minValue) {
      minValue = item.quantity;
      fruitName = item.name;
    }
  }
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${fruitName} ซึ่งมี ${minValue} ชิ้น`;
}

console.log(minQuantity(inventory));
