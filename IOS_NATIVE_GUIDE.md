# 📱 Cara Membuat Aplikasi iOS Mandiri (Native App)

Panduan lengkap untuk mengkonversi **The Tavern Ledger** web app menjadi **aplikasi iOS native** yang bisa di-publish ke App Store.

## 📋 Pilihan Metode

Ada **4 cara utama** untuk membuat aplikasi iOS mandiri:

| Metode | Complexity | Biaya | Hasil | Time |
|--------|-----------|-------|-------|------|
| **1. Capacitor** | ⭐⭐ Mudah | Gratis + $99/tahun | Native wrapper | 1-2 hari |
| **2. React Native** | ⭐⭐⭐ Medium | Gratis + $99/tahun | True native | 1-2 minggu |
| **3. Flutter** | ⭐⭐⭐ Medium | Gratis + $99/tahun | True native | 1-2 minggu |
| **4. Swift/SwiftUI** | ⭐⭐⭐⭐ Hard | Gratis + $99/tahun | Pure native | 2-4 minggu |

---

## 🏆 REKOMENDASI: Capacitor (Paling Mudah!)

**Capacitor** adalah cara **tercepat dan termudah** karena **menggunakan kode web yang sudah ada** (HTML/CSS/JS), tinggal di-wrap jadi native app!

### ✅ Keuntungan:
- Kode web existing bisa langsung dipakai (90% sama!)
- Tidak perlu belajar bahasa baru
- Cross-platform (iOS + Android sekaligus)
- Akses native features (camera, push notifications, dll)
- Free & open source

### ❌ Kekurangan:
- Sedikit lebih lambat dari pure native
- File size lebih besar
- Tetap perlu Mac untuk build iOS

---

## 1️⃣ METODE 1: Capacitor (RECOMMENDED)

### Persyaratan:

#### Hardware:
- ✅ **Mac** (MacBook, iMac, Mac mini, dll)
  - Minimum: macOS 11+ (Big Sur or newer)
  - RAM: 8GB+ recommended
- ⚠️ **TIDAK BISA di Windows** untuk build iOS app

#### Software:
- ✅ **Xcode** (gratis dari App Store)
- ✅ **Node.js** (gratis dari nodejs.org)
- ✅ **Apple Developer Account** ($99/tahun untuk publish ke App Store)

### Langkah-langkah Detail:

#### A. Install Prerequisites

**1. Install Node.js:**
```bash
# Download dari: https://nodejs.org
# Install versi LTS (Long Term Support)
# Verifikasi instalasi:
node --version
npm --version
```

**2. Install Xcode:**
```bash
# Buka App Store di Mac
# Search "Xcode"
# Klik "Get" atau "Install"
# Tunggu download selesai (12GB+, bisa 1-2 jam)

# Setelah install, buka Xcode
# Accept license agreement
# Install additional components
```

**3. Install Xcode Command Line Tools:**
```bash
xcode-select --install
```

**4. Install CocoaPods:**
```bash
sudo gem install cocoapods
```

#### B. Setup Project

**1. Install Capacitor:**
```bash
# Navigate ke folder Finance
cd d:\My_App\Finance

# Install Capacitor
npm init -y
npm install @capacitor/core @capacitor/cli
npm install @capacitor/ios
```

**2. Initialize Capacitor:**
```bash
npx cap init

# Isi prompt:
# App name: The Tavern Ledger
# App ID: com.yourname.tavernledger (format: com.companyname.appname)
# Web directory: . (current directory, karena file sudah ada)
```

**3. Add iOS Platform:**
```bash
npx cap add ios
```

**4. Sync Web Assets:**
```bash
npx cap sync
```

#### C. Configure App

**1. Edit capacitor.config.json:**
```json
{
  "appId": "com.yourname.tavernledger",
  "appName": "Tavern Ledger",
  "webDir": ".",
  "bundledWebRuntime": false,
  "ios": {
    "contentInset": "always"
  }
}
```

