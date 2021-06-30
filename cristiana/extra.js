class Hotel {
    name;
    nights;
    address;
    image;

    constructor (a, c, d) {
        this.name = a;
        this.nights = (Math.random()*10).toFixed();
        this.address = c;
        this.image = d;
    }

    showAvailability(inputNights){
       if (this.nights >= inputNights) {
        return "I'll reserve";
       } else {
        return "Sorry, no available nights for " + this.name;
       }
    }
}

var hotelCismigiu = new Hotel ("Hotel Cismigiu", "Bd. Regina Elisabeta, Bucharest, Romania", "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/25/28/2528018_v3.jpeg");
console.log(hotelCismigiu.name + " " + hotelCismigiu.nights);

var hotelCapsa = new Hotel ("Hotel Capsa", "Calea Victoriei, Bucharest, Romania", "https://drscdn.500px.org/photo/155335533/q%3D80_m%3D1500_of%3D1/v2?sig=cd470a6d161f8511f53dbcbb5f0cead9b8215165d8042563670af2854b4a62f3");
console.log(hotelCapsa.name + " " +hotelCapsa.nights);

var hotelLido = new Hotel ("Hotel Lido", "Bulevardul Magheru, Bucharest, Romania", "https://ak-d.tripcdn.com/images/220q1900000167kuy3AB1_R_550_412_R5_Q70_D.jpg");
console.log(hotelLido.name + " " + hotelLido.nights);

// calculates nights availability when select is changed
function availability () {
    let selectedHotel = document.getElementById("hotel").value;
    if (selectedHotel == "cismigiu") {
        document.getElementById("feedback").innerHTML= hotelCismigiu.showAvailability(document.getElementById("noofnights").value);
        document.getElementById("hotelimg").src= hotelCismigiu.image;
    } else if (selectedHotel == "capsa") {
        document.getElementById("feedback").innerHTML= hotelCapsa.showAvailability(document.getElementById("noofnights").value);
        document.getElementById("hotelimg").src= hotelCapsa.image;
    } else {
        document.getElementById("feedback").innerHTML= hotelLido.showAvailability(document.getElementById("noofnights").value);
        document.getElementById("hotelimg").src= hotelLido.image;
    }
}

document.getElementById("hotel").addEventListener("change", availability);
