import group1 from "../assets/group1.png";

function Home3() {
  return (
    <div className=" mt-20 px-4 sm:px-8 lg:px-16">
      <div className="flex justify-center">
        <div>
          <h1 className="text-[#1B75BB] text-center">Features</h1>
          <h1 className="font-bold text-xl sm:text-2xl pt-3 text-center">
            <span className="text-[#505050]">Memberikan</span>{" "}
            <span className="text-[#EC2027]">Kemudahan,</span>{" "}
            <span className="text-[#505050]">Melampaui</span>{" "}
            <span className="text-[#EC2027]">Batasan</span>
          </h1>
          <h1 className="font-bold text-xl sm:text-2xl text-center">
            <span className="text-[#505050]">Untuk</span>{" "}
            <span className="text-[#EC2027]">Mencapai</span>{" "}
            <span className="text-[#EC2027]">Tujuan</span>
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-center text-[#505050]">
            Kami hadir sebagai solusi bagi kamu yang mau bergerak maju dan
            membuka akses untuk
          </p>
          <p className="text-xs sm:text-sm text-center text-[#505050]">
            memudahkan dalam menggapai tujuan di balik setiap kebutuhan
            finansial
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start space-y-8 lg:space-y-0 lg:space-x-8 mt-36">
        <div className="w-full lg:w-1/2">
          <h1 className="font-bold text-[#1B75BB] text-lg sm:text-xl">Payment Link</h1>
          <h1 className="text-xl sm:text-2xl">
            <span className="font-bold text-[#EC2027]">Terima</span>{" "}
            <span className="font-bold text-[#EC2027]">Pembayaran</span>{" "}
            <span className="font-bold text-[#1B75BB]">dari</span>
          </h1>
          <h1 className="text-xl sm:text-2xl">
            <span className="font-bold text-[#1B75BB]">Pelanggan</span>{" "}
            <span className="font-bold text-[#1B75BB]">Mana</span>{" "}
            <span className="font-bold text-[#1B75BB]">Aja</span>{" "}
            <span className="font-bold text-[#1B75BB]">Hanya</span>
          </h1>
          <h1 className="text-xl sm:text-2xl">
            <span className="font-bold text-[#1B75BB]">Dengan</span>{" "}
            <span className="font-bold text-[#EC2027]">Link</span>{" "}
            <span className="font-bold text-[#EC2027]">Sederhana</span>
          </h1>
          <p className="sm:text-sm text-xs text-[#505050] mt-3">
            Kemudahan dalam menerima pembayaran seperti membalikkan telapak
            tangan. Cukup dengan membuat link lalu bagikan pelanggan kamu
            melalui WhatsApp, SMS, Email, Media Sosial, dan masih banyak lagi.
          </p>
          <ul className="list-disc text-xs sm:text-sm text-[#505050] mt-3 pl-3">
            <li className="mt-4">
              Terima Pembayaran dari metode pembayaran apa saja seperti Kartu
              Kredit/Debit, Virtual Account, E-Wallet, Direct Debit
            </li>
            <li className="mt-4">
              Terima notifikasi real time saat pelanggan kamu sudah
              menyelesaikan pembayaran
            </li>
            <li className="mt-4">
              Tersedia Integrasi dengan API untuk pembuatan link dalam jumlah
              yang banyak dan kirim otomatis tanpa salin dan tempel manual
            </li>
            <li className="mt-4">Atur dan sesuaikan batas waktu transaksi yang kamu inginkan</li>
          </ul>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <img src={group1} alt="Illustration" className="w-full sm:w-3/4 lg:w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Home3;
