import image21 from "../assets/image 21.png";
import image22 from "../assets/image 22.png";
import image23 from "../assets/image 23.png";
import image24 from "../assets/image 24.png";
import image25 from "../assets/image 25.png";
import image26 from "../assets/image 26.png";

function Home4() {
  return (
    <div className="px-4 lg:px-0">
      <div className="mt-36 flex justify-end lg:mr-20">
        <div className="w-full lg:w-1/2 ml-auto">
          <h1 className="text-[#1B75BB]">Disbursement</h1>
          <h1 className="mt-3 text-[#1B75BB] font-bold text-xl lg:text-2xl">
            Transfer Dana ke Banyak Tujuan Lebih
          </h1>
          <h1 className="text-[#1B75BB] font-bold text-xl lg:text-2xl">
            Aman Tanpa Kerumitan
          </h1>
          <p className="mt-3 text-sm text-[#505050]">
            Kirim dana ke banyak tujuan untuk segala kebutuhan operasional usaha
            lebih optimal dan dapat diselesaikan di hari yang sama. Ucapkan
            selamat tinggal pada kerumitan dan fokuskan pada kesuksesan.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col items-center justify-center">
              <img src={image21} className="w-10" />
              <p className="text-sm text-center text-[#505050]">
                Cukup Sekali Konfirmasi untuk kirim ke banyak tujuan
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={image22} className="w-10" />
              <p className="text-sm text-center text-[#505050]">
                Pembayaran diproses secara real-time tanpa tertunda
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={image23} className="w-10" />
              <p className="text-sm text-center text-[#505050]">
                Bayar per pengiriman dana tanpa tambahan biaya
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={image24} className="w-10" />
              <p className="text-sm text-center text-[#505050]">
                Integrasi dan penggunaan yang mudah, kompatibel dengan sistem
                apapun
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={image25} className="w-10" />
              <p className="text-sm text-center text-[#505050]">
                Fitur keamanan berlapis setara dengan bank untuk menjamin
                keamanan
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={image26} className="w-10" />
              <p className="text-sm text-center text-[#505050]">
                Validasi rekening bank untuk mengurangi kesalahan pembayaran
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-7">
            <h1 className="text-sm font-bold">
              Mempermudah proses bisnis seperti:
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
            <div className="flex items-center justify-center p-4 rounded-md border border-gray-300">
              <p className="text-sm text-center text-[#505050]">
                Gaji dan insentif karyawan atau Komisi
              </p>
            </div>
            <div className="flex items-center justify-center p-4 rounded-md border border-gray-300">
              <p className="text-sm text-center text-[#505050]">
                Pembayaran ke vendor atau rekananan
              </p>
            </div>
            <div className="flex items-center justify-center p-4 rounded-md border border-gray-300">
              <p className="text-sm text-center text-[#505050]">
                Penyaluran Dana Pinjaman P2P
              </p>
            </div>
            <div className="flex items-center justify-center p-4 rounded-md border border-gray-300">
              <p className="text-sm text-center text-[#505050]">
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
