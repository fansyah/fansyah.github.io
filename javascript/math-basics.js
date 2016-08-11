// JavaScript Document
// Create Some Basics Mathematics Function
/*
1. Buatlah fungsi pangkat angka agar kode berikut dapat berjalan
parameter pertama: bilangan yang dipangkatkan
parameter kedua: bilangan pangkat
return: hasil perpangkatan
pangkatAngka(2, 3) // 2 pangkat 3
menghasilkan "8" */
 // Answer below
pangkatAngka= Math.pow(2,3);


/*2. Buatlah fungsi akar kuadrat, menggunakan objek Math, agar kode berikut dapat berjalan
parameter pertama: bilangan yang diakarkan
return: hasil akar
akarKuadrat(9) // akar kuadrat 9
menghasilkan "3" */
// Answer below 
akarKuadrat = Math.sqrt(9);



/*3. Buatlah fungsi hipotenusa setiga siku-siku ABC agar kode berikut dapat berjalan
parameter pertama: panjang A dalam cm
parameter kedua: panjang B dalam cm

return: panjang C dalam cm
hipotenusa(3, 4) // akar dari (3^2 + 4^2)
menghasilkan "5 cm" */
// Answer below 
hipotenusa = Math.hypot(3, 4);

// atau dibawah ini (sama saja sih)
   var panjangA = 3;
   var panjangB = 4;
   var luas_lingkaran = Math.hypot(panjangA, panjangB);
   console.log(luas_lingkaran +" cm");


/*4. Buatlah fungsi luas lingkaran agar kode berikut dapat berjalan:
parameter pertama: panjang jari-jari dalam cm
return: hasil luas lingkaran
luasLingkaran(7) // pi * r^2
menghasilkan "154 cm" */
// Answer below
luasLingkaran = Math.PI(7)*7*7;