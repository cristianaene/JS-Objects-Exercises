// Create 3 different objects for 3 different themes:  car, animal and person. The end result should be 9 objects in total.  These objects should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 

// Each object should have at least one method, that shows some properties about each theme. Feel free to expand on that.

// The message from the methods must be printed on the browser too.



// CARS

    var car = {
        brand: "VW",
        model: "jetta",
        color: "silver",
       
        printCarDescription: function(){
        return "The brand is " + this.brand + " the model is " + this.model + " and the color is " + this.color;
     } 

    }

console.log(car.printCarDescription());
document.write(car.printCarDescription());


        
    var car = {
        brand: "FIAT",
        model: "500",
        color: "white",
       
        printCarDescription: function(){
        return "The brand is " + this.brand + " the model is " + this.model + " and the color is " + this.color;
    } 

    }

    console.log(car.printCarDescription());
    document.write("<br>")
    document.write(car.printCarDescription());


    var car = {
        brand: "Renault",
        model: "Clio",
        color: "black",
       
        printCarDescription: function(){
        return "The brand is " + this.brand + " the model is " + this.model + " and the color is " + this.color;
    } 

    }

    console.log(car.printCarDescription());
    document.write("<br>")
    document.write(car.printCarDescription());
    document.write("<br>")

    // ANIMAL

    var animal = {
        type: "cat",
        weight: "9",
        color: "gray",
       
        printAnimalDescription: function(){
        return "The animal is " + this.type + " the weight is " + this.weight + " and the color is " + this.color;
    } 

    }

    console.log(animal.printAnimalDescription());
    document.write("<br>")
    document.write(animal.printAnimalDescription());

    var animal = {
        type: "monkey",
        weight: "13",
        color: "brown",
       
        printAnimalDescription: function(){
        return "The animal is " + this.type + " the weight is " + this.weight + " and the color is " + this.color;
    } 

    }

    console.log(animal.printAnimalDescription());
    document.write("<br>")
    document.write(animal.printAnimalDescription());

    var animal = {
        type: "dog",
        weight: "12",
        color: "black",
       
        printAnimalDescription: function(){
        return "The animal is " + this.type + " the weight is " + this.weight + " and the color is " + this.color;
    } 

    }

    console.log(animal.printAnimalDescription());
    document.write("<br>")
    document.write(animal.printAnimalDescription());
    document.write("<br>")

    // PERSON

    var person = {
        name: "Anna",
        profession: "artist",
        age: "40",
       
        printPersonDescription: function(){
        return "The person is " + this.name + " the profession is " + this.profession + " and the age is " + this.age;
    } 

    }

    console.log(person.printPersonDescription());
    document.write("<br>")
    document.write(person.printPersonDescription());

    var person = {
        name: "Otto",
        profession: "bartender",
        age: "30",
       
        printPersonDescription: function(){
        return "The person is " + this.name + " the profession is " + this.profession + " and the age is " + this.age;
    } 

    }

    console.log(person.printPersonDescription());
    document.write("<br>")
    document.write(person.printPersonDescription());

    var person = {
        name: "Leo",
        profession: "developer",
        age: "25",
       
        printPersonDescription: function(){
        return "The person is " + this.name + " the profession is " + this.profession + " and the age is " + this.age;
    } 

    }

    console.log(person.printPersonDescription());
    document.write("<br>")
    document.write(person.printPersonDescription());