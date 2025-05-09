# Türkiye Graffiti Galerisi

Türkiye'nin sokak sanatı arşivi - Türkiye'deki graffiti ve sokak sanatı eserlerini keşfedin.

## Proje Hakkında

Bu proje, Türkiye'deki graffiti ve sokak sanatı eserlerini, sanatçılarını ve konumlarını bir araya getiren bir web uygulamasıdır. Kullanıcılar, farklı şehirlerdeki çalışmaları keşfedebilir, sanatçılar hakkında bilgi edinebilir ve eserlerin detaylarını inceleyebilirler.

## Özellikler

- Galeri görünümünde tüm graffiti çalışmalarını listeler
- Sanatçı profilleri ve çalışma detayları
- Şehir ve konuma göre filtreleme
- Türkiye'nin farklı şehirlerindeki çalışmaları görebilme
- Bir graffiti eserinin birden fazla sanatçı tarafından oluşturulabilmesi

## Teknolojiler

- Next.js 14
- React
- Tailwind CSS
- Prisma ORM
- Neon.tech PostgreSQL veritabanı

## Kurulum

Bu projeyi yerel ortamınızda çalıştırmak için:

```bash
# Repoyu klonlayın
git clone https://github.com/kullaniciadi/turkiye-graffiti.git
cd turkiye-graffiti

# Bağımlılıkları yükleyin
npm install

# .env Dosyası Oluşturun
# Projenin kök dizininde .env dosyası oluşturun ve içine aşağıdaki satırı ekleyin:
# DATABASE_URL="postgresql://kullanıcıadı:şifre@host/veritabanı"
# 
# Bu URL'i Neon.tech hesabınızdan alabilirsiniz:
# 1. Neon.tech'de oturum açın (https://neon.tech)
# 2. Bir proje oluşturun
# 3. "Connection Details" bölümünden bağlantı bilgilerini alın
# 4. "Connection string" değerini kopyalayıp .env dosyasına ekleyin

# Veritabanını oluşturun
npx prisma db push

# Örnek veri oluşturun
# Tarayıcıda localhost:3000/api/seed adresini ziyaret edin

# Uygulamayı başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açarak uygulamayı görüntüleyebilirsiniz.

## Vercel'e Deployment

1. GitHub'a projeyi push edin
2. Vercel dashboard'a giriş yapın
3. "New Project" seçeneğini tıklayın
4. GitHub repo'nuzu seçin
5. "Environment Variables" bölümünde DATABASE_URL değişkenini ekleyin (Neon.tech veritabanı bağlantı bilgilerinizle)
6. Deploy butonuna tıklayın

## Neon.tech PostgreSQL Veritabanı Kullanımı

Bu proje Neon.tech'in sunduğu ücretsiz PostgreSQL veritabanı hizmetini kullanmaktadır. Neon.tech özellikleri:

- Sunucusuz mimari (serverless)
- Otomatik ölçeklendirme
- Kullanılmadığında sıfıra ölçekleme (scale to zero)
- Her ay 0.5 GB depolama ve 190 işlem saati ücretsiz
- %100 PostgreSQL uyumluluğu

Kendi Neon.tech veritabanınızı kurmak için:

1. https://neon.tech adresinden hesap oluşturun
2. Yeni bir proje oluşturun
3. Bağlantı bilgilerini alın ve .env dosyanıza ekleyin
4. `npx prisma db push` komutunu çalıştırarak şemayı oluşturun
5. `http://localhost:3000/api/seed` adresini ziyaret ederek örnek verileri yükleyin

## Veritabanı Yapısı

Projede üç ana model bulunmaktadır:

1. **Graffiti**: Eser bilgileri (başlık, açıklama, fotoğraf, yıl)
2. **Artist**: Sanatçı bilgileri (isim, bio, sosyal medya, uzmanlık alanı)
3. **Location**: Konum bilgileri (şehir, semt, koordinatlar)

Bu modeller arasındaki ilişkiler sayesinde, bir eserin birden fazla sanatçı tarafından yapılabilmesi ve her şehre ait birden fazla eser olabilmesi mümkündür.

## Lisans

Bu proje [MIT lisansı](LICENSE) altında lisanslanmıştır.

## İletişim

Proje hakkında sorularınız veya önerileriniz için: info@turkiyegraffiti.com
