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
PizzaCart.prototype.findPizza = function(id){
  if(this.pizzas[id]!= undefined){
    return this.pizzas[id];
  }
  return false;
}
PizzaCart.prototype.deletePizza = function(id){
  if(this.pizzas[id] === undefined){
    return false;
  }
  this.cartTotal -= this.pizzas[id].pizzaCost(this.pizzas[id].toppings, this.pizzas[id].size);
  delete this.pizzas[id];
  return true;
}

function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
  this.totalCost = 0;
}

Pizza.prototype.pizzaCost = function(toppings, size){
  size = this.size;
  toppings = this.toppings;
  this.totalCost = 0;
  for(let i = 0; i < toppings.length; i ++){
    this.totalCost += .50;
    parseFloat(this.totalCost.toFixed(2));
  }
  if(size === 'small'){
    this.totalCost += 10.00;
    return parseFloat(this.totalCost.toFixed(2));
  }else if(size === 'medium'){
    this.totalCost += 12.00;
    return parseFloat(this.totalCost.toFixed(2));
  }else{
    this.totalCost += 14.00;
    return parseFloat(this.totalCost.toFixed(2));
  }
}

function CustomerAddressBook(){
this.pizzaCustomers = {};
this.currentId = 0;
}

function PickUpCustomer(firstName, lastName, phoneNumber, emailAddress){
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress;
}

function DeliveryCustomer(firstName, lastName, phoneNumber,emailAddress, streetAddress, city, state, zipCode){
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress;
  this.streetAddress = streetAddress;
  this.city = city;
  this.state = state;
  this.zipCode = zipCode;
}
//User Interface Logic
function getToppings(){
  const toppings = [];
  const checkedToppings = $("input:checkbox[name=ingredient]:checked").each(function(){
    toppings.push($(this).val());
  })
  return toppings;
}

function displayCart(cartToDisplay){
  $("#orderCart").show();
  let pizzasList = $("ul#pizzas");
  let htmlForPizzas = "";
  Object.keys(cartToDisplay.pizzas).forEach(function(key){
    const pizza = cartToDisplay.findPizza(key);
    htmlForPizzas += "<li id=" + pizza.id + ">" + pizza.size + " pizza - $" + pizza.totalCost.toFixed(2) + "</li>";
  });
  pizzasList.html(htmlForPizzas);
}

function uncheckIngredients(){
  const checkedToppings = $("input:checkbox[name=ingredient]").each(function(){
    if($("input:checkbox[name=ingredient]").prop('checked', true)){
      $("input:checkbox[name=ingredient]").prop('checked', false);
    }
  })
}
function addPizzaListeners(){
  $("button.pickUp").click(function(){
    $(".pickUpForm, .sizeColumn, .toppingsColumn, button.submit").show();
    $(".pickUpOrDelivery").hide();
  });
  $("button.delivery").click(function(){
    $(".deliveryForm, .sizeColumn, .toppingsColumn, button.submit").show();
    $(".pickUpOrDelivery").hide();
  })
}
$(document).ready(function(){
  addPizzaListeners();
  let pizzaCart = new PizzaCart();
  console.log(pizzaCart);
  let pizzaAddressBook = new CustomerAddressBook();
  console.log(pizzaAddressBook);
  $(".pickUpForm, .deliveryForm, .sizeColumn, .toppingsColumn, button.submit").hide();
  $("form#pizzaForm").submit(function(){
    event.preventDefault();
    const inputtedSize = $("select#pizzaSize option:selected").val();
    const inputtedToppings = getToppings();
    let pizza = new Pizza(inputtedToppings, inputtedSize);
    pizzaCart.addPizza(pizza);
    displayCart(pizzaCart);
    uncheckIngredients();
    $(".orderTotal").text(parseFloat(pizzaCart.cartTotal).toFixed(2));
  })
})

