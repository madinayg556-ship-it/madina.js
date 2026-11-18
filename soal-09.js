// Data mahasiswa
const mahasiswa = [
    { nama: "Andi", nilai: 85 },
    { nama: "Budi", nilai: 60 },
    { nama: "Citra", nilai: 90 },
    { nama: "Doni", nilai: 70 },
    { nama: "Eka", nilai: 95 }
];

// Menampilkan mahasiswa yang lulus
const lulus = mahasiswa.filter(m => m.nilai >= 75);

console.log("Mahasiswa yang lulus:");
console.log(lulus);

// Menampilkan mahasiswa yang tidak lulus
const tidakLulus = mahasiswa.filter(m => m.nilai < 75);

console.log("Mahasiswa yang tidak lulus:");
console.log(tidakLulus);

// Menghitung jumlah mahasiswa yang lulus
console.log("Jumlah mahasiswa lulus:", lulus.length);

// Mengurutkan berdasarkan nilai tertinggi
const urutanNilai = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);

console.log("Urutan nilai tertinggi:");
console.log(urutanNilai);