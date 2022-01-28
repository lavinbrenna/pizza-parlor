# _Pizza Pie in the Sky_

#### By _**Brenna Lavin**_

#### _Pizza ordering site_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _jQuery_
* _Bootstrap_

## Description

_This website uses Javascript objects to take user input and display a price based on the amount of toppings and size._

## Setup/Installation Requirements

* _Clone repo to local machine_
* _Navigate to index.html_
* _Open in default browser_
* _Else, Navigate to the following GH pages link_
* _[GH PAGES LINK](www.github.com)_

## Known Bugs

* _WIP_
* _No known bugs_

## Tests

Description: Pizza()

Test: "It should create a new pizza object with an array of toppings"
Code:
let pizza1 = new Pizza(["extra cheese", "pepperoni","onion"]);
pizza1;
Expected Output:
Pizza{toppings: Array(3)} toppings: (3)(["extra cheese","pepperoni","onion"])

Test: "It should create a new pizza object with a size"
Code:
let pizza1 = new Pizza(["extra cheese", "pepperoni", "onion"], medium);
pizza1;
Expected Output:
Pizza{toppings: Array(3), size} toppings: (3)(["extra cheese","pepperoni","onion"], medium)

## License

MIT License

Copyright (c) [year] [fullname]

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

