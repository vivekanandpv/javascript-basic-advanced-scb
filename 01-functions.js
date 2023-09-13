//  named function declaration

function square(n) {
  return n * n;
}

//  function expression
const fn = function (n) {
  return n * n;
};

console.log(square(5));
console.log(fn(5));
