// function factory

// function createCar(name,model,color,) {
//     return {
//         name: name,
//         model: model,
//         color:color,
//         start: function() {
//             console.log("start engin")
//         },
//         end: function() {
//             console.log("end engin")
//         }
//     }
// }
// const bmw = createCar("BMW", 2025, "red");
// console.log(createCar().start())
// bmw.start;
// console.log(bmw)


// constructor function
function Car(car, modal, color) {
    this.car = car;
    this.modal = modal;
    this.color = color;
}

const car1 = new Car("brm", 2022, "red");
let car2 = new Car("fff", 2022, "red");

Car.prototype.stop = function () {
  console.log(`${this.name} engin stop`);
};
    console.log(car1)
    car1.stop();
    console.log(car2);
