// cars
class Car {
    brand;
    type;
    color;
    weight;
    age;

    constructor (a, b, c, d, e) {
        this.brand = a;
        this.type = b;
        this.color = c;
        this.weight = d;
        this.age = e;
    }
    printCarName() {
        return "The producer is " + this. brand + " and is " + this.color + " " + this.type;
    }
}

var audi  = new Car ("Audi", "convertible", "red", 2000, 3);
document.write("<br>");
document.write(audi.printCarName());

var bmw  = new Car ("BMW", "limo", "black", 2500, 3);
document.write("<br>");
document.write(bmw.printCarName());

var dacia  = new Car ("Dacia", "cheap", "white", 1500, 10);
document.write("<br>");
document.write(dacia.printCarName());

// animals

class Animal {
    name;
    type;
    color;
    weight;
    age;

    constructor (a, b, c, d, e) {
        this.name = a;
        this.type = b;
        this.color = c;
        this.weight = d;
        this.age = e;
    }

    printAnimalName() {
        return "My name is " +  this.name + " and I am a " + this.color + " " + this.type;
    }
}

var cat = new Animal("Ungi", "cat", "black", 5, 1);
document.write("<br>");
document.write(cat.printAnimalName());


var dog = new Animal("Max", "dog", "brown", 20, 12);
document.write("<br>");
document.write(dog.printAnimalName());