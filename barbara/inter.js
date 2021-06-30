// Now you will extend the classes from the previous exercise. 
// Car: Extend with a child class called Motorbike, that will inherit the property and methods from the parent Class, as well as create new properties and methods that are unique to this class. Example: number of wheels.
// Animal: Extend with a child class called Fish, that will inherit the property and methods from the parent Class, as well as create new properties and methods that are unique to this class. Example: type of water it inhabits.
// Person: Extend with a child class called Profession, that will inherit the property and methods from the parent Class, as well as create new properties and methods that are unique to this class. Example: job position.
// Create, using the Child classes, 3 different objects for each class.
// The results from the methods must be printed on the browser too.



// CAR - MOTORCYCLE

class  Car  {

    brand;
    model;
    color;

    constructor(a,b,c) {
       this.brand = a;
        this.model = b;
        this.color = c;
   }

   printCarDescription() {
       return  "The brand is " + this.brand + " the model is " + this.model + " and the color is " + this.color;
   }
}


 class Motorcycle extends Car{

    wheels;


    constructor(a,b,c,d) {

        super(a,b,c);

        this.wheels = d;

    }

   printWheels(){
    return " and has " + this.wheels + " wheels ";

   }

}

    var moto1 = new Motorcycle ("Honda", "Gold Wing", "silver", 2); 
    document.write("<br>");
    document.write(moto1.printCarDescription());
    document.write(moto1.printWheels());
    console.log(moto1.printCarDescription());
    console.log(moto1.printWheels());

    var moto2 = new Motorcycle ("Vespa", "S125", "green", 2); 
    document.write("<br>");
    document.write(moto2.printCarDescription());
    document.write(moto2.printWheels());
    console.log(moto2.printCarDescription());
    console.log(moto2.printWheels());
    

    var moto3 = new Motorcycle ("Harley-Davidson", "Road King", "black", 2); 
    document.write("<br>");
    document.write(moto3.printCarDescription());
    document.write(moto3.printWheels());
    console.log(moto3.printCarDescription());
    console.log(moto3.printWheels());
    

    
// ANIMAL - FISH
    

class  Animal  {

    name;
    weight;
    color;

    constructor(a,b,c) {
       this.name = a;
        this.weight = b;
        this.color = c;
   }

   printAnimalhDescription() {
       return  "The name is " + this.name + " the weight is " + this.weight + " and the color is " + this.color;
   }
}


 class Fish extends Animal{

    species;


    constructor(a,b,c,d) {

        super(a,b,c);

        this.species = d;

    }

   printSpecies(){
    return " and belongs to the " + this.species + " species ";

   }

}

    var fish1 = new Fish ("fish", 2000, "yellow", "Arapaima"); 
    document.write("<br>");
    document.write(fish1.printAnimalDescription());
    document.write(fish1.printSpecies());
    console.log(fish1.printAnimalDescription());
    console.log(fish1.printSpecies());

    var fish2 = new Fish ("Vespa", "S125", "green", 2); 
    document.write("<br>");
    document.write(fish2.printAnimalDescription());
    document.write(fish2.printSpecies());
    console.log(fish2.printAnimalDescription());
    console.log(fish2.printSpecies());
    

    var fish3 = new Fish ("Vespa", "S125", "green", 2); 
    document.write("<br>");
    document.write(fish3.printAnimalDescription());
    document.write(fish3.printSpecies());
    console.log(fish3.printAnimalDescription());
    console.log(fish3.printSpecies());
    


