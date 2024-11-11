import image31 from "../assets/image 31.png";

function Home10() {
  return (
    <div className="mt-40 px-4 md:px-10 lg:px-10">
      <div className="flex flex-col justify-center">
        <div>
          <h1 className="font-bold text-2xl text-[#505050] text-center">
            Tentang Kami
          </h1>
        </div>
        
        {/* Konten dua kolom yang akan berubah menjadi satu kolom di layar kecil */}
        <div className="flex flex-col md:flex-row mt-7 space-y-5 md:space-y-0 md:space-x-10">
          
          {/* Kolom teks */}
          <div className="w-full md:w-1/2 mt-2">
            <p className="text-sm text-[#505050]">
              Beyondtech adalah perusahaan teknologi keuangan di Indonesia
              yang menghadirkan solusi keuangan berbasis transfer uang.
            </p>
            <p className="text-sm text-[#505050] mt-5">
              Lebih dari itu, Beyondtech memiliki tujuan yang lebih besar,
              yaitu ingin terus tumbuh untuk membantu dan melayanin individu
              ataupun bisnis dalam mencapai tujuan keuangan yang dicita-citakan
              melalui inovasi dan teknologi yang lebih baik dan pasti ada
              solusinya, sejalan dengan literasi dan inklusi keuangan.
            </p>
          </div>

          {/* Kolom gambar */}
          <div className="w-full md:w-1/2">
            <img src={image31} className="w-full h-auto rounded-lg" alt="Tentang Kami" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home10;
