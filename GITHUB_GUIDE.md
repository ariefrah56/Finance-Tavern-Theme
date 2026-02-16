# 📤 Panduan Upload ke GitHub & Akses dari iPhone

Panduan lengkap untuk meng-upload **The Tavern Ledger Finance App** ke GitHub dan mengaksesnya dari iPhone Anda.

## 📋 Daftar Isi

1. [Persiapan Akun GitHub](#1-persiapan-akun-github)
2. [Cara Upload Files ke GitHub](#2-cara-upload-files-ke-github)
3. [Mengaktifkan GitHub Pages](#3-mengaktifkan-github-pages)
4. [Mengakses dari iPhone](#4-mengakses-dari-iphone)
5. [Add to Home Screen di iPhone](#5-add-to-home-screen-di-iphone)
6. [Troubleshooting](#6-troubleshooting)

---

## 1. Persiapan Akun GitHub

### 1.1 Buat Akun GitHub (jika belum punya)

1. Buka **https://github.com**
2. Klik tombol **"Sign up"** di pojok kanan atas
3. Isi form pendaftaran:
   - **Username**: Pilih username unik (contoh: `johndoe`)
   - **Email**: Masukkan email Anda
   - **Password**: Buat password yang kuat
4. Verifikasi dengan puzzle (untuk membuktikan bukan robot)
5. Klik **"Create account"**
6. Verifikasi email Anda (cek inbox dan klik link verifikasi)
7. ✅ Akun GitHub siap!

### 1.2 Login ke GitHub

1. Buka **https://github.com**
2. Klik **"Sign in"**
3. Masukkan username/email dan password
4. Klik **"Sign in"**

---

## 2. Cara Upload Files ke GitHub

### Metode 1: Via Web Interface (Paling Mudah)

#### Step 1: Buat Repository Baru

1. **Login** ke GitHub
2. Klik tombol **"+"** di pojok kanan atas
3. Pilih **"New repository"**
4. Isi form:
   - **Repository name**: `tavern-finance` (atau nama lain yang Anda suka)
   - **Description**: `Medieval themed finance management app` (opsional)
   - **Public/Private**: Pilih **Public** (agar bisa pakai GitHub Pages gratis)
   - **✅ Centang** "Add a README file" (opsional, tapi direkomendasikan)
   - **PENTING**: Jangan add .gitignore atau license dulu (nanti saja)
5. Klik **"Create repository"**
6. ✅ Repository berhasil dibuat!

#### Step 2: Upload Files

1. Di halaman repository Anda, klik **"Add file"** → **"Upload files"**
2. **Drag & drop** atau **klik "choose your files"**:
   - Pilih semua file dari folder `d:\My_App\Finance\`:
     - ✅ `index.html`
     - ✅ `styles.css`
     - ✅ `app.js`
     - ✅ `manifest.json`
     - ✅ `README.md`
3. Tunggu upload selesai (akan muncul tanda centang hijau)
4. Di bagian bawah, tulis **commit message**:
   - Contoh: `Add medieval tavern finance app files`
5. Klik tombol **"Commit changes"** (hijau)
6. ✅ Files berhasil terupload!

### Metode 2: Via Git Command Line (Advanced)

Jika Anda familiar dengan command line:

```bash
# 1. Install Git (jika belum ada)
# Download dari: https://git-scm.com/downloads

# 2. Navigate ke folder aplikasi
cd d:\My_App\Finance

# 3. Initialize Git
git init

# 4. Add semua files
git add .

# 5. Commit
git commit -m "Initial commit: Medieval Tavern Finance App"

# 6. Connect ke GitHub
git remote add origin https://github.com/USERNAME/tavern-finance.git
# Ganti USERNAME dengan username GitHub Anda

# 7. Push ke GitHub
git branch -M main
git push -u origin main

# 8. Login dengan GitHub credentials saat diminta
```

---

## 3. Mengaktifkan GitHub Pages

GitHub Pages akan meng-host aplikasi Anda secara **GRATIS** dan bisa diakses dari mana saja!

### Step-by-Step Aktivasi:

1. **Buka repository** Anda di GitHub:
   - URL: `https://github.com/USERNAME/tavern-finance`
   - Ganti `USERNAME` dengan username GitHub Anda

2. Klik tab **"Settings"** (⚙️ icon, di bagian atas repository)

3. Di sidebar kiri, klik **"Pages"** (di bawah section "Code and automation")

4. Di section **"Source"**:
   - **Branch**: Pilih **`main`** (atau `master`)
   - **Folder**: Pilih **`/ (root)`**
   - Klik **"Save"**

5. **Tunggu 1-2 menit** (GitHub sedang build & deploy)

6. **Refresh halaman** Settings → Pages

7. Anda akan melihat banner hijau:
   ```
   ✅ Your site is live at https://USERNAME.github.io/tavern-finance/
   ```

8. ✅ **Aplikasi sudah LIVE di internet!**

### URL Aplikasi Anda

Format URL:
```
https://USERNAME.github.io/REPOSITORY-NAME/
```

Contoh:
- Username: `johndoe`
- Repository: `tavern-finance`
- **URL Final**: `https://johndoe.github.io/tavern-finance/`

⚠️ **PENTING**: 
- Ganti `USERNAME` dengan username GitHub Anda
- Ganti `REPOSITORY-NAME` dengan nama repository Anda
- URL **case-sensitive** (huruf besar/kecil berpengaruh)

---

## 4. Mengakses dari iPhone

### Step 1: Buka Safari di iPhone

1. Buka aplikasi **Safari** di iPhone Anda
2. Tap **address bar** (kotak URL di atas)
3. Ketik URL aplikasi Anda:
   ```
   https://USERNAME.github.io/tavern-finance/
   ```
   (Ganti USERNAME dengan username GitHub Anda)
4. Tap **"Go"** atau **enter**

### Step 2: Tunggu Loading

1. Halaman akan loading
2. Anda akan melihat **The Tavern Ledger** muncul
3. UI medieval dengan warna coklat, gold, dan parchment akan terlihat
4. ✅ Aplikasi berhasil dibuka!

### Step 3: Test Aplikasi

1. **Coba tambah transaksi:**
   - Pilih "💰 Gold Earned"
   - Masukkan amount: `100000`
   - Pilih category: `Ale Sales`
   - Tap "📜 Record in Ledger"

2. **Cek dashboard:**
   - Balance akan update otomatis
   - Transaction akan muncul di list

3. **Test filter:**
   - Gunakan dropdown filter
   - List akan update

4. ✅ Semua fitur berfungsi!

---

## 5. Add to Home Screen di iPhone

Agar aplikasi bisa dibuka seperti **native app** tanpa browser bar!

### Langkah-langkah Detail:

#### Step 1: Buka di Safari

1. Pastikan aplikasi sudah terbuka di Safari
2. URL: `https://USERNAME.github.io/tavern-finance/`

#### Step 2: Tap Share Button

1. Tap tombol **Share** (kotak dengan panah ke atas) di bagian bawah Safari
2. Icon ada di **bottom toolbar** atau **top right** (tergantung iOS version)

#### Step 3: Add to Home Screen

1. Scroll menu share **ke bawah**
2. Cari dan tap **"Add to Home Screen"** (icon plus dalam kotak)
3. Akan muncul preview:
   - **Icon**: Icon default atau custom (jika sudah ada)
   - **Name**: Default "The Tavern Ledger" (bisa diganti)

#### Step 4: Customize & Add

1. **Ubah nama** jika mau (contoh: `Finance` atau `Tavern`)
2. Tap **"Add"** di pojok kanan atas
3. ✅ Icon muncul di **Home Screen**!

#### Step 5: Launch Aplikasi

1. **Tap icon** "The Tavern Ledger" di home screen
2. Aplikasi akan buka **fullscreen** (tanpa Safari address bar)
3. Terlihat & terasa seperti **native app**!

### Screenshot Lokasi Icon:

Icon akan muncul di home screen iPhone Anda, bisa:
- Di halaman utama
- Di App Library
- Bisa dipindah ke folder

---

## 6. Troubleshooting

### ❌ Problem: "GitHub Pages tidak aktif"

**Solusi:**
1. Cek di Settings → Pages
2. Pastikan Source = `main` branch, `/ (root)` folder
3. Klik "Save" lagi
4. Tunggu 2-3 menit
5. Refresh halaman

### ❌ Problem: "404 Not Found"

**Penyebab:**
- URL salah
- Repository name typo
- GitHub Pages belum aktif

**Solusi:**
1. Cek URL: `https://USERNAME.github.io/REPO-NAME/`
2. Pastikan semua huruf kecil dan sesuai repository name
3. Verifikasi di Settings → Pages bahwa site sudah live
4. Clear browser cache

### ❌ Problem: "Aplikasi tidak muncul di iPhone"

**Solusi:**
1. Pastikan koneksi internet aktif
2. Coba reload (pull down di Safari)
3. Coba akses dari browser lain (Chrome iOS)
4. Cek apakah URL sudah benar

### ❌ Problem: "Chart tidak muncul"

**Penyebab:**
- Chart.js CDN blocked atau slow

**Solusi:**
1. Tunggu loading lebih lama
2. Refresh halaman
3. Cek koneksi internet
4. Pastikan tidak ada ad-blocker yang block CDN

### ❌ Problem: "Data hilang setelah close app"

**Penyebab:**
- localStorage ter-clear
- Browser setting (Private Mode)

**Solusi:**
1. Jangan gunakan Private/Incognito mode
2. Jangan clear browser data
3. Data tersimpan per-browser (jika ganti browser, data beda)

### ❌ Problem: "Add to Home Screen tidak ada"

**Penyebab:**
- Bukan Safari browser
- iOS version lama

**Solusi:**
1. Pastikan pakai **Safari** (bukan Chrome/Firefox)
2. Update iOS ke versi terbaru
3. Coba restart iPhone

### ❌ Problem: "Aplikasi lemot di iPhone"

**Solusi:**
1. Clear Safari cache: Settings → Safari → Clear History and Data
2. Restart Safari
3. Restart iPhone
4. Pastikan tidak banyak tab terbuka

---

## 7. Update Aplikasi (Edit Files)

### Cara Update Files yang Sudah Diupload:

#### Via Web Interface:

1. **Buka repository** di GitHub
2. **Klik file** yang mau diedit (contoh: `styles.css`)
3. Klik **icon pensil** (✏️) "Edit this file" di pojok kanan
4. **Edit** kode di editor
5. Scroll ke bawah, tulis commit message:
   - Contoh: `Update medieval colors`
6. Klik **"Commit changes"**
7. **Tunggu 1-2 menit** untuk GitHub Pages update
8. **Refresh aplikasi** di iPhone (pull down)
9. ✅ Perubahan akan terlihat!

#### Upload File Baru:

1. Klik **"Add file"** → **"Upload files"**
2. Drag file baru
3. Commit changes
4. Done!

---

## 8. Tips & Best Practices

### ✅ DO's:

1. **Commit messages yang jelas**
   - ❌ Bad: `update`
   - ✅ Good: `Fix transaction delete button styling`

2. **Test di desktop dulu** sebelum test di iPhone

3. **Backup data penting** (screenshot transaksi)

4. **Gunakan Safari** untuk best PWA experience di iOS

5. **Share URL** dengan teman/keluarga untuk test

### ❌ DON'Ts:

1. **Jangan hardcode** data penting di code

2. **Jangan upload** file yang tidak perlu (`.DS_Store`, `node_modules`, dll)

3. **Jangan lupa commit** setelah edit

4. **Jangan gunakan Private Mode** (data tidak akan tersimpan)

---

## 9. Sharing Aplikasi

### Cara Share ke Orang Lain:

1. **Berikan URL**:
   ```
   https://USERNAME.github.io/tavern-finance/
   ```

2. **Atau buat QR Code**:
   - Buka: https://www.qr-code-generator.com/
   - Paste URL aplikasi Anda
   - Generate QR Code
   - Share QR code (orang tinggal scan)

3. **Via Social Media**:
   - WhatsApp: Share link
   - Instagram: Share link di bio
   - Email: Send link

### Demo Account (Opsional):

Jika mau share dengan data demo:
1. Tambahkan beberapa transaksi sample
2. Screenshot dashboard
3. Share screenshot + link

---

## 10. Next Steps (Opsional)

### A. Custom Domain

Jika mau pakai domain sendiri (contoh: `myfinance.com`):

1. Beli domain di provider (Niagahoster, GoDaddy, dll)
2. Di GitHub Settings → Pages → Custom domain
3. Masukkan domain Anda
4. Update DNS settings di provider domain
5. Done!

### B. PWA Icons

Buat icon custom untuk "Add to Home Screen":

1. Buat icon 192x192 dan 512x512 (PNG)
2. Upload ke repository
3. Update `manifest.json`:
   ```json
   "icons": [
     {
       "src": "icon-192.png",
       "sizes": "192x192",
       "type": "image/png"
     }
   ]
   ```

### C. Analytics

Track berapa orang yang akses:

1. Buat akun Google Analytics
2. Tambahkan tracking code di `index.html`
3. Monitor traffic

---

## 📞 Butuh Bantuan?

### Resources:

- **GitHub Docs**: https://docs.github.com
- **GitHub Pages**: https://pages.github.com
- **PWA Guide**: https://web.dev/progressive-web-apps/

### Comunity:

- **GitHub Community**: https://github.community
- **Stack Overflow**: https://stackoverflow.com (tag: github-pages)

---

## 🎉 Selamat!

Aplikasi **The Tavern Ledger** Anda sudah:
- ✅ Diupload ke GitHub
- ✅ Live di internet (GitHub Pages)
- ✅ Bisa diakses dari iPhone
- ✅ Bisa di-install ke Home Screen
- ✅ Siap digunakan kapan saja!

**May your coffers overflow with gold!** ⚔️🍺💰
