function traditionalNiladic() {
  console.log('traditionalNiladic');
}

function traditionalMonadic(a) {
  console.log('traditionalMonadic', a);
}

function traditionalDiadic(a, b) {
  console.log('traditionalDiadic', a, b);
}

const arrowNiladic = () => {
  console.log('arrowNiladic');
};

const arrowMonadic = (a) => {
  console.log('traditionalMonadic', a);
};

const arrowDiadic = (a, b) => {
  console.log('arrowDiadic', a, b);
};
