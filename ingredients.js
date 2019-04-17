var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var count = 0;
while (count < ingredients.length) {
  console.log(ingredients[count]);
  count++;
}

for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[7 - i]);
}