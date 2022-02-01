//Business Logic

//Pizza logic
function PizzaCart(){
  this.pizzas = {};
  this.cartTotal = 0;
  this.pizzaId = 0;
}

PizzaCart.prototype.assignId = function(){
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

CustomerAddressBook.prototype.assignCustomerId = function(){
  this.customerId += 1;
  return this.customerId;
}

CustomerAddressBook.prototype.addCustomer = function(pizzaCustomer){
  pizzaCustomer.id = this.assignCustomerId();
  this.pizzaCustomers[pizzaCustomer.id] = pizzaCustomer;
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
let pizzaCart = new PizzaCart();
let pizzaAddressBook = new CustomerAddressBook();

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

function showPizza(pizzaId){
  const pizza = pizzaCart.findPizza(pizzaId);
  $("#show-pizza").toggle();
  $(".toppings").html(pizza.toppings.join(", "));
}
function uncheckIngredients(){
  const checkedToppings = $("input:checkbox[name=ingredient]").each(function(){
    if($("input:checkbox[name=ingredient]").prop('checked', true)){
      $("input:checkbox[name=ingredient]").prop('checked', false);
    }
  })
}

function saveDeliveryCustomer(){
  const inputtedFirstName = $("input#firstName").val();
  const inputtedLastName = $("input#lastName").val();
  const inputtedPhoneNumber = $("input#phoneNumber").val();
  const inputtedEmailAddress = $("input#emailAddress").val();
  const inputtedStreetAddress = $("input#streetAddress").val();
  const inputtedCity = $("input#city").val();
  const inputtedState = $("select#state option:selected").val();
  const inputtedZipCode = $("input#zipCode").val();
  customer = new DeliveryCustomer(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailAddress, inputtedStreetAddress, inputtedCity, inputtedState, inputtedZipCode);
  return customer;
}

function savePickUpCustomer(){
  const inputtedFirstName = $("input#pFirstName").val();
  const inputtedLastName = $("input#pLastName").val();
  const inputtedPhoneNumber = $("input#pPhoneNumber").val();
  const inputtedEmailAddress = $("input#pEmailAddress").val();
  customer = new PickUpCustomer(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailAddress);
  return customer;
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
  $("button#pSaveCustomer").click(function(){
    pizzaAddressBook.addCustomer(savePickUpCustomer());
    $(".sizeColumn, .toppingsColumn, button.submit").show();
    $(".pickUpForm, .deliveryForm").hide();
    })
  $("button#saveCustomer").click(function(){
    pizzaAddressBook.addCustomer(saveDeliveryCustomer());
    $(".sizeColumn, .toppingsColumn, button.submit").show();
    $(".pickUpForm, .deliveryForm").hide();
    })
  $("ul#pizzas").on('click','li', function(){
    showPizza(this.id);
  })
  }

$(document).ready(function(){
  addPizzaListeners();
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