**2. Update manifest.json** (sudah ada):
```json
{
  "name": "The Tavern Ledger",
  "short_name": "Tavern Ledger",
  "start_url": "./index.html",
  "display": "standalone"
}
```

#### D. Open di Xcode

```bash
npx cap open ios
```

Xcode akan terbuka dengan project iOS!

#### E. Configure di Xcode

**1. Set Team & Signing:**
- Klik project name di sidebar kiri (paling atas)
- Tab "Signing & Capabilities"
- **Team**: Pilih your Apple ID (atau add account)
- **Bundle Identifier**: Akan auto-fill dari capacitor config

**2. Set App Icon:**
- Klik "App" → "Assets.xcassets" → "AppIcon"
- Drag & drop icon sizes yang diperlukan:
  - 20x20, 29x29, 40x40, 60x60, 76x76, 83.5x83.5, 1024x1024
- Bisa generate di: https://www.appicon.co

**3. Set Display Name:**
- Klik project → General
- **Display Name**: "Tavern Ledger"

**4. Set Version:**
- **Version**: 1.0
- **Build**: 1

#### F. Test di Simulator

**1. Pilih Simulator:**
- Top bar Xcode: Klik device dropdown
- Pilih "iPhone 15" atau device lain

**2. Run:**
- Klik tombol **Play** (▶️) atau tekan **Cmd+R**
- Simulator akan terbuka
- App akan install dan launch
- ✅ Test semua fitur!

#### G. Test di iPhone Device

**1. Connect iPhone:**
- Hubungkan iPhone ke Mac dengan kabel
- Unlock iPhone
- Trust computer jika diminta

**2. Select Device:**
- Top bar Xcode: Pilih iPhone Anda (bukan simulator)

**3. Run:**
- Klik Play (▶️)
- App akan install ke iPhone
- **Pertama kali**: Settings → General → VPN & Device Management → Trust developer
- Launch app dari home screen
- ✅ Test di real device!

#### H. Publish ke App Store

**1. Daftar Apple Developer:**
- Buka: https://developer.apple.com
- Sign in dengan Apple ID
- Enroll in Apple Developer Program
- Bayar $99/tahun
- Tunggu approval (1-2 hari)

**2. Create App di App Store Connect:**
- Buka: https://appstoreconnect.apple.com
- Klik "My Apps" → "+"
- **New App**:
  - Platform: iOS
  - Name: The Tavern Ledger
  - Language: English (atau Indonesian)
  - Bundle ID: com.yourname.tavernledger (dari Xcode)
  - SKU: tavernledger01

**3. Fill App Information:**
- **Screenshots**: 
  - iPhone 6.7": 1290x2796 (required)
  - iPhone 6.5": 1242x2688
  - Minimal 3-5 screenshots
- **Description**: Tulis deskripsi menarik
- **Keywords**: finance, budget, money, tracking, etc
- **Category**: Finance
- **Age Rating**: 4+

**4. Archive & Upload:**
```bash
# Di Xcode:
# 1. Product → Archive
# 2. Tunggu build selesai
# 3. Window akan muncul dengan archive
# 4. Klik "Distribute App"
# 5. Pilih "App Store Connect"
# 6. Pilih "Upload"
# 7. Next → Next → Upload
# 8. Tunggu upload selesai (5-30 menit)
```

**5. Submit for Review:**
- Kembali ke App Store Connect
- App status akan jadi "Ready to Submit"
- Klik "Submit for Review"
- Isi questionnaire
- Submit!

**6. Tunggu Approval:**
- Review time: 24-48 jam
- Apple akan test app
- Jika approved, app akan LIVE di App Store!
- Jika rejected, fix issues dan submit lagi

---

## 2️⃣ METODE 2: React Native

Untuk rebuild app dari scratch dengan React Native.

### Kapan Pilih React Native?
- ✅ Mau belajar React (popular framework)
- ✅ Butuh performa terbaik
- ✅ Mau support Android juga
- ✅ Punya waktu 1-2 minggu untuk develop

