//Business Logic
function PizzaCart(){
  this.pizzas = {};
  this.cartTotal = 0;
  this.pizzaId = 0;
}

PizzaCart.prototype.assignId = function(pizza){
  this.pizzaId += 1;
  return this.pizzaId;
}
PizzaCart.prototype.addPizza = function(pizza){
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
  this.cartTotal += pizza.pizzaCost(pizza.toppings, pizza.size);
}
function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
  this.totalCost = 0;
}

Pizza.prototype.pizzaCost = function(toppings, size){
  size = this.size;
  toppings = this.toppings;
  console.log(size, toppings);
  this.totalCost = 0;
  for(let i = 0; i < toppings.length; i ++){
    this.totalCost += .50;
  }
  if(size === 'small'){
    this.totalCost += 10.00;
    return this.totalCost;
  }else if(size === 'medium'){
    this.totalCost += 12.00;
    return this.totalCost;
  }else{
    this.totalCost += 14.00;
    return this.totalCost;
  }
}

//User Interface Logic

function getToppings(){
  const toppings = [];
  const checkedToppings = $("input:checkbox[name=ingredient]:checked").each(function(){
    toppings.push($(this).val());
 })
 return toppings;
}


$(document).ready(function(){
  $("form#pizzaForm").submit(function(){
    event.preventDefault();
    const inputtedSize = $("select#pizzaSize option:selected").val();
    const inputtedToppings = getToppings();
    let pizza = new Pizza(inputtedToppings, inputtedSize);
    console.log(pizza.pizzaCost(pizza.inputtedSize, pizza.inputtedToppings));
  })
})

