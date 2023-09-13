class Vehicle {
  //  encapsulation of members
  //  2 kinds: data (field), function (method)

  constructor(make, model, year) {
    //    fields or data members
    this.model = model;
    this.make = make;
    this.year = year;
  }

  //  a method
  drive() {
    console.log(`${this.make} ${this.model} is driving...`);
  }

  get makeOfVehicle() {
    return this.make;
  }

  get modelOfVehicle() {
    return this.model;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
  }

  honk() {
    console.log(`${this.modelOfVehicle} is honking...`);
  }
}

const v1 = new Car('Mercedes-Benz', 'C220', 2022);
const v2 = new Car('Volvo', 'S90', 2021);

console.log(v1.makeOfVehicle);
console.log(v2.modelOfVehicle);

console.log(v1 instanceof Car);
console.log(v1 instanceof Vehicle);

v1.drive();
v2.drive();
v2.honk();
