const fn = function (a, b) {
  console.log(a, b);
};

//  correct number of parameters
fn(5, 4);

//  too many
fn(5, 4, 7, 8);

//  too few
fn(5);

//  none
fn();
