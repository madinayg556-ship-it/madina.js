const nilai = [80, 75, 90, 65, 85, 95, 70];

// Menampilkan seluruh nilai
console.log("Seluruh nilai:", nilai);

// Mencari nilai tertinggi
const nilaiTertinggi = Math.max(...nilai);
console.log("Nilai tertinggi:", nilaiTertinggi);

// Mencari nilai terendah
const nilaiTerendah = Math.min(...nilai);
console.log("Nilai terendah:", nilaiTerendah);

// Menghitung rata-rata
let total = 0;

for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];
}

const rataRata = total / nilai.length;
console.log("Rata-rata:", rataRata);

// Menghitung jumlah mahasiswa yang lulus
const mahasiswaLulus = nilai.filter(n => n >= 75);

console.log("Jumlah mahasiswa yang lulus:", mahasiswaLulus.length);