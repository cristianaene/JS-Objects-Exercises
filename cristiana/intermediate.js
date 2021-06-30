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

class Motorcycle extends Car {
    wheels;
    constructor (a, b, c, d, e, f) {
        super (a, b, c, d, e);
        this.wheels = f;
    }
    printNoOfWheels() {
        return " and has " + this.wheels + " wheels";
    }
}

var motorcycle = new Motorcycle ("Kawasaki", "", "pink", 500, 3, 2);
document.write("<br>");
document.write(motorcycle.printCarName());
document.write(motorcycle.printNoOfWheels());

var motorcycle2 = new Motorcycle ("KTM", "", "gray", 450, 5, 3);
document.write("<br>");
document.write(motorcycle2.printCarName());
document.write(motorcycle2.printNoOfWheels());

var motorcycle3 = new Motorcycle ("BMW", "", "black", 550, 5, 2);
document.write("<br>");
document.write(motorcycle3.printCarName());
document.write(motorcycle3.printNoOfWheels());

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

class Fish extends Animal {
    water;
    constructor (a, b, c, d, e, f, g) {
        super (a, b, c, d, e, f);
        this.water = f;
    }
    printTypeOfWater() {
        return " that lives in " + this.water + " water";
    }
}

var peacockbass = new Fish ("Peacock Bass", "fish", "yellow", 2, 1, "fresh");
document.write("<br>");
document.write(peacockbass.printAnimalName());
document.write(peacockbass.printTypeOfWater());


var clownfish = new Fish ("Clownfish", "fish", "orange", 2, 1, "salt");
document.write("<br>");
document.write(clownfish.printAnimalName());
document.write(clownfish.printTypeOfWater());

var tuna = new Fish ("Tuna", "fish", "gray", 15, 3, "ocean");
document.write("<br>");
document.write(tuna.printAnimalName());
document.write(tuna.printTypeOfWater());


// Person

class Person {
    name;
    age;
    weight;

    constructor (a, b, c) {
        this.name = a;
        this.age = b;
        this.weight = c;
    }

    printPersonName() {
        return "My name is " +  this.name + " and I am " + this.age + " years old";
    }
}

class Profession extends Person {
    profession;
    constructor (a, b, c, d) {
        super (a, b, c);
        this.profession = d;
    }

    printTypeOfProfession() {
        return " and my profession is " + this.profession;
    }
}

var programmer = new Profession ("Ana", 25, 60, "programmer");
document.write("<br>");
document.write(programmer.printPersonName());
document.write(programmer.printTypeOfProfession());

var doctor = new Profession ("Maria", 45, 80, "doctor");
document.write("<br>");
document.write(doctor.printPersonName());
document.write(doctor.printTypeOfProfession());

var student = new Profession ("Daniel", 15, 60, "student");
document.write("<br>");
document.write(student.printPersonName());
document.write(student.printTypeOfProfession());