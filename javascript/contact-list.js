var kontak = {
fansyah :{
    firstName: "Fansyah",
    email: "fans@ggg.com",
    Telp: "555-5555",
    },

steve:{
    firstName: "steve",
    email: "fans@ggg.com",
    Telp: "784-5555",
   }
};

var list = function(kontak) {
    for (var key in kontak) {
        console.log(key);
    }
}

var search = function(name) {
    for (var key in kontak) {
        if (kontak[key].kontak === name) {
            console.log(kontak[key]);
            return kontak[key];
        } 	
    }
}
search("fansyah");
list(kontak);