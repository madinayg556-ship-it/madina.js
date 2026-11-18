const nama = "       muhammad rizki        ";

// Menghilangkan spasi awal dan akhir
const namaBersih = nama.trim();

// Mengubah menjadi huruf besar
const hurufBesar = namaBersih.toUpperCase();

// Mengubah menjadi huruf kecil
const hurufKecil = namaBersih.toLowerCase();

// Menghitung jumlah karakter
const jumlahKarakter = namaBersih.length;

// Menampilkan hasil
console.log("Nama asli:", nama);
console.log("Nama setelah trim:", namaBersih);
console.log("Huruf besar:", hurufBesar);
console.log("Huruf kecil:", hurufKecil);
console.log("Jumlah karakter:", jumlahKarakter);