### Stack:
- **Language**: JavaScript/TypeScript
- **Framework**: React Native
- **Styling**: React Native StyleSheet (mirip CSS)
- **State**: React Hooks (useState, useEffect)
- **Storage**: AsyncStorage (mirip localStorage)
- **Charts**: Victory Native atau React Native Chart Kit

### Quickstart:
```bash
# Install React Native CLI
npm install -g react-native-cli

# Create new project
npx react-native init TavernLedger

# Navigate to project
cd TavernLedger

# Install dependencies
npm install @react-native-async-storage/async-storage
npm install react-native-chart-kit

# Run on iOS (need Mac + Xcode)
npx react-native run-ios
```

### Learning Curve:
- 📚 Perlu belajar React concepts
- 📚 React Native specific components
- 📚 Navigation (React Navigation)
- 📚 Time: 1-2 minggu development

---

## 3️⃣ METODE 3: Flutter

Untuk rebuild app dengan Flutter (Dart language).

### Kapan Pilih Flutter?
- ✅ Mau UI yang super smooth & beautiful
- ✅ Mau cross-platform (iOS, Android, Web)
- ✅ Suka strongly-typed language
- ✅ Punya waktu untuk belajar Dart

### Stack:
- **Language**: Dart
- **Framework**: Flutter
- **UI**: Material/Cupertino widgets
- **State**: Provider/Riverpod
- **Storage**: SharedPreferences
- **Charts**: fl_chart package

### Quickstart:
```bash
# Install Flutter
# Download: https://flutter.dev/docs/get-started/install

# Create new project
flutter create tavern_ledger

# Navigate
cd tavern_ledger

# Run on iOS simulator
flutter run
```

### Learning Curve:
- 📚 Perlu belajar Dart language (syntax mirip JavaScript)
- 📚 Flutter widgets & layouts
- 📚 State management
- 📚 Time: 1-2 minggu development

---

## 4️⃣ METODE 4: Swift/SwiftUI (Pure Native)

Untuk rebuild app dengan bahasa native iOS.

### Kapan Pilih Swift?
- ✅ Mau 100% native performance
- ✅ Mau akses semua iOS features
- ✅ Tidak perlu Android support
- ✅ Punya waktu untuk belajar Swift

### Stack:
- **Language**: Swift
- **UI**: SwiftUI
- **Storage**: UserDefaults atau Core Data
- **Charts**: Swift Charts (iOS 16+)

### Quickstart:
```bash
# Buka Xcode
# File → New → Project
# iOS → App
# Interface: SwiftUI
# Language: Swift
```

### Learning Curve:
- 📚 Perlu belajar Swift language
- 📚 SwiftUI framework
- 📚 iOS SDK & patterns
- 📚 Time: 2-4 minggu development

---

## 📊 Comparison Table

| Fitur | Capacitor | React Native | Flutter | Swift |
|-------|-----------|--------------|---------|-------|
| **Reuse web code** | ✅ 90% | ❌ Rebuild | ❌ Rebuild | ❌ Rebuild |
| **Dev time** | 1-2 hari | 1-2 minggu | 1-2 minggu | 2-4 minggu |
| **Learning curve** | Easy ⭐ | Medium ⭐⭐⭐ | Medium ⭐⭐⭐ | Hard ⭐⭐⭐⭐ |
| **Performance** | Good | Excellent | Excellent | Best |
| **File size** | Large (~50MB) | Medium (~30MB) | Medium (~20MB) | Small (~10MB) |
| **Cross-platform** | ✅ iOS+Android | ✅ iOS+Android | ✅ iOS+Android+Web | ❌ iOS only |
| **Need Mac** | ✅ Yes (for iOS) | ✅ Yes (for iOS) | ✅ Yes (for iOS) | ✅ Yes |
| **Community** | Large | Huge | Huge | Very Large |

---

## 💰 Biaya Total

### One-time:
- Mac (jika belum punya): **Rp 15-40 juta** (MacBook Air M1/M2)
  - _Alternatif_: Sewa Mac cloud (MacStadium, MacinCloud) ~$30-50/bulan
  - _Alternatif_: Pinjam Mac teman untuk build

