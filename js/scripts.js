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



let pizza1 = new Pizza(["cheese", "pepperoni", "onion"], "medium");
pizza1.pizzaCost(pizza1.toppings, pizza1.size);

