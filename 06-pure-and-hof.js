//  pure function
//  identical input => identical output
const square = (n) => n * n;

//  higher-order function
//  accepts another function as a parameter
//  leads to function composability
const hof = (f) => {
  console.log('hof');
  console.log(f(4)); //  delegation
};

console.log(square(5));

//  passing a function to hof as a parameter
hof(square);

//  using arrow functions for hof
hof((a) => a * 8);
