//Business Logic

//Pizza logic
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


//Customer Logic

function CustomerAddressBook(){
this.pizzaCustomers = {};
this.customerId = 0;
}

CustomerAddressBook.prototype.assignCustomerId = function(pizzaCustomer){
  this.customerId += 1;
  return this.customerId;
}

CustomerAddressBook.prototype.addCustomer = function(customer){
  customer.id = this.assignCustomerId();
  this.pizzaCustomers[customer.id] = customer;
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
    $(".pickUpForm").show();
    $(".pickUpOrDelivery").hide();
  });
  $("button.delivery").click(function(){
    $(".deliveryForm").show();
    $(".pickUpOrDelivery").hide();
  })
  $("button#saveCustomer").click(function(){
    $(".sizeColumn, .toppingsColumn, button.submit").show();
    $(".pickUpForm, .deliveryForm").hide();
    let pizzaAddressBook = new CustomerAddressBook();
    let customer = saveCustomer();
    pizzaAddressBook.addCustomer(customer);
  })
}

function saveCustomer(){
  let customer;
  const inputtedFirstName = $("input#firstName").val();
  const inputtedLastName = $("input#lastName").val();
  const inputtedPhoneNumber = $("input#phoneNumber").val();
  const inputtedEmailAddress = $("input#emailAddress").val();
  const inputtedStreetAddress = $("input#streetAddress").val();
  const inputtedCity = $("input#city").val();
  const inputtedState = $("select#state option:selected").val();
  const inputtedZipCode = $("input#zipCode").val();
  if(inputtedFirstName != "" && inputtedLastName != "" && inputtedPhoneNumber != "" && inputtedEmailAddress != "" && inputtedStreetAddress === "" && inputtedCity === "" && !inputtedState && inputtedZipCode === ""){
    customer = new PickUpCustomer(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailAddress);
    console.log('pickup');
    return customer;
  }else if(inputtedFirstName != "" && inputtedLastName != "" && inputtedPhoneNumber != "" && inputtedEmailAddress != "" && inputtedStreetAddress != "" && inputtedCity != "" && inputtedState && inputtedZipCode != ""){
    customer = new DeliveryCustomer(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailAddress, inputtedStreetAddress, inputtedCity, inputtedState, inputtedZipCode);
    console.log('delivery');
    return customer;
  }
}
$(document).ready(function(){
  addPizzaListeners();
  let pizzaCart = new PizzaCart();
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

