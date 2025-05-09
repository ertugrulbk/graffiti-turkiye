import Link from "next/link";
import prisma from "@/lib/prisma";

export default async function Home() {
  // Tüm grafiti eserlerini veritabanından çek
  const graffitiItems = await prisma.graffiti.findMany({
    include: {
      location: true,
      artists: true
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="w-full bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">TÜRKİYE GRAFFİTİ</h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:text-gray-300 border-b-2 border-white">Ana Sayfa</Link></li>
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

      <div className="container mx-auto px-4 py-12 w-full bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Graffiti Galerisi</h1>
          <p className="text-lg text-gray-600 mb-12">Türkiye'nin sokak sanatı arşivi</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {graffitiItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href={`/galeri/eser-${item.id}`}>
                  <div className="h-64 bg-gray-300 relative">
                    {/* Resim placeholder - Gerçek projede img kullanılacak */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      <span className="text-lg">{item.title} Görseli</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.location.city}, {item.location.district}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="flex">
              <a href="#" className="border border-gray-300 px-4 py-2 rounded-l-md hover:bg-gray-100">Önceki</a>
              <a href="#" className="border-t border-b border-gray-300 px-4 py-2 bg-black text-white">1</a>
              <a href="#" className="border-t border-b border-gray-300 px-4 py-2 hover:bg-gray-100">2</a>
              <a href="#" className="border-t border-b border-gray-300 px-4 py-2 hover:bg-gray-100">3</a>
              <a href="#" className="border border-gray-300 px-4 py-2 rounded-r-md hover:bg-gray-100">Sonraki</a>
            </div>
          </div>
        </div>
      </div>

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
    </main>
  );
}
