const data = require('./food.json');
//console.log(data);

// let a = data.map((element)=>{
//     console.log(element);
//     return element
// })

// console.log(a);

let x = "Vegetable"
let y = "Fruit"
let z = "Protein"
let p = "Nuts"
let q = "Grain"
let r = "Dairy"

function category(para) {
    let op = data.filter((item) => item.category == para);
    console.log(op);
}

console.log("list of all the food items with category vegetables: ", category(x));
console.log("list of all the food items with category fruits: ", category(y));
console.log("list of all the food items with category Protein: ", category(z));
console.log("list of all the food items with category nuts: ", category(p));
console.log("list of all the food items with category grains: ", category(q));
console.log("list of all the food items with category dairy: ", category(r));


function calorieAbove() {
    let output = data.filter((item) => item.calorie > 100);
    console.log(output);
}
console.log("list all the food items with calorie above 100");
calorieAbove();

function calorieBelow() {
    let output1 = data.filter((item) => item.calorie < 100);
    console.log(output1);
}
console.log("list all the food items with calorie below 100");
calorieBelow();

data.sort((a, b) => {
    return a.protiens - b.protiens;
});

data.sort((a, b) => {
    return b.cab - a.cab;
});