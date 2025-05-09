import Link from "next/link";

// Örnek sanatçı verisi
const sanatcilar = [
  {
    id: "graffitici-ahmet",
    name: "Graffitici Ahmet",
    location: "İstanbul",
    specialty: "Duvar Resimleri",
    startYear: 2010,
    bio: "İstanbul'un çeşitli semtlerinde eserleri bulunan sanatçı, geleneksel Türk motiflerini modern graffiti teknikleriyle birleştirmesiyle tanınır.",
    workCount: 24,
    imageUrl: "/images/artists/ahmet.jpg",
    socialMedia: {
      instagram: "graffiticiahmet",
      twitter: "ahmetgraf"
    }
  },
  {
    id: "streetart-collective",
    name: "StreetArt Collective",
    location: "İstanbul",
    specialty: "Toplumsal Temalı Çalışmalar",
    startYear: 2016,
    bio: "5 farklı sanatçıdan oluşan grup, sosyal mesajlar içeren çalışmalarıyla bilinir ve çeşitli sosyal sorumluluk projelerinde yer almaktadır.",
    workCount: 37,
    imageUrl: "/images/artists/streetart.jpg",
    socialMedia: {
      instagram: "streetartcollective",
      twitter: "streetartco"
    }
  },
  {
    id: "ankagraff",
    name: "AnkaGraff",
    location: "Ankara",
    specialty: "Modern Ankara Temalı Eserler",
    startYear: 2015,
    bio: "Ankara'da doğup büyümüş ve ODTÜ Güzel Sanatlar Fakültesi'nden mezun olmuş genç bir sanatçı. Şehrin tarihini ve kültürel mirasını modern sanat formlarıyla birleştiren çalışmalarıyla tanınır.",
    workCount: 18,
    imageUrl: "/images/artists/ankagraff.jpg",
    socialMedia: {
      instagram: "ankagraff",
      twitter: "ankagraff"
    }
  },
  {
    id: "deniz-crew",
    name: "Deniz Crew",
    location: "İzmir",
    specialty: "Deniz Temalı Duvarlar",
    startYear: 2012,
    bio: "İzmir'de faaliyet gösteren ve deniz temalı çalışmalar yapan bir grup. Şehrin sahil şeridindeki pek çok duvar onların çalışmalarıyla hayat bulmuştur.",
    workCount: 29,
    imageUrl: "/images/artists/denizcrew.jpg",
    socialMedia: {
      instagram: "denizcrew",
      twitter: "denizcrew"
    }
  },
  {
    id: "eskisehir-uni",
    name: "Üniversiteliler",
    location: "Eskişehir",
    specialty: "Kampüs ve Şehir Eserleri",
    startYear: 2018,
    bio: "Eskişehir'deki üniversite öğrencilerinden oluşan kolektif. Anadolu ve Osmangazi Üniversitesi çevresinde birçok eserleri bulunmaktadır.",
    workCount: 15,
    imageUrl: "/images/artists/eskisehiruni.jpg",
    socialMedia: {
      instagram: "eskiuni",
      twitter: "eskiuni"
    }
  },
  {
    id: "ege-graffiti",
    name: "Ege Graffiti",
    location: "Muğla",
    specialty: "Turizm Bölgeleri",
    startYear: 2014,
    bio: "Ege sahil şeridinde turistik bölgelerde eserler üreten ekip. Özellikle Bodrum, Marmaris ve Fethiye'de çalışmaları yer alıyor.",
    workCount: 22,
    imageUrl: "/images/artists/egegraffiti.jpg",
    socialMedia: {
      instagram: "egegraffiti",
      twitter: "egegraffiti"
    }
  },
  {
    id: "nevsehir-kollektif",
    name: "Nevşehir Kollektif",
    location: "Nevşehir",
    specialty: "Kapadokya Temalı Çalışmalar",
    startYear: 2017,
    bio: "Kapadokya bölgesinde yerel motifleri modern sokak sanatıyla birleştiren grup. Doğal dokuya zarar vermeden çevreye uyumlu çalışmalar üretiyorlar.",
    workCount: 14,
    imageUrl: "/images/artists/nevsehir.jpg",
    socialMedia: {
      instagram: "kapadokyaart",
      twitter: "kapadokyaart"
    }
  },
  {
    id: "akdeniz-crew",
    name: "Akdeniz Crew",
    location: "Antalya",
    specialty: "Turizm ve Deniz Temalı",
    startYear: 2013,
    bio: "Antalya'nın turistik bölgelerinde deniz ve güneş temalarını işleyen grup. Özellikle liman bölgesi ve kale çevresinde eserleri bulunuyor.",
    workCount: 26,
    imageUrl: "/images/artists/akdeniz.jpg",
    socialMedia: {
      instagram: "akdenizcrew",
      twitter: "akdenizcrew"
    }
  }
];

export default function SanatcilarPage() {
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
                <li><Link href="/sanatcilar" className="hover:text-gray-300 border-b-2 border-white">Sanatçılar</Link></li>
                <li><Link href="/sehirler" className="hover:text-gray-300">Şehirler</Link></li>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Graffiti Sanatçıları</h1>
          <p className="text-lg text-gray-600 mb-12">Türkiye'nin dört bir yanından sokak sanatına hayat veren yetenekli sanatçılar.</p>

          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <div className="flex flex-wrap gap-4">
                <button className="bg-black text-white px-4 py-2 rounded-full">Tüm Sanatçılar</button>
                <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full">İstanbul</button>
                <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full">Ankara</button>
                <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full">Diğer Şehirler</button>
              </div>
              <div className="relative hidden md:block">
                <input 
                  type="text"
                  placeholder="Sanatçı ara..."
                  className="border border-gray-300 rounded-full px-4 py-2 pl-10 w-64"
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sanatcilar.map((sanatci) => (
              <div key={sanatci.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href={`/sanatcilar/${sanatci.id}`}>
                  <div className="h-56 bg-gray-300 relative">
                    {/* Resim placeholder - gerçek projede img kullanılacak */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      <span className="text-lg">{sanatci.name} Görseli</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h3 className="text-white text-xl font-semibold">{sanatci.name}</h3>
                      <p className="text-gray-200 text-sm">{sanatci.location}</p>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Uzmanlık: {sanatci.specialty}</p>
                      <p className="text-gray-600 text-sm">{sanatci.startYear}'den beri aktif</p>
                    </div>
                    <div className="flex space-x-2">
                      <a href={`https://instagram.com/${sanatci.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href={`https://twitter.com/${sanatci.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{sanatci.bio}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{sanatci.workCount} Eser</span>
                    <Link href={`/sanatcilar/${sanatci.id}`} className="text-indigo-600 font-medium hover:text-indigo-800">
                      Profili Gör →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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