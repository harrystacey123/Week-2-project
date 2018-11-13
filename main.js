var showAll = function() {
    document.querySelector(`.fruit`).style.display = `block`;
    document.querySelector(`.vegetables`).style.display = `block`;
    document.querySelector(`.meat`).style.display = `block`;
}
document.querySelector(`#list0`).addEventListener(`click`, showAll);

var hideFruit = function() {
    document.querySelector(`.fruit`).style.display = 'none';
}

document.querySelector(`#list2`).addEventListener(`click`, hideFruit);
document.querySelector(`#list3`).addEventListener(`click`, hideFruit);


var showFruit = function() {
    document.querySelector(`.fruit`).style.display = `block`;
}
document.querySelector(`#list1`).addEventListener(`click`, showFruit);


var hideVegetables = function() {
    document.querySelector(`.vegetables`).style.display = `none`;
}
document.querySelector(`#list1`).addEventListener(`click`, hideVegetables);
document.querySelector(`#list3`).addEventListener(`click`, hideVegetables);

var showVegetables = function() {
    document.querySelector(`.vegetables`).style.display = `block`;
}
document.querySelector(`#list2`).addEventListener(`click`, showVegetables);

var hideMeat = function() {
    document.querySelector(`.meat`).style.display = `none`;
}
document.querySelector(`#list1`).addEventListener(`click`, hideMeat);
document.querySelector(`#list2`).addEventListener(`click`, hideMeat);

var showMeat = function() {
    document.querySelector(`.meat`).style.display = `block`;
}
document.querySelector(`#list3`).addEventListener(`click`, showMeat);

var shoppingItems = [`Apple`, `Banana`, `Strawberry`, `Peach`, `Broccoli`, `Cabbage`, `Carrot`, `Pepper`, `Beef`, `Chicken`, `Duck`, `Pork`];

var addItemToShoppingCart = function() {
    var node = document.createElement(`li`);
    var textnode = document.createTextNode(shoppingItems[0]);
    node.appendChild(textnode);
    document.getElementById(`shopping`).appendChild(node);
}
var button = document.querySelector(`.apple`);
button.addEventListener(`click`, addItemToShoppingCart);

var addItemToShoppingCart = function() {
    var node = document.createElement(`li`);
    var textnode = document.createTextNode(shoppingItems[1]);
    node.appendChild(textnode);
    document.getElementById(`shopping`).appendChild(node);
}
var button = document.querySelector(`.banana`);
button.addEventListener(`click`, addItemToShoppingCart);

var addItemToShoppingCart = function() {
    var node = document.createElement(`li`);
    var textnode = document.createTextNode(shoppingItems[2]);
    node.appendChild(textnode);
    document.getElementById(`shopping`).appendChild(node);
}
var button = document.querySelector(`.strawberry`);
button.addEventListener(`click`, addItemToShoppingCart);

var addItemToShoppingCart = function() {
    var node = document.createElement(`li`);
    var textnode = document.createTextNode(shoppingItems[3]);
    node.appendChild(textnode);
    document.getElementById(`shopping`).appendChild(node);
}
var button = document.querySelector(`.peach`);
button.addEventListener(`click`, addItemToShoppingCart);

var addItemToShoppingCart = function() {
    var node = document.createElement(`li`);
    var textnode = document.createTextNode(shoppingItems[4]);
    node.appendChild(textnode);
    document.getElementById(`shopping`).appendChild(node);
}
var button = document.querySelector(`.broccoli`);
button.addEventListener(`click`, addItemToShoppingCart);

var addItemToShoppingCart = function() {
    var node = document.createElement(`li`);
    var textnode = document.createTextNode(shoppingItems[5]);
    node.appendChild(textnode);
    document.getElementById(`shopping`).appendChild(node);
}
var button = document.querySelector(`.cabbage`);
button.addEventListener(`click`, addItemToShoppingCart);

var addItemToShoppingCart = function() {
    var node = document.createElement(`li`);
    var textnode = document.createTextNode(shoppingItems[6]);
    node.appendChild(textnode);
    document.getElementById(`shopping`).appendChild(node);
}
var button = document.querySelector(`.carrot`);
button.addEventListener(`click`, addItemToShoppingCart);

var addItemToShoppingCart = function() {
    var node = document.createElement(`li`);
    var textnode = document.createTextNode(shoppingItems[7]);
    node.appendChild(textnode);
    document.getElementById(`shopping`).appendChild(node);
}
var button = document.querySelector(`.pepper`);
button.addEventListener(`click`, addItemToShoppingCart);

var addItemToShoppingCart = function() {
    var node = document.createElement(`li`);
    var textnode = document.createTextNode(shoppingItems[8]);
    node.appendChild(textnode);
    document.getElementById(`shopping`).appendChild(node);
}
var button = document.querySelector(`.beef`);
button.addEventListener(`click`, addItemToShoppingCart);

var addItemToShoppingCart = function() {
    var node = document.createElement(`li`);
    var textnode = document.createTextNode(shoppingItems[9]);
    node.appendChild(textnode);
    document.getElementById(`shopping`).appendChild(node);
}
var button = document.querySelector(`.chicken`);
button.addEventListener(`click`, addItemToShoppingCart);

var addItemToShoppingCart = function() {
    var node = document.createElement(`li`);
    var textnode = document.createTextNode(shoppingItems[10]);
    node.appendChild(textnode);
    document.getElementById(`shopping`).appendChild(node);
}
var button = document.querySelector(`.duck`);
button.addEventListener(`click`, addItemToShoppingCart);

var addItemToShoppingCart = function() {
    var node = document.createElement(`li`);
    var textnode = document.createTextNode(shoppingItems[11]);
    node.appendChild(textnode);
    document.getElementById(`shopping`).appendChild(node);
}
var button = document.querySelector(`.pork`);
button.addEventListener(`click`, addItemToShoppingCart);



// var listItems = [` one`, ` two`, ` three `];

// var addNumbersToShoppingCart = function() {
// var newNode = document.createElement(`li`);
// var newTextnode = document.createTextNode(listItems);
// newNode.appendChild(newTextnode);
// document.getElementById(`shopping`).appendChild(newNode);
// }
// addNumbersToShoppingCart();
