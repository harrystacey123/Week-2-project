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

var shoppingCart = function() {
    
}