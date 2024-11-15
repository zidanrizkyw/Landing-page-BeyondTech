import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


import group58679 from "../assets/Group 58679.webp";
import pichome5 from "../assets/pichome5.webp";
import pic2home5 from "../assets/pic2home5.webp";
import pic3home5 from "../assets/pic3home5.webp";
import pic4home5 from "../assets/pic4home5.webp";
import pic5home5 from "../assets/pic5home5.webp";
import pic6home5 from "../assets/pic6home5.webp";

function Home4() {
  useEffect(() => {
    AOS.init(
      {once: true}
    );
  }, [])
  return (
    <div className="container mx-auto px-4 lg:px-16 mt-36" data-aos="fade-up" data-aos-duration="500">
      <div className="flex flex-col lg:flex-row justify-center lg:space-x-5 lg:space-y-0 space-y-24">
        <div className="flex justify-center items-center w-full lg:w-1/2 mt-7">
          <img
            src={group58679}
            alt="pic"
            className="w-full sm:w-3/4 lg:w-full h-auto"
            width={100}
            height={100}
          />
        </div>
        <div className="w-full lg:w-1/2 ml-auto">
          <h1 className="text-[#1B75BB] text-xl">DISBURSEMENT</h1>
          <h1 className="mt-4 font-semibold text-xl md:text-3xl text-[#505050]">
            Transfer Dana ke Banyak Tujuan Lebih
          </h1>
          <h1 className=" font-semibold text-xl md:text-3xl text-[#505050]">
            Aman Tanpa Kerumitan
          </h1>
          <p className="mt-3 text-base text-[#505050]">
            Kirim dana ke banyak tujuan untuk segala kebutuhan operasional usaha
            lebih optimal dan dapat diselesaikan di hari yang sama. Ucapkan
            selamat tinggal pada kerumitan dan fokuskan pada kesuksesan.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4 w-full">
            <div className="flex flex-col items-center justify-center space-y-4">
              <img
                src={pichome5}
                alt="pic"
                className=" bg-[#F7FCFF] p-2 w-14 rounded"
                width={100}
                height={100}
              />
              <p className="text-xs text-center text-[#505050]">
                Cukup sekali konfirmasi untuk kirim ke banyak tujuan
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <img
                src={pic2home5}
                alt="pic"
                className="bg-[#F7FCFF] p-2 w-14 rounded"
                width={100}
                height={100}
              />
              <p className="text-xs text-center text-[#505050]">
                Pembayaran diproses secara real-time tanpa tertunda
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <img
                src={pic3home5}
                alt="pic"
                className="bg-[#F7FCFF] p-2 w-14 rounded"
                width={100}
                height={100}
              />
              <p className="text-xs text-center text-[#505050]">
                Bayar per pengiriman dana tanpa tambahan biaya
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <img
                src={pic4home5}
                alt="pic"
                className="bg-[#F7FCFF] p-2 w-14 rounded"
                width={100}
                height={100}
              />
              <p className="text-xs text-center text-[#505050]">
                Integrasi dan penggunaan yang mudah, kompatibel dengan sistem
                apapun
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <img
                src={pic5home5}
                alt="pic"
                className="bg-[#F7FCFF] p-2 w-14 rounded"
                width={100}
                height={100}
              />
              <p className="text-xs text-center text-[#505050]">
                Fitur keamanan berlapis setara dengan bank untuk menjamin
                keamanan
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <img
                src={pic6home5}
                alt="pic"
                className="bg-[#F7FCFF] p-2 w-14 rounded"
                width={100}
                height={100}
              />
              <p className="text-xs text-center text-[#505050]">
                Validasi rekening bank untuk mengurangi kesalahan pembayaran
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-7">
            <h1 className="text-sm font-bold text-[#505050]">
              Mempermudah proses bisnis seperti:
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
            <div className="flex items-center justify-center p-4  rounded-md border border-gray-300">
              <p className="text-xs text-center text-[#505050]">
                Gaji dan insentif karyawan atau Komisi
              </p>
            </div>
            <div className="flex items-center justify-center p-4 rounded-md border border-gray-300">
              <p className="text-xs text-center text-[#505050]">
                Pembayaran ke vendor atau rekananan
              </p>
            </div>
            <div className="flex items-center justify-center p-4 rounded-md border border-gray-300">
              <p className="text-xs text-center text-[#505050]">
                Penyaluran Dana Pinjaman P2P
              </p>
            </div>
            <div className="flex items-center justify-center p-4 rounded-md border border-gray-300">
              <p className="text-xs text-center text-[#505050]">
                Pengembalian Dana atau Refund
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home4;
