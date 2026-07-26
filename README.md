# TroxzyMD

TroxzyMD adalah WhatsApp bot profesional dengan arsitektur hybrid, plugin engine modular, dan dukungan deployment panel Pterodactyl.

## 🚀 Ringkasan

- Nama proyek: `troxzymd`
- Bahasa: Node.js (ESM)
- Entry point: `index.js`
- Loader command: `src/lib/loadCommand.js`
- Generator command: `scripts/generate_commands.py`
- Total modul command: `3.362`
- Kategori terbaru: `nulis`, `randomtext`, `kerangajaib`, `primbon`, `cecan`, `cogan`, `darkjokes`, `asupan`

## ✨ Fitur Utama

- Dynamic command loader untuk semua perintah bot
- Command category lengkap: group, sticker, search, premium, economy, RPG, Islamic, anime, admin, dan banyak lagi
- Support command generator bulk tanpa edit manual
- Group management, moderation, dan fitur admin real-time
- Economy & RPG built-in
- Sticker converter dan media helper
- Integrasi MongoDB dan Redis (opsional saat startup)
- Cron tasks untuk cleanup dan pengecekan transaksi
- Siap untuk Pterodactyl dan PM2

## 📁 Struktur Kode

- `index.js` – entry point aplikasi
- `src/core` – inisialisasi WhatsApp client dan lifecycle
- `src/lib` – loader command dan event
- `src/commands` – modul command terstruktur per kategori
- `src/utils` – helper utilitas, state store, logger
- `src/database` – koneksi database dan model
- `scripts/generate_commands.py` – generator perintah masal
- `start.sh` – script startup Pterodactyl
- `ecosystem.config.js` – konfigurasi PM2
- `.env.example` – template environment variable

## ✅ Instalasi Lokal

1. Clone repository:
   ```bash
   git clone https://github.com/TRX-098/TRX-clz.git .
   cd TRX-clz
   ```

2. Install dependensi:
   ```bash
   npm install
   ```

3. Salin template environment:
   ```bash
   cp .env.example .env
   ```

4. Isi `.env` dengan konfigurasi berikut:
   - `BOT_NAME`
   - `OWNER_NAME`
   - `OWNER_NUMBER`
   - `TELEGRAM_OWNER`
   - `BOT_NUMBER`
   - `AI_BASE_URL`
   - `AI_API_KEY`
   - `MIDTRANS_CLIENT_KEY`
   - `MIDTRANS_SERVER_KEY`
   - `MONGODB_URL`
   - `REDIS_URL`
   - `WEBHOOK_PORT`
   - `NODE_ENV`
   - `TIMEZONE`
   - `PREFIX`

5. Jalankan aplikasi:
   ```bash
   npm start
   ```

## 🧩 Konfigurasi Pterodactyl

### 1. Setup Egg/container

- Runtime: `Node.js 24.x`
- Startup command: `bash start.sh`
- Allocasi: minimal 1 CPU, 2 GB RAM
- Storage:
  - `sessions` → untuk session WhatsApp
  - `data` → untuk penyimpanan state runtime
  - `temp` → untuk file sementara

### 2. Environment Variables

Tambahkan semua variabel dari `.env.example` sebagai environment variables Pterodactyl:

```env
BOT_NAME=TroxzyMD
OWNER_NAME=Trozzy
OWNER_NUMBER=6281410528015
TELEGRAM_OWNER=t.me/SoloBanNoTrash
BOT_NUMBER=
AI_BASE_URL=https://api.freetheai.xyz/v1
AI_API_KEY=
MIDTRANS_CLIENT_KEY=
MIDTRANS_SERVER_KEY=
MONGODB_URL=
REDIS_URL=
WEBHOOK_PORT=7777
NODE_ENV=production
TIMEZONE=Asia/Jakarta
PREFIX=.
```

### 3. Startup Command

Gunakan command berikut di panel Pterodactyl:

```bash
bash start.sh
```

### 4. Direktori Disarankan

Pastikan volume berikut tersedia:

- `sessions/`
- `data/`
- `temp/`

## ⚙️ PM2 Production

File `ecosystem.config.js` sudah dikonfigurasi untuk produksi:

- name: `TroxzyMD`
- autorestart: `true`
- max memory restart: `2G`
- no watch mode

Jalankan dengan:

```bash
npm install -g pm2
npm run pm2
```

## 🔧 Validasi dan Debug

1. Periksa syntax entrypoint:
   ```bash
   node --check index.js
   ```

2. Hitung file command:
   ```bash
   find src/commands -name '*.js' | wc -l
   ```

3. Jalankan dry-run startup:
   ```bash
   npm start -- --dry-run
   ```

## 🛠️ Regenerasi Command

Untuk memperluas atau memperbarui command masal:

```bash
python3 scripts/generate_commands.py
```

## 📌 Catatan Profesional

- `start.sh` otomatis menginstal dependency jika `node_modules` belum ada.
- `.env.example` sudah lengkap dan siap untuk panel Pterodactyl.
- MongoDB/Redis dibuat toleran: bot tetap bisa startup walau backend tidak tersedia.
- Gunakan PM2 untuk pemantauan dan restart otomatis.

## 📎 Referensi

- GitHub: `https://github.com/TRX-098/TRX-clz`
- Owner: Trozzy
- Project: TroxzyMD
