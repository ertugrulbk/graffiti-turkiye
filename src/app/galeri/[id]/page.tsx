import { Metadata } from 'next';
import Link from "next/link";

// Örnek graffiti verisi
const graffitiItems = [
  {
    id: "eser-1",
    title: "Karaköy Duvarları",
    artist: "Graffitici Ahmet",
    location: "İstanbul, Karaköy",
    year: 2023,
    imageUrl: "/images/graffiti1.jpg",
    description: "Karaköy'ün tarihi dokusunu yansıtan etkileyici bir duvar çalışması. Bu çalışmada sanatçı, eski İstanbul'un izlerini modern çizgilerle birleştirerek nostaljik ama aynı zamanda çağdaş bir eser ortaya koymuştur. Eserin yapım aşaması yaklaşık 3 hafta sürmüş ve yerel halkın büyük ilgisini çekmiştir.",
    artistBio: "Graffitici Ahmet, 2010 yılından beri aktif olarak sokak sanatıyla uğraşan bir sanatçıdır. İstanbul'un çeşitli semtlerinde eserleri bulunan sanatçı, geleneksel Türk motiflerini modern graffiti teknikleriyle birleştirmesiyle tanınır.",
    coordinates: {
      lat: 41.0232,
      lng: 28.9772
    },
    relatedWorks: ["eser-2", "eser-4", "eser-7"]
  },
  {
    id: "eser-2",
    title: "Kadıköy Sokakları",
    artist: "StreetArt Collective",
    location: "İstanbul, Kadıköy",
    year: 2022,
    imageUrl: "/images/graffiti2.jpg",
    description: "Kadıköy sokaklarında toplumsal mesajlar içeren çarpıcı bir çalışma. Bu kolektif çalışma, kentsel dönüşüm ve toplumsal değişim temalarını işlemektedir. Farklı sanatçıların katkılarıyla oluşan bu büyük ölçekli duvar resmi, şehrin en çok fotoğraflanan sokak sanatı eserlerinden biri haline gelmiştir.",
    artistBio: "StreetArt Collective, İstanbul merkezli bir sokak sanatı kolektifidir. 5 farklı sanatçıdan oluşan grup, sosyal mesajlar içeren çalışmalarıyla bilinir ve çeşitli sosyal sorumluluk projelerinde yer almaktadır.",
    coordinates: {
      lat: 40.9908,
      lng: 29.0259
    },
    relatedWorks: ["eser-1", "eser-3", "eser-5"]
  },
  {
    id: "eser-3",
    title: "Ankara Kalesi",
    artist: "AnkaGraff",
    location: "Ankara, Kale",
    year: 2021,
    imageUrl: "/images/graffiti3.jpg",
    description: "Ankara'nın tarihi kalesini modern bir bakış açısıyla yorumlayan eser. Geleneksel Ankara motiflerini ve tarihi simgeleri modernize ederek yeniden yorumlayan bu çalışma, şehrin eski ve yeni kimliği arasında köprü kurmayı amaçlıyor. Turistlerin ve yerel halkın yoğun ilgisiyle karşılaşan eser, sosyal medyada da geniş yankı uyandırdı.",
    artistBio: "AnkaGraff, Ankara'da doğup büyümüş ve ODTÜ Güzel Sanatlar Fakültesi'nden mezun olmuş genç bir sanatçıdır. Şehrin tarihini ve kültürel mirasını modern sanat formlarıyla birleştiren çalışmalarıyla tanınır.",
    coordinates: {
      lat: 39.9379,
      lng: 32.8642
    },
    relatedWorks: ["eser-5", "eser-7", "eser-9"]
  }
];

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function GraffitDetail({ params }: Props) {
  // Varsayılan olarak ilk eseri gösteriyoruz, gerçek uygulamada API'den veri çekilecek
  const graffiti = graffitiItems.find(item => item.id === params.id) || graffitiItems[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="w-full bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold">TÜRKİYE GRAFFİTİ</Link>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:text-gray-300">Ana Sayfa</Link></li>
                <li><Link href="/galeri" className="hover:text-gray-300 border-b-2 border-white">Galeri</Link></li>
                <li><Link href="/sanatcilar" className="hover:text-gray-300">Sanatçılar</Link></li>
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
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm mb-8">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Ana Sayfa</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/galeri" className="text-gray-500 hover:text-gray-700">Galeri</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{graffiti.title}</span>
          </div>

          {/* Graffiti Detay */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                {/* Büyük resim - normalde gerçek bir resim olacak */}
                <div className="h-96 bg-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <span className="text-xl">{graffiti.title} Görseli</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold mb-3">{graffiti.title}</h1>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                    {graffiti.location}
                  </span>
                  <span className="bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">
                    {graffiti.year}
                  </span>
                </div>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Sanatçı</h2>
                  <p className="text-gray-600 mb-2">{graffiti.artist}</p>
                  <Link href={`/sanatcilar/${graffiti.artist.toLowerCase().replace(/\s+/g, '-')}`} className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                    Sanatçı Hakkında Daha Fazla →
                  </Link>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Açıklama</h2>
                  <p className="text-gray-600 mb-6">{graffiti.description}</p>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-black text-white px-4 py-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.8 19.2L16 11l3.5-3.5a2.1 2.1 0 00-3-3L13 8 4.8 6.2a1 1 0 00-1.2 1.2L6 16l-3.3 3.3a2.1 2.1 0 003 3L9 19l8.2 1.8a1 1 0 001.2-1.2" />
                    </svg>
                    Haritada Gör
                  </button>
                  <button className="border border-gray-300 px-4 py-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Paylaş
                  </button>
                </div>
              </div>
            </div>

            {/* Galeri (küçük resimler) */}
            <div className="p-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Galeri</h2>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
                {[1, 2, 3, 4, 5, 6].map(index => (
                  <div key={index} className="h-24 bg-gray-200 rounded-md cursor-pointer hover:opacity-75 transition-opacity">
                    {/* Küçük resimler - gerçek projede img olacak */}
                  </div>
                ))}
              </div>
            </div>

            {/* Sanatçı Hakkında */}
            <div className="p-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Sanatçı Hakkında</h2>
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-lg mb-1">{graffiti.artist}</h3>
                  <p className="text-gray-600">{graffiti.artistBio}</p>
                </div>
              </div>
            </div>

            {/* İlgili Çalışmalar */}
            <div className="p-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold mb-6">İlgili Çalışmalar</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {graffitiItems.slice(0, 3).map(item => (
                  <Link key={item.id} href={`/galeri/${item.id}`} className="block group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="h-48 bg-gray-300 relative">
                        {/* Resim placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                          <span>{item.title}</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                        <p className="text-gray-500 text-sm">{item.artist}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Yorumlar */}
            <div className="p-8 border-t border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Yorumlar (12)</h2>
                <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
                  Yorum Ekle
                </button>
              </div>

              <div className="space-y-6">
                {[1, 2, 3].map(index => (
                  <div key={index} className="border-b border-gray-100 pb-6">
                    <div className="flex items-start mb-2">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium">Kullanıcı {index}</h3>
                          <span className="text-gray-400 text-sm ml-3">3 gün önce</span>
                        </div>
                        <div className="flex text-amber-400 text-sm mt-1 mb-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>
                        <p className="text-gray-600">Bu çalışma gerçekten etkileyici! Sanatçının diğer eserlerini de görmek istiyorum. Konum tam olarak nerede acaba?</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Daha Fazla Yorum Gör
                </button>
              </div>
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