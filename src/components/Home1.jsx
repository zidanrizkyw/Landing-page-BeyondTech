import gambar from "../assets/mockup-beyondtech2 1.png";

function Home1() {
  return (
    <div className="pt-20">
      <div className="flex flex-col md:flex-row justify-center items-center pt-10 z-0">
        <div className="content-center max-w-[600px] pb-14">
          <h1 className="font-bold text-4xl lg:text-5xl  text-center md:text-left">
            <span className="text-[#EC2027]">Kirim</span>{" "}
            <span className="text-[#505050]">dan</span>{" "}
            <span className="text-[#EC2027]">Terima</span>
          </h1>
          <h1 className="font-bold text-4xl lg:text-5xl mb-2 text-center md:text-left">
            <span className="text-[#EC2027]">Dana</span>{" "}
            <span className="text-[#505050]">Antar</span>{" "}
            <span className="text-[#505050]">Negara</span>
          </h1>
          <h1 className="font-bold text-4xl lg:text-5xl mb-3 text-center md:text-left">
            <span className="text-[#EC2027]">Tanpa</span>{" "}
            <span className="text-[#EC2027]">Kendala</span>
          </h1>
          <p className="text-sm lg:text-sm text-[#505050] text-center md:text-left">
            Hanya dengan satu kali klik, bisa kirim dan terima dana dalam
            hitungan menit tanpa dipersulit.
          </p>
        </div>
        <div className="max-w-[500px] pt-8 z-10">
          <img src={gambar} alt="Mockup" className="w-full h-auto" />
        </div>

        {/* Lingkaran yang hanya muncul di layar menengah ke atas */}
        <div className="hidden md:flex justify-center w-[680px] h-[660px] absolute -right-56 top-20 border border-red-500 rounded-full z-0">
          <div className="bg-gradient-to-b from-[#EC2027] to-[#861216] w-full mt-7 ml-7 mb-7 mr-7 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
