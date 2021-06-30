
// Create 3 different objects for 3 different themes:  car, animal and person. The end result should be 9 objects in total.  These objects should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 

//Each object should have at least one method, that shows some properties about each theme. Feel free to expand on that.

//The message from the methods must be printed on the browser too.


// cars
var car = {
    brand: "Audi",
    type: "convertible",
    color: "red", 
    weight: 2000, 
    age: 3,
    printCarName: function () {
        return "The producer is " + this. brand + " and is " + this.type;
    }

}
console.log(car.printCarName());
document.write(car.printCarName());

var car2 = {
    brand: "BMW",
    type: "limo",
    color: "black", 
    weight: 2500, 
    age: 1,
    
    printCarName: function () {
        return "The producer is " + this. brand + " and is " + this.type;
    }

}
console.log(car2.printCarName());
document.write("<br>")
document.write(car2.printCarName())


var car3 = {
    brand: "Dacia",
    type: "cheap",
    color: "white", 
    weight: 1500, 
    age: 10,
    
    printCarName: function () {
        return "The producer is " + this. brand + " and is " + this.type;
    }

}
console.log(car3.printCarName());
document.write("<br>")
document.write(car3.printCarName())

// animals
var animal = {
    name: "Ungi",
    type: "cat",
    color: "black", 
    weight: 5, 
    age: 1,
    printAnimalName: function () {
        return "My name is " +  this.name + " and I am a " + this.color + " " + this.type;
    }
}
console.log(animal.printAnimalName());
document.write("<br>")
document.write(animal.printAnimalName())

var animal2 = {
    name: "Max",
    type: "dog",
    color: "brown", 
    weight: 20, 
    age: 12,
    printAnimalName: function () {
        return "My name is " +  this.name + " and I am a " + this.color + " " + this.type;
    }
}
console.log(animal2.printAnimalName());
document.write("<br>")
document.write(animal2.printAnimalName())

var animal3 = {
    name: "Chubby",
    type: "horse",
    color: "white", 
    weight: 300, 
    age: 6,
    printAnimalName: function () {
        return "My name is " +  this.name + " and I am a " + this.color + " " + this.type;
    }
}
console.log(animal3.printAnimalName());
document.write("<br>")
document.write(animal3.printAnimalName())


// persons
var person = {
    name: "Ana",
    age: 25,
    weight: 55,
    printPersonName: function () {
        return "My name is " +  this.name + " and I am " + this.age + " years old";
    }

}

console.log(person.printPersonName());
document.write("<br>")
document.write(person.printPersonName())

var person2 = {
    name: "Maria",
    age: 45,
    weight: 80, 
    printPersonName: function () {
        return "My name is " +  this.name + " and I am " + this.age + " years old";
    }

}
console.log(person2.printPersonName());
document.write("<br>")
document.write(person2.printPersonName())

var person3 = {
    name: "Daniel",
    age: 15,
    weight: 60, 
    printPersonName: function () {
        return "My name is " +  this.name + " and I am " + this.age + " years old";
    }

}
console.log(person3.printPersonName());
document.write("<br>")
document.write(person3.printPersonName())     
      