let age = prompt("შეიყვანეთ თქცენი ასაკი");
let type = prompt("შეიყვანეთ კინოს ტიპი(3D ან ჩვეულებრივი)");
let time = prompt("დილის სეანსი თუ საღამოს?");
let discount = prompt("გაქვთ ფასდაკლების ბილეთი?");
let price = 0;
function AgeControl(age) {
  switch (true) {
    case age <= 10:
      return (price += 5);
    case age > 10 && age <= 65:
      return (price += 15);
    default:
      return (price += 10);
  }
}
AgeControl(age);
function TypeControl(type) {
  switch (true) {
    case type === "3D":
      return (price += 5);
    default:
      break;
  }
}
TypeControl(type);
function TimeControl(time) {
  switch (true) {
    case time === "საღამო":
      return (price += 5);
    default:
      break;
  }
}
TimeControl(time);
function DiscountControl(discount) {
  if (discount === "კი") {
    price -= 5;
  } else {
  }
}
DiscountControl(discount);
console.log("ბილეთის ფასი თქვენთვის არის: " + price + "ლარი.");