// menampilkan pilihan pengguna alert (batu, kertas atau gunting)
var pilihanPengguna = prompt("Pilihlah batu, kertas atau gunting?");

// computer memilih secara acak
var pilihanKomputer = Math.random();
//"batu" jika nilanya 0<0.34, kertas nilainya 0.34<0.67, dan kelingking nilainya 0.67-1
if (pilihanKomputer < 0.34) {
	pilihanKomputer = "batu";
} 
else if(pilihanKomputer <0.67) {
	pilihanKomputer = "kertas";
} 
else if(pilihanKomputer <=1){
	pilihanKomputer = "gunting";
}

// menampilkan di console bisa memakai dev tool
console.log("Komputer memilih: " + pilihanKomputer);

//jika komputer dan pengguna memilih ya sama
var compare = function(pilihan1, pilihan2) {
    if (pilihan1 === pilihan2) {
        return "Tidak ada yang menang!"
    }

// logika pertama ketika pengguna memilih batu
    else if (pilihan1 === "batu") {
        if (pilihan2 === "gunting") {
            return "batu menang"
        }
        else {
 	return "kertas menang"
        }
    }     

// logika kedua ketika pengguna memilih kertas
    else if (pilihan1 === "kertas") {
        if (pilihan2 === "batu") {
        return "kertas menang"
        }
        else {
            return "gunting menang"
        }
    }

// logika ketiga jika pengguna memilih gunting
    else if (pilihan1 === "gunting") {
        if (pilihan2 === "kertas") {
            return "gunting menang"
        }
        else {
            return "batu menang"
        }
    }
}
compare(pilihanPengguna, pilihanKomputer);