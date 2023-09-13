//  Create a function which displays the Fibonacci series for 10  numbers: 0,1,1,2,3,5,8,13,21,25

const printFibonacciSeries = (n) => {
  const series = [0, 1];
  while (series.length < n) {
    const a = series[series.length - 2];
    const b = series[series.length - 1];
    series.push(a + b);
  }

  console.log(series.toString());
};

printFibonacciSeries(10);

console.log('\n------------------------------------------\n');

//  Create a function which display the table of 8

const printTable = (n) => {
  for (let i = 1; i <= 10; ++i) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
};

printTable(8);

console.log('\n------------------------------------------\n');

//  Create an array of Strings which contains the values like [“sTandarD”,”CharTered”,”banK”] then replace the array values with corresponding Uppercase values only.
//	[“STANDARD”,”CHARTERED”,”BANK”]

const ar = ['sTandarD', 'CharTered', 'banK'];
ar1 = ar.map((e) => e.toUpperCase());
console.log(ar1);
