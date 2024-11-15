import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import wsunion from "../assets/western.webp";
import moneygram from "../assets/moneygram.webp";
import transwap from "../assets/transwap.webp";
import cimbniaga from "../assets/cimb.webp";
import bca from "../assets/bca.webp";
// import ria from "../assets/Ria.png";
// import topremit from "../assets/Topremit.png";
// import brdgx from "../assets/Brdgx.png";

function Home2() {

  useEffect(() => {
    AOS.init(
      {once: true}
    );
  }, [])

  return (
    <div className="sm:pb-20 relative z-10" data-aos="fade-up" data-aos-duration="500">
      <div className="flex flex-col md:flex-row justify-center md:space-x-36 space-y-6 md:space-y-0 py-12 bg-[#EC2027] text-white text-center">
        <div>
          <h1 className="font-bold text-xl md:text-2xl">
            50
            <FontAwesomeIcon
              icon={faPlus}
              className="font-bold"
              style={{ fontSize: "18px" }}
            />
          </h1>
          <p>Mata Uang</p>
        </div>
        <div>
          <h1 className="font-bold text-xl md:text-2xl">
            200
            <FontAwesomeIcon
              icon={faPlus}
              className="font-bold"
              style={{ fontSize: "18px" }}
            />
          </h1>
          <p>Negara</p>
        </div>
        <div>
          <h1 className="font-bold text-xl md:text-2xl">
            100.000
            <FontAwesomeIcon
              icon={faPlus}
              className="font-bold"
              style={{ fontSize: "18px" }}
            />
          </h1>
          <p>Pengguna</p>
        </div>
        <div>
          <h1 className="font-bold text-xl md:text-2xl">
            20
            <FontAwesomeIcon
              icon={faPlus}
              className="font-bold"
              style={{ fontSize: "18px" }}
            />
          </h1>
          <p>Metode Pembayaran</p>
        </div>
      </div>

      {/* Container for the images with proper sizing */}
      <div className="animate-slide flex flex-row justify-center items-center py-10 space-x-12">
        <div className="min-w-[200px] ">
          <img alt="moneygram" src={moneygram} className="w-full h-full" width={100} height={100}/>
        </div>
        <div className="min-w-[200px]">
          <img alt="Western Union" src={wsunion} className="w-full h-full" width={100} height={100}/>
        </div>
        <div className="min-w-[200px]">
          <img alt="Transwap" src={transwap} className="w-full h-full" width={100} height={100}/>
        </div>
        <div className="min-w-[200px]">
          <img alt="CIMB Niaga" src={cimbniaga} className="w-full h-full" width={100} height={100}/>
        </div>
        <div className="min-w-[125px]">
          <img alt="BCA" src={bca} className="w-full h-full" width={100} height={100}/>
        </div>
        
      </div>
    </div>
  );
}

export default Home2;
