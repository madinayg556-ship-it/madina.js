// Data belanja
const hargaBarang = 25000;
const jumlahBarang = 4;
const diskon = 10;

// Menghitung total harga
const totalHarga = hargaBarang * jumlahBarang;

// Menghitung besaran diskon
const besarDiskon = totalHarga * diskon / 100;

// Menghitung total pembayaran
const totalPembayaran = totalHarga - besarDiskon;

// Menampilkan hasil
console.log("Total harga sebelum diskon: Rp" + totalHarga);
console.log("Besaran diskon: Rp" + besarDiskon);
console.log("Total pembayaran: Rp" + totalPembayaran);