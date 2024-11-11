import image28 from '../assets/image 28.png';
import image29 from '../assets/image 29.png';
import image27 from '../assets/image 27.png';
import image30 from '../assets/image 30.png';
import { useRef, useEffect } from 'react';

function Home7() {
    const scrollContainer = useRef(null);

    const scrollLeft = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: -500, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: 500, behavior: 'smooth' });
            
            // Check if user has scrolled to the end and reset to start if so
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
            if (scrollLeft + clientWidth >= scrollWidth) {
                scrollContainer.current.scrollTo({ left: 0, behavior: 'smooth' });
            }
        }
    };

    // Data untuk setiap card
    const cardData = [
        {
            image: image28,
            title: "Kirim Uang (Domestik & Internasional)",
            description: "Kemudahan mengirimkan uang baik domestik atau ke lebih dari 200 mata uang di 50 negara dengan kurs terbaik tanpa biaya tersembunyi",
        },
        {
            image: image29,
            title: "Ajukan & Terima Pembayaran",
            description: "Kirim permintaan uang ke profil yang Anda tuju dan dapatkan pembayaran secara realtime dari rekening bank terkait yang telah terdaftar",
        },
        {
            image: image27,
            title: "Mulai Berjualan",
            description: "Merintis usaha lebih mudah dengan QRIS. Cukup buat, cetak, atau tampilkan QRIS dan terima pembayaran langsung dari ponsel Anda",
        },
        {
            image: image30,
            title: "Donasi",
            description: "Perubahan dimulai dari Anda. Kami mempermudah dalam penggalangan dana untuk mendukung badan amal",
        },
    ];

    // Menggandakan cardData untuk efek infinite scroll
    const doubledCardData = [...cardData, ...cardData];

    return (
        <div className="mt-40 px-4">
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-[#1B75BB]">Beyondtech untuk Kamu</h1>
                    <h1 className="font-bold text-2xl text-[#505050] mt-3">
                        Kirim & Terima
                    </h1>
                    <p className="text-sm text-[#505050] mt-5">
                        Kami memahami akan segala kebutuhan transaksi Anda melalui
                        infrastruktur fintech
                    </p>
                    <p className="text-sm text-[#505050]">
                        yang inovatif untuk memanfaatkan peluang baru yang muncul.
                    </p>
                </div>

                <div className="relative flex items-center w-full mt-10">
                    <button onClick={scrollLeft} className="absolute left-0 z-10 bg-gray-300 hover:bg-gray-400 p-2 rounded-full shadow">
                        &larr;
                    </button>

                    <div
                        ref={scrollContainer}
                        className="flex space-x-7 overflow-x-auto no-scrollbar px-2 py-3"
                    >
                        {doubledCardData.map((card, index) => (
                            <div key={index} className="min-w-[280px] md:min-w-[320px] lg:min-w-[360px] max-w-xs rounded overflow-hidden shadow-lg">
                                <div className="bg-[#1B75BB] flex items-center justify-center h-40">
                                    <img className="h-28 object-contain" src={card.image} alt={card.title} />
                                </div>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-sm mb-2">{card.title}</div>
                                    <p className="text-gray-700 text-xs">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={scrollRight} className="absolute right-0 z-10 bg-gray-300 hover:bg-gray-400 p-2 rounded-full shadow">
                        &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home7;