function fn(a) {
  //  scope of a is throughout the function

  let p = 10; //  scope of p is from this point onwards till the end of block

  if (a > 5) {
    let q = 9; //  scope of q is till the end of this if block
    console.log(a, p, q);
  }

  console.log(q); //  error! q is out of scope!
}

fn(8);
