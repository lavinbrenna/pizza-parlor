# _Pizza Planet Site_

#### By _**Brenna Lavin**_

#### _Pizza ordering site for Toy Story's Pizza Planet_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _jQuery_
* _Bootstrap_

## Description

_This website uses Javascript objects to take user input and display a price based on the amount of toppings and size. This website is modeled after Toy Story's Pizza Planet, and draws inspiration(and the starry gif background) from Portland's Pizza Jerk restaurant_

## Setup/Installation Requirements

* _Clone repo to local machine_
* _Navigate to index.html_
* _Open in default browser_
* _Else Navigate to GH Pages Link_
* [Pizza Planet](https://lavinbrenna.github.io/pizza-parlor/)

## Known Bugs

* _Pizza toppings do not display properly when clicking, they show under all pizzas rather than each pizza they are attributed to_

## Tests

```
Description: Pizza()

Test: "It should create a new pizza object with an array of toppings and size"
Code:
et pizza1 = new Pizza(["extra cheese", "pepperoni", "onion"], "medium");
pizza1;
Expected Output:
Pizza{toppings: Array(3), size: 'medium'}
size: 'medium'
toppings: (3)(["extra cheese","pepperoni","onion"])
```

```
Description: totalCost()

Test: "It should calculate total cost based on amount of toppings and size"
Code:
let pizza1 = new Pizza(["extra cheese", "pepperoni", "onion"], "medium");
pizza1.totalCost();
Expected Output:
13.50
```

```
Description: PizzaCart()

Test: "It should create a pizza cart object with pizzas, and cartTotal"
Code:
let pizzaCart1 = new PizzaCart()
Expected Output:
PizzaCart{pizzas:{...}, cartTotal:0}
```

```
Description: addPizza()

Test: "It should add all pizzas to a cart, assign ids, keep track of total price"
Code:
pizzaCart.addPizza();
Expected Output:
pizzaCart{pizzas: (2)(pizza1{}, pizza2{})}
```

```
Description: assignId()

Test: "It should assign ids to each pizza"
Code:
pizzaCart.assignId()
Expected Output:
pizzaCart{}
```

```
Description: findPizza()

Test: "It should find pizza based on id number"
Code:
pizzaCart.findPizza(1)
Expected Output:
pizza{['extra cheese','pepperoni','onion', 'medium', 13.5, 1]}
```

```
Description: getToppings()

Test: "It should get value of ingredient checkboxes and add to inputtedToppings array"
Code:
getToppings()
Expected Output:
["extra cheese", "pepperoni"]
```

```
Description: uncheckToppings()

Test: "It should uncheck checkboxes when adding a pizza to pizzaCart"
Code:
uncheckToppings();
Expected Output:
unchecked boxes
```

```
Description: deletePizza()

Test: "It should delete a pizza with a given id from the pizzaCart"
Code:
pizzaCart.deletePizza(1);
Expected Output:
pizzaCart{pizzas:{...}, totalCost: 0}
```

```
Description: CustomerAddressBook()

Test: "It should create an empty address book for holding customer information"
Code:
let addressBook = new AddressBook();
Expected Output:
AddressBook{customers:{...}, currentId:0}
```

```
Description: DeliveryCustomer()

Test: "It should create a new delivery customer object";
Code:
let customer1 = new DeliveryCustomer('Brenna', 'Lavin', '5035551444','brenna@lavin.com', '1234 ne emerson', 'portland', 'or', '97211');
Expected Output:
PizzaCustomer(firstName: 'Brenna', lastName: 'Lavin', phoneNumber:'5035551444',emailAddress: 'brenna@lavin.com', streetAddress: '1234 ne emerson', city: 'portland', state:'or', zip:'97211')
```

```
Description: PickUpCustomer()

Test: "It should create a new pickup customer object";
Code:
let customer1 = new PickUpCustomer('Brenna', 'Lavin', '5035551444','brenna@lavin.com');
Expected Output:
PizzaCustomer(firstName: 'Brenna', lastName: 'Lavin', phoneNumber:'5035551444',emailAddress: 'brenna@lavin.com')
```

```
Description assignCustomerId()

Test: "It should assign an id to each customer object";
Code:
let customer1 = new DeliveryCustomer('Brenna', 'Lavin', 5035551444','brenna@lavin.com' '1234 ne emerson', 'portland', 'or', '97211');
addressBook.assignCustomerId(customer1);
Expected Output:
AddressBook{customers:{...}, currentId:1}
```

```
Description addCustomer()

Test: "It should add a customer to the customer address book object"
Code:
let customer1 = new DeliveryCustomer('Brenna', 'Lavin', 5035551444','brenna@lavin.com' '1234 ne emerson', 'portland', 'or', '97211');
addressBook.addCustomer(customer1);
Expected Output:
AddressBook{customers:{customer1}, currentId:1}
```
## License

MIT License

Copyright (c) [2022] [Brenna Lavin]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
