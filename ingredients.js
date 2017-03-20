var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("FOR LOOP STARTS NOW");

for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("LAST LOOP STARTS NOW");

var x = ingredients.length; // 7
var y = 0;

while (y < ingredients.length) {

  y++;
  x--;
  console.log(ingredients[x]);
}
