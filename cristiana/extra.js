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
console.log(hotelCismigiu.nights);
document.write(hotelCismigiu.showAvailability(7));