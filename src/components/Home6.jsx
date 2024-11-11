import image16 from "../assets/image 16.png";

function Home6() {
  return (
    <div className="mt-36 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-sm text-[#1B75BB]">Features</h1>
          <h1 className="font-bold text-xl md:text-2xl lg:text-2xl text-[#505050] mt-3">
            Manajemen Akun Lebih Mudah dengan
          </h1>
          <h1 className="font-bold text-xl md:text-2xl lg:text-2xl text-[#505050]">
            Dasboard yang Terbaik di Kelasnya
          </h1>
        </div>
        <div className="mt-5">
          <div className="flex flex-col items-center justify-center space-y-1">
            <p className="text-xs md:text-sm lg:text-sm text-[#505050] text-center">
              Pantau dan unduh laporan transaksi yang komprehensif melalui
              dasbor Beyondtech.
            </p>
            <p className="text-xs md:text-sm lg:text-sm text-[#505050] text-center">
              Dapat memproses transaksi dalam jumlah besar dengan aman.
            </p>
          </div>
          <div className="flex justify-center mt-7">
            <img src={image16} className="w-full md:w-2/3 lg:w-1/2 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home6;
