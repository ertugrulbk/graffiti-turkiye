# Veritabanı Kurulum Talimatları

Bu proje [Neon.tech](https://neon.tech) tarafından sağlanan PostgreSQL veritabanını kullanır. Aşağıdaki adımları izleyerek projenizi veritabanı ile çalışacak şekilde ayarlayabilirsiniz.

## 1. Neon.tech Hesabı Oluşturun

- [Neon.tech](https://neon.tech) sitesine gidin
- "Start for free" butonuna tıklayın
- GitHub veya Google hesabınızla üye olun

## 2. Yeni Bir Proje Oluşturun

- Dashboard'da "New Project" butonuna tıklayın
- Projeye "graffiti-turkiye" adını verin
- Size en yakın bölgeyi seçin (örn. EU-Central)
- "Create Project" butonuna tıklayın

## 3. Bağlantı Bilgilerini Alın

Proje oluşturulduktan sonra, bağlantı bilgilerinizi alın:

- "Connection Details" bölümünü tıklayın
- "Connection String" değerini kopyalayın, şuna benzer olacaktır:
  ```
  postgresql://myuser:AbCdEfGh123456@ep-cool-grass-123456.eu-central-1.aws.neon.tech/neondb
  ```

## 4. `.env` Dosyası Oluşturun

Projenizin kök dizininde `.env` adında bir dosya oluşturun ve içine şunu ekleyin:

```
DATABASE_URL=postgresql://kullanici:parola@host:port/veritabani
```

Yukarıdaki örnek URL'yi Neon.tech'ten aldığınız gerçek bağlantı bilgileriyle değiştirin.

## 5. Veritabanı Şemasını Oluşturun

Aşağıdaki komutu kullanarak veritabanı şemasını oluşturun:

```bash
npx prisma db push
```

## 6. Örnek Verileri Yükleyin

Uygulamayı başlatın ve tarayıcınızda `/api/seed` adresini ziyaret edin:

```bash
npm run dev
```

Ardından tarayıcınızda `http://localhost:3000/api/seed` adresini açın.

## 7. Vercel'e Deploy Edin

- Vercel'de "Environment Variables" bölümünde `DATABASE_URL` değişkenini ekleyin
- Aynı Neon.tech bağlantı URL'sini kullanın

## Güvenlik Notu

`.env` dosyasını asla Git deposuna eklemeyin. Bu dosya, veritabanı şifreniz gibi hassas bilgileri içerir. Bu nedenle `.gitignore` dosyasına eklenmiştir. 