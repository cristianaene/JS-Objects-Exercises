// Create 3 different classes:  car, animal and person. These classes should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 

// Each class should have at least one method, that shows some properties about each theme. Feel free to expand on that.

// Create, using the classes, 3 different objects for each class.

// The results from the methods must be printed on the browser too.






//Define a class CAR



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

document.write("<br>");
var VW = new Car("VW", "Jetta", "silver" );
document.write("<br>");
document.write(VW.printCarDescription());

var FIAT = new Car("FIAT", "500", "white" );
document.write("<br>");
document.write(FIAT.printCarDescription());

var Renault = new Car("Renault", "Clio", "black" );
document.write("<br>");
document.write(Renault.printCarDescription());



//Define a class ANIMAL

class  Animal  {

    name;
    weight;
    color;

    constructor(a,b,c) {
       this.name = a;
        this.weight = b;
        this.color = c;
   }

   printAnimalDescription() {
       return  "The name is " + this.name + " the weight is " + this.weight + " and the color is " + this.color;
   }
}

document.write("<br>");
var cat = new Animal ("cat", "9", "gray");
document.write("<br>");
document.write(cat.printAnimalDescription());


var monkey = new Animal ("monkey", "13", "brown");
document.write("<br>");
document.write(monkey.printAnimalDescription());

var dog = new Animal ("dog", "12", "black");
document.write("<br>");
document.write(dog.printAnimalDescription());


//Define a class PERSON

class  Person  {

    name;
    profession;
    age;

    constructor(a,b,c) {
       this.name = a;
        this.profession = b;
        this.age = c;
   }

   printPersonDescription() {
       return  "The name is " + this.name + " the profession is " + this.profession + " and the age is " + this.age;
   }
}

document.write("<br>");
var Anna = new Person ("Anna", "artist", "40");
document.write("<br>");
document.write(Anna.printPersonDescription());


var Otto = new Person ("Otto", "bartender", "30");
document.write("<br>");
document.write(Otto.printPersonDescription());

var Leo = new Person ("Leo", "25", "developer");
document.write("<br>");
document.write(Leo.printPersonDescription());