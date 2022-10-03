var beanCounter = 10;
var ordertype = 5;
// 2 global variables above not acting in code below into function
function x(ordertype) {
  var beanCounter = 0;
  if (ordertype == "order") {
    console.log((ordertype = "+1"));
  } else {
    console.log((ordertype = ordertype + 2));
  }
  return beanCounter;
}

let result = x(22);
console.log(ordertype);
