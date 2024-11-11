import group2 from "../assets/Group 2.png";

function Home5() {
  return (
    <div className="mt-36 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row justify-center items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 mt-10">
          <h1 className="font-bold text-xl text-[#1B75BB]">Remmittance</h1>
          <h1 className=" text-2xl">
            <span className="font-bold text-[#1B75BB]">Cara</span>{" "}
            <span className="font-bold text-[#1B75BB]">Paling</span>{" "}
            <span className="font-bold text-[#EC2027]">Mudah,</span>{" "}
            <span className="font-bold text-[#EC2027]">Aman,</span>{" "}
            <span className="font-bold text-[#1B75BB]">dan</span>
          </h1>
          <h1 className=" text-2xl">
            <span className="font-bold text-[#EC2027]">Nyaman</span>{" "}
            <span className="font-bold text-[#1B75BB]">Transfer</span>{" "}
            <span className="font-bold text-[#1B75BB]">Dana</span>{" "}
            <span className="font-bold text-[#1B75BB]">dari</span>{" "}
            <span className="font-bold text-[#1B75BB]">Indonesia</span>
          </h1>
          <h1 className=" text-2xl">
            <span className="font-bold text-[#1B75BB]">Ke</span>{" "}
            <span className="font-bold text-[#EC2027]">200+</span>{" "}
            <span className="font-bold text-[#EC2027]">Negara</span>
          </h1>
          <p className="text-sm text-[#505050] mt-5">
            Solusi berupa Platform pengiriman uang yang terintegrasi dengan
            seluruh bank yang terhubung dengan principal / bank switching yang
            bekerja sama.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="flex items-center justify-center p-4">
              <p className="text-sm text-center text-[#505050]">Support 200+ Mata Uang</p>
            </div>
            <div className="flex items-center justify-center p-4">
              <p className="text-sm text-center text-[#505050]">
                Dana bisa sampai di hari yang sama
              </p>
            </div>
            <div className="flex items-center justify-center p-4">
              <p className="text-sm text-center text-[#505050]">
                Dana Dapat Di Terima Full tanpa potongan
              </p>
            </div>
            <div className="flex items-center justify-center p-4">
              <p className="text-sm text-center text-[#505050]">
                Kurs dan biaya sangat kompetitif
              </p>
            </div>
            <div className="flex items-center justify-center p-4">
              <p className="text-sm text-center text-[#505050]">
                Stabil untuk mengurangi resiko kerugian
              </p>
            </div>
            <div className="flex items-center justify-center p-4">
              <p className="text-sm text-center text-[#505050]">
                Aman dengan Lisensi Resmi Bank Indonesia
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <img src={group2} className="w-full sm:w-3/4 lg:w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Home5;