### Recurring:
- **Apple Developer Account**: **$99/tahun** (~Rp 1.5 juta/tahun)
  - Wajib untuk publish ke App Store
  - Bisa trial dengan free developer account (tidak bisa publish)

### Total untuk Capacitor:
- **Mac**: Rp 15-40 juta (one-time) atau sewa
- **Developer Account**: $99/tahun (Rp 1.5 juta)
- **Development**: Gratis (self-develop)
- **Total Year 1**: ~Rp 17-42 juta
- **Total Year 2+**: ~Rp 1.5 juta/tahun

---

## 🎯 Rekomendasi Berdasarkan Situasi

### Jika TIDAK punya Mac:
1. **Opsi 1**: Gunakan PWA (sudah dibuat) + "Add to Home Screen"
   - Gratis, sudah jadi, cukup bagus untuk personal use
   
2. **Opsi 2**: Sewa Mac cloud untuk build Capacitor
   - MacStadium: https://www.macstadium.com
   - MacinCloud: https://www.macincloud.com
   - ~$30-50/bulan, cukup untuk 1 bulan build & publish

### Jika PUNYA Mac:
1. **Gunakan Capacitor** (tercepat!)
   - 1-2 hari development
   - Reuse semua kode web
   - Publish ke App Store

### Jika ingin belajar & punya waktu:
1. **React Native** (jika suka JavaScript)
2. **Flutter** (jika suka Dart atau butuh multi-platform)
3. **Swift** (jika fokus iOS only)

---

## 🚀 Quick Start Guide (Capacitor)

Jika Anda punya Mac dan mau langsung mulai:

```bash
# 1. Install Node.js
# Download: https://nodejs.org

# 2. Install Xcode dari App Store

# 3. Install CocoaPods
sudo gem install cocoapods

# 4. Di folder Finance:
cd /Users/yourname/Finance

# 5. Init npm
npm init -y

# 6. Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/ios

# 7. Init Capacitor
npx cap init

# 8. Add iOS
npx cap add ios

# 9. Sync
npx cap sync

# 10. Open Xcode
npx cap open ios

# 11. Build & Run di Xcode!
```

---

## ❓ FAQ

**Q: Bisa build iOS app di Windows?**
A: Tidak bisa directly. Perlu Mac atau sewa Mac cloud.

**Q: Berapa lama review App Store?**
A: Biasanya 24-48 jam. Updates lebih cepat (6-12 jam).

**Q: Apakah gratis publish ke App Store?**
A: Tidak. Perlu bayar $99/tahun untuk Apple Developer Account.

**Q: Bisa dapat uang dari app ini?**
A: Bisa! Bisa jual ($0.99-$9.99), iklan, atau in-app purchases.

**Q: Apakah PWA sudah cukup?**
A: Untuk personal use, sudah cukup! Untuk publish ke App Store atau monetize, perlu native app.

---

## 📚 Resources

### Capacitor:
- Docs: https://capacitorjs.com
- Tutorial: https://capacitorjs.com/docs/getting-started

### React Native:
- Docs: https://reactnative.dev
- Tutorial: https://reactnative.dev/docs/getting-started

### Flutter:
- Docs: https://flutter.dev
- Tutorial: https://flutter.dev/docs/get-started

### Swift:
- Docs: https://developer.apple.com/swift
- SwiftUI: https://developer.apple.com/xcode/swiftui

### App Store:
- Guidelines: https://developer.apple.com/app-store/review/guidelines
- Submit: https://developer.apple.com/app-store/submissions

---

## 🎉 Kesimpulan

**Untuk Anda:**

Jika punya Mac → **Gunakan Capacitor** (paling mudah & cepat!)

Jika tidak punya Mac → **Gunakan PWA** yang sudah jadi (sudah bagus untuk personal use!)

Jika mau belajar native dev → **React Native atau Flutter**

**Good luck building your iOS app!** 🚀📱
