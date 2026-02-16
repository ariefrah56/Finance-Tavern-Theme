# 📱 Cara Buka Aplikasi di HP (Tanpa GitHub)

## 🚀 Quick Start (3 Langkah Mudah!)

### 1️⃣ Start Server di PC
**Double-click** file: `start_server.bat`

Server akan running dan menampilkan:
```
Your IP Address:  192.168.1.100
Buka di HP: http://192.168.1.100:8000
```

### 2️⃣ Pastikan HP & PC di WiFi yang Sama
- PC dan HP harus terhubung ke **WiFi yang sama**
- Contoh: Keduanya connect ke "WiFi-Rumah"

### 3️⃣ Buka di HP
- Buka **Safari** (iPhone) atau **Chrome** (Android)
- Ketik URL yang muncul di server:
  ```
  http://192.168.1.100:8000
  ```
  (Ganti dengan IP yang muncul di layar PC Anda)
- Tekan **Go** atau **Enter**
- ✅ Aplikasi Golek Tavern akan terbuka!

---

## 📝 Troubleshooting

### ❌ Problem: "Can't reach this page"

**Solusi:**
1. ✅ Pastikan server masih running di PC (jangan tutup window)
2. ✅ Cek IP address benar (coba ketik ulang)
3. ✅ Pastikan HP & PC di WiFi yang sama
4. ✅ Coba matikan firewall di PC sementara

### ❌ Problem: "Python tidak terinstall"

**Solusi:**
1. Download Python: https://www.python.org/downloads/
2. Install Python (centang "Add Python to PATH")
3. Restart PC
4. Double-click `start_server.bat` lagi

### ❌ Problem: Firewall Block

**Solusi Windows:**
1. Settings → Windows Security
2. Firewall & network protection
3. Allow an app through firewall
4. Cari "Python" → Centang "Private" dan "Public"
5. Save

---

## 🎯 Add to Home Screen (Seperti App Asli!)

### Untuk iPhone (Safari):
1. Buka aplikasi di Safari
2. Tap tombol **Share** (⬆️)
3. Scroll dan pilih **"Add to Home Screen"**
4. Nama: "Golek Tavern"
5. Tap **Add**
6. Icon muncul di home screen! 🎉

### Untuk Android (Chrome):
1. Buka aplikasi di Chrome
2. Tap **⋮** (3 dots)
3. Pilih **"Add to Home screen"**
4. Nama: "Golek Tavern"
5. Tap **Add**
6. Icon muncul di home screen! 🎉

---

## ⚠️ Catatan Penting

- ✅ **Server harus tetap running** di PC saat akses dari HP
- ✅ **Jangan tutup window** PowerShell/Command Prompt
- ✅ **PC harus menyala** untuk HP bisa akses
- ❌ Data **tidak tersimpan** setelah server dimatikan (gunakan localStorage browser)
- 💡 Untuk **permanent solution**, gunakan GitHub Pages (saat GitHub sudah bisa diakses)

---

## 🛑 Stop Server

Untuk stop server:
1. Buka window PowerShell/Command Prompt
2. Press **Ctrl + C**
3. Ketik **Y** (yes)
4. Enter

---

## 🎉 Selesai!

Aplikasi Golek Tavern Finance Manager sekarang bisa diakses dari HP Anda!

Jika nanti GitHub sudah bisa diakses, ikuti panduan di **GITHUB_GUIDE.md** untuk permanent hosting gratis.
