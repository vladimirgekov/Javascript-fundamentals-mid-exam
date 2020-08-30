function shoppingList(input) {
  let list = input.shift().split("!");

  for (let item of input) {
    let [command, product] = item.split(" ");
    if (item.includes("Urgent")) {
      if (!list.includes(product)) {
        list.unshift(product);
      }
    } else if (item.includes("Unnecessary")) {
      if (list.includes(product)) {
        let index = list.indexOf(product);
        list.splice(index, 1);
      }
    } else if (item.includes("Correct")) {
      let oldItem = item.split(" ")[1];
      let newItem = item.split(" ")[2];

      if (list.includes(product)) {
        let index = list.indexOf(product);
        list.splice(index, 1);
        list.splice(index, 0, newItem);
      }
    } else if (item.includes("Rearrange")) {
      if (list.includes(product)) {
        let index = list.indexOf(product);
        list.splice(index, 1);
        list.push(product);
      }
    } else if (item.includes("Shopping")) {
      break;
    }
  }
  console.log(list.join(", "));
}
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!"
]);
