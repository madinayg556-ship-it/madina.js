// Membuat object produk
const produk = {
    nama: "Laptop",
    harga: 7500000,
    stok: 10,
    kategori: "Elektronik"
};

// Menampilkan nama dan harga
console.log("Nama produk:", produk.nama);
console.log("Harga produk:", produk.harga);

// Mengubah stok menjadi 5
produk.stok = 5;

// Menambahkan properti merek
produk.merek = "Lenovo";

// Menampilkan seluruh properti object
console.log("Seluruh data produk:", produk);