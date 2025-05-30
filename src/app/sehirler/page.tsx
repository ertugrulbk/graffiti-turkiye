import Link from "next/link";

// Örnek şehir verisi
const sehirler = [
  {
    id: "istanbul",
    name: "İstanbul",
    workCount: 168,
    artistCount: 42,
    description: "Türkiye'nin graffiti ve sokak sanatı başkenti. Karaköy, Kadıköy, Yeldeğirmeni gibi semtlerde yoğun sokak sanatı eserleri bulunur.",
    famousAreas: ["Karaköy", "Kadıköy", "Yeldeğirmeni", "Moda", "Tophane"],
    imageUrl: "/images/cities/istanbul.jpg",
    coordinates: {
      lat: 41.0082,
      lng: 28.9784
    }
  },
  {
    id: "ankara",
    name: "Ankara",
    workCount: 87,
    artistCount: 23,
    description: "Başkentin sokak sanatındaki varlığı her geçen gün artıyor. Özellikle Kızılay, Tunalı ve Bahçelievler'de genç sanatçıların eserleri görülebilir.",
    famousAreas: ["Kızılay", "Tunalı Hilmi", "Bahçelievler", "Çankaya", "Ulus"],
    imageUrl: "/images/cities/ankara.jpg",
    coordinates: {
      lat: 39.9334,
      lng: 32.8597
    }
  },
  {
    id: "izmir",
    name: "İzmir",
    workCount: 103,
    artistCount: 28,
    description: "Ege'nin incisi, deniz temalı graffiti çalışmalarıyla dikkat çekiyor. Kordon boyunca ve Alsancak'ta birçok etkileyici çalışma mevcut.",
    famousAreas: ["Kordon", "Alsancak", "Karşıyaka", "Bornova", "Konak"],
    imageUrl: "/images/cities/izmir.jpg",
    coordinates: {
      lat: 38.4237,
      lng: 27.1428
    }
  },
  {
    id: "eskisehir",
    name: "Eskişehir",
    workCount: 64,
    artistCount: 19,
    description: "Öğrenci şehri Eskişehir, kampüs çevrelerinde ve Porsuk boyunca renkli ve yaratıcı eserlere ev sahipliği yapıyor.",
    famousAreas: ["Porsuk Çayı", "Adalar", "Bağlar", "Kampüs", "Odunpazarı"],
    imageUrl: "/images/cities/eskisehir.jpg",
    coordinates: {
      lat: 39.7667,
      lng: 30.5256
    }
  },
  {
    id: "antalya",
    name: "Antalya",
    workCount: 58,
    artistCount: 16,
    description: "Turizm merkezi Antalya, sahil bölgelerinde ve Kaleiçi'nde turizm ve deniz temalı graffiti çalışmalarıyla dolu.",
    famousAreas: ["Kaleiçi", "Konyaaltı", "Lara", "Muratpaşa", "Kepez"],
    imageUrl: "/images/cities/antalya.jpg",
    coordinates: {
      lat: 36.8969,
      lng: 30.7133
    }
  },
  {
    id: "bursa",
    name: "Bursa",
    workCount: 43,
    artistCount: 12,
    description: "Tarihi dokusu ve endüstriyel geçmişiyle Bursa, tarihi ve modern temaları birleştiren çalışmaları barındırıyor.",
    famousAreas: ["Osmangazi", "Nilüfer", "Uludağ", "Mudanya", "İnegöl"],
    imageUrl: "/images/cities/bursa.jpg",
    coordinates: {
      lat: 40.1885,
      lng: 29.0610
    }
  },
  {
    id: "trabzon",
    name: "Trabzon",
    workCount: 35,
    artistCount: 10,
    description: "Karadeniz'in incisi Trabzon, son yıllarda gelişen graffiti sahnesiyle dikkat çekiyor. Özellikle deniz ve balıkçılık temalı çalışmalar ön planda.",
    famousAreas: ["Ortahisar", "Meydan", "Boztepe", "Çömlekçi", "Akçaabat"],
    imageUrl: "/images/cities/trabzon.jpg",
    coordinates: {
      lat: 41.0027,
      lng: 39.7168
    }
  },
  {
    id: "gaziantep",
    name: "Gaziantep",
    workCount: 28,
    artistCount: 8,
    description: "Gastronominin başkenti Gaziantep, geleneksel motiflerle modern graffiti sanatını buluşturan özgün çalışmalara sahip.",
    famousAreas: ["Şahinbey", "Şehitkamil", "Kalealtı", "Kavaklık", "Gazikent"],
    imageUrl: "/images/cities/gaziantep.jpg",
    coordinates: {
      lat: 37.0662,
      lng: 37.3833
    }
  }
];

