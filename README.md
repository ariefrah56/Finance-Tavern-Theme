# 🏰 The Tavern Ledger - Medieval Finance Manager

Aplikasi manajemen keuangan berbasis web dengan tema **Medieval Tavern** yang unik! Lacak "gold coins" Anda seperti pemilik tavern di abad pertengahan. 🍺⚔️

## 🎯 Fitur Utama

### 💰 Dashboard Keuangan
- **Treasury Balance** - Total saldo emas Anda
- **Gold Earned** - Total pemasukan bulan ini
- **Gold Spent** - Total pengeluaran bulan ini
- Real-time update otomatis

### 📊 Cash Flow Chronicle
- Visualisasi grafik 7 hari terakhir
- Chart interaktif menampilkan income vs expense
- Mudah melihat tren keuangan

### 📝 Transaction Management
- **Tambah Transaksi** dengan form lengkap:
  - Type: Gold Earned (income) / Gold Spent (expense)
  - Amount dalam Rupiah (IDR)
  - Category (berbeda untuk income & expense)
  - Description
  - Date picker
- **Kategori Income**: Ale Sales, Room Rentals, Food Service, Entertainment, Other
- **Kategori Expense**: Supplies, Ingredients, Wages, Repairs, Taxes, Other

### 🔍 Filter & Search
- Filter by type (All/Income/Expense)
- Filter by category
- Counter jumlah transaksi

### 📱 Mobile-Friendly
- **Responsive design** untuk semua ukuran layar
- **Optimized untuk iPhone**
- Bisa di-**add to Home Screen** (PWA)
- Tampilan fullscreen seperti native app

### 💾 Auto-Save
- Data tersimpan otomatis di browser (localStorage)
- Tidak perlu login atau koneksi internet
- Data tetap ada setelah tutup browser

## 🎨 Medieval Tavern Theme

- 📜 **Parchment backgrounds** - Kertas tua yang aesthetic
- 🪵 **Wood grain textures** - Tekstur kayu coklat hangat
- ✍️ **Medieval fonts** - MedievalSharp, Cinzel, Uncial Antiqua
- 💰 **Gold accents** - Warna emas untuk highlight
- 🕯️ **Warm color palette** - Browns, golds, dark reds
- ⚔️ **Medieval ornaments** - Sword, beer mug, coins icons

## 🚀 Cara Menggunakan

### 1. Buka di Browser

**Desktop/Laptop:**
```
Klik dua kali file: d:\My_App\Finance\index.html
Atau buka di browser dan drag file tersebut
```

**iPhone/iPad:**
```
1. Upload file ke server/GitHub Pages, atau
2. Gunakan local server:
   - Install Python (jika belum ada)
   - Buka terminal di folder Finance
   - Jalankan: python -m http.server 8000
   - Akses dari iPhone: http://[IP-komputer]:8000
```

### 2. Add to Home Screen (iPhone)

1. Buka aplikasi di Safari
2. Tap tombol **Share** (kotak dengan panah)
3. Pilih **"Add to Home Screen"**
4. Beri nama "Tavern Ledger"
5. Tap **"Add"**
6. Icon akan muncul di home screen!

### 3. Mulai Tracking Keuangan

**Tambah Income:**
1. Pastikan **"💰 Gold Earned"** dipilih
2. Masukkan amount (contoh: 500000)
3. Pilih category (contoh: Ale Sales)
4. Tulis deskripsi
5. Pilih tanggal
6. Klik **"📜 Record in Ledger"**

**Tambah Expense:**
1. Klik **"🪙 Gold Spent"**
2. Masukkan amount
3. Pilih category (contoh: Supplies)
4. Tulis deskripsi
5. Pilih tanggal
6. Klik **"Record in Ledger"**

**Filter Transaksi:**
- Gunakan dropdown untuk filter by type atau category
- List akan otomatis update

**Hapus Transaksi:**
- Klik tombol **"🗑️ Remove"** pada transaksi yang ingin dihapus
- Konfirmasi penghapusan

## 📱 Fitur PWA (Progressive Web App)

Setelah di-add to home screen, aplikasi akan:
- ✅ Buka fullscreen tanpa browser bar
- ✅ Punya icon sendiri di home screen
- ✅ Terasa seperti native app
- ✅ Bisa diakses offline (setelah pertama kali dibuka)

## 💡 Tips Penggunaan

1. **Konsisten Input Data**
   - Input transaksi setiap hari agar akurat
   - Gunakan deskripsi yang jelas

2. **Review Berkala**
   - Cek dashboard untuk lihat balance
   - Analisis chart untuk trend pengeluaran

3. **Kategorisasi**
   - Gunakan category yang tepat
   - Memudahkan filter dan analisis

4. **Backup Data**
   - Data tersimpan di browser
   - Screenshot atau export secara berkala
   - Jika clear browser data, transaksi akan hilang

## 🐛 Troubleshooting

**Q: Data hilang setelah clear browser**
- Data disimpan di localStorage browser
- Jangan clear browsing data jika ingin simpan transaksi
- Untuk versi production, perlu backend/cloud storage

**Q: Chart tidak muncul**
- Pastikan koneksi internet aktif (untuk load Chart.js CDN)
- Refresh halaman

**Q: Tidak bisa add to home screen**
- Pastikan menggunakan browser Safari di iOS
- Fitur PWA tidak support di semua browser

## 🎉 Medieval Vocabulary Guide

- **Tavern** = Kedai minuman (bar) di abad pertengahan
- **Ledger** = Buku besar/catatan keuangan
- **Gold Coins** = Koin emas (mata uang)
- **Treasury** = Perbendaharaan
- **Moon** = Bulan (periode waktu)

## 📁 File Structure

```
Finance/
├── index.html       # UI structure
├── styles.css       # Medieval theme styling
├── app.js          # Application logic
└── manifest.json   # PWA configuration
```

## 🙏 Selamat Mengelola Keuangan!

Semoga aplikasi ini membantu Anda melacak cash flow dengan cara yang fun dan aesthetic! 

**May your coffers overflow with gold!** ⚔️🍺💰
