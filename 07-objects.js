//  object is an encapsulation of properties

const book = {
  title: 'Learning JavaScript',
  edition: 5,
  languages: ['English', 'Japanese', 'Hindi'],
  publisher: {
    legalName: 'ABC Publishers',
    address: '44, Park Lane, London',
    country: 'UK',
  },
  isInPrint: true,
  foo: function () {
    console.log('foo in book', this.title);
  },
  bar() {
    console.log('bar in book', this.title);
  },
  baz: () => {
    console.log('baz in book', this.title);
  },
};
