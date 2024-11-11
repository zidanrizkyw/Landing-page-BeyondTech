import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import wsunion from "../assets/western-union-logo-png_seeklogo-524395 1.png";
import moneygram from "../assets/moneygram.png";
import transwap from "../assets/transwap.png";
import cimbniaga from "../assets/cimb 1.png";
import bca from "../assets/logo bca 1.png";
import ria from "../assets/Ria.png";
import topremit from "../assets/Topremit.png";
import brdgx from "../assets/Brdgx.png";

function Home2() {
  return (
    <div className="sm:pb-20 relative z-10">
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
      <div className="overflow-hidden animate-slide py-7 md:py-5 ">
        <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-center items-center gap-5 lg:gap-8 w-full h-full">
          <div className="w-36 h-[75px] md:w-44 lg:w-96 lg:h-[125px] flex items-center">
            <img src={moneygram} alt="Moneygram" className="lg:object-contain w-full h-full" />
          </div>
          <div className="w-36 h-[35px] md:w-48 md:h-[30px]  lg:w-96 lg:h-[125px] flex items-center">
            <img src={wsunion} alt="Western Union" className="lg:object-contain w-full h-full" />
          </div>
          <div className="w-32 h-[35px] md:w-48 md:h-[30px] lg:w-96 lg:h-[125px] flex items-center">
            <img src={transwap} alt="Transwap" className="lg:object-contain w-full h-full"/>
          </div>
          <div className="w-32 h-[35px] md:w-52 md:h-[30px] lg:w-96 lg:h-[125px] flex items-center">
            <img src={cimbniaga} alt="CIMB Niaga" className="lg:object-contain w-full h-full" />
          </div>
          <div className="w-32 h-[75px] md:w-48 md:h-[75px] lg:w-64 lg:h-[125px] flex items-center">
            <img src={bca} alt="BCA" className="lg:object-contain w-full h-full"/>
          </div>
          <div className="w-32 h-[50px] md:w-48 md:h-[50px] lg:w-72 lg:h-[125px] flex items-center">
            <img src={ria} alt="Ria" className="lg:object-contain w-full h-full"/>
          </div>
          <div className="w-32 h-[35px] md:w-48 md:h-[30px] lg:w-72 lg:h-[125px] flex items-center">
            <img src={topremit} alt="Topremit" className="lg:object-contain w-full h-full"/>
          </div>
          <div className="w-32 h-[35px] md:w-48 md:h-[30px] lg:w-64 lg:h-[125px] flex items-center">
            <img src={brdgx} alt="Brdgx" className="lg:object-contain w-full h-full"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
