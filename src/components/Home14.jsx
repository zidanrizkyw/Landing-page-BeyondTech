function Home14() {
    return (
      <div className="mt-40 ml-5 mr-5 mb-10">
        <div className="flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#505050]">Berita</h1>
          </div>
          {/* Responsif grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 m-5">
            {/* Card Berita */}
            <div className="rounded-lg border-[2px] p-5">
              <div className="h-40 bg-[#B52323] rounded-lg mb-3"></div>
              <p className="text-[#505050]">Judul berita atau deskripsi singkat di sini...</p>
            </div>
            <div className="rounded-lg border-[2px] p-5">
              <div className="h-40 bg-[#B52323] rounded-lg mb-3"></div>
              <p className="text-[#505050]">Judul berita atau deskripsi singkat di sini...</p>
            </div>
            <div className="rounded-lg border-[2px] p-5">
              <div className="h-40 bg-[#B52323] rounded-lg mb-3"></div>
              <p className="text-[#505050]">Judul berita atau deskripsi singkat di sini...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home14;
  