export default function SehirlerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="w-full bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold">TÜRKİYE GRAFFİTİ</Link>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:text-gray-300">Ana Sayfa</Link></li>
                <li><Link href="/galeri" className="hover:text-gray-300">Galeri</Link></li>
                <li><Link href="/sanatcilar" className="hover:text-gray-300">Sanatçılar</Link></li>
                <li><Link href="/sehirler" className="hover:text-gray-300 border-b-2 border-white">Şehirler</Link></li>
                <li><Link href="/hakkimizda" className="hover:text-gray-300">Hakkımızda</Link></li>
              </ul>
            </nav>
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Türkiye'de Graffiti'nin Haritası</h1>
          <p className="text-lg text-gray-600 mb-12">Sokak sanatının en yoğun olduğu şehirlerimizi keşfedin ve her bölgenin kendine özgü tarzını tanıyın.</p>

          <div className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">Türkiye Graffiti Haritası</h2>
              {/* Harita placeholder - gerçek projede interaktif harita olacak */}
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">Türkiye Haritası Bileşeni</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sehirler.map((sehir) => (
              <Link 
                href={`/sehirler/${sehir.id}`} 
                key={sehir.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 bg-gray-300 relative">
                  {/* Resim placeholder - gerçek projede img kullanılacak */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <span className="text-lg">{sehir.name} Görseli</span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white text-2xl font-bold group-hover:text-indigo-300 transition-colors">
                      {sehir.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-sm">Eser Sayısı</span>
                      <span className="font-bold text-lg">{sehir.workCount}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-sm">Sanatçı</span>
                      <span className="font-bold text-lg">{sehir.artistCount}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-sm">Popüler Bölge</span>
                      <span className="font-bold text-lg">{sehir.famousAreas[0]}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{sehir.description}</p>
                  <div className="text-indigo-600 font-medium group-hover:text-indigo-800">
                    Şehir Detaylarını Gör →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Graffiti Turlarımıza Katılın</h2>
            <p className="text-gray-600 mb-6">
              Graffiti ve sokak sanatı tutkunları için düzenlediğimiz şehir turlarımıza katılabilir, 
              yerel rehberler eşliğinde en etkileyici eserleri keşfedebilirsiniz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">İstanbul Turu</h3>
                <p className="text-gray-600 text-sm mb-2">Karaköy, Kadıköy ve Yeldeğirmeni'nin en iyi graffitileri</p>
                <p className="text-indigo-600 font-medium text-sm">Her Cumartesi, 14:00</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Ankara Turu</h3>
                <p className="text-gray-600 text-sm mb-2">Kızılay ve Tunalı'nın sokak sanatı keşfi</p>
                <p className="text-indigo-600 font-medium text-sm">Her Pazar, 13:00</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">İzmir Turu</h3>
                <p className="text-gray-600 text-sm mb-2">Kordon ve Alsancak duvarlarında bir yolculuk</p>
                <p className="text-indigo-600 font-medium text-sm">Her Cumartesi, 15:00</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Tur Bilgileri ve Rezervasyon
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Türkiye Graffiti</h3>
              <p className="text-gray-400">Türkiye'deki graffiti ve sokak sanatı eserlerini keşfedin ve sanatçılarla tanışın.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                <li><Link href="/galeri" className="text-gray-400 hover:text-white">Galeri</Link></li>
                <li><Link href="/sanatcilar" className="text-gray-400 hover:text-white">Sanatçılar</Link></li>
                <li><Link href="/sehirler" className="text-gray-400 hover:text-white">Şehirler</Link></li>
                <li><Link href="/hakkimizda" className="text-gray-400 hover:text-white">Hakkımızda</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">İletişim</h3>
              <p className="text-gray-400">info@turkiyegraffiti.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Türkiye Graffiti. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 