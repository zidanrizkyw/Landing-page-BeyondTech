import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import group58682 from "../assets/Group 58682.webp"

function Home11() {
  useEffect(() => {
    AOS.init(
      {once: true}
    );
  }, [])
  return (
    <div className="container mx-auto mt-40 px-4 md:px-10 lg:px-20" data-aos="fade-up" data-aos-duration="500">
      <div className="flex flex-col justify-center items-center">
        
        {/* Judul Visi Misi */}
        <div className="text-center mt-10">
          <h1 className="font-semibold text-2xl md:text-3xl text-[#505050]">Visi Misi</h1>
        </div>
        
        {/* Gambar dengan lebar responsif */}
        <div className="mt-10 flex justify-center items-center">
          <img src={group58682} className="w-full sm:w-3/4 lg:w-11/12 h-auto" alt="Visi Misi" width={100} height={100}/>
        </div>
      </div>
    </div>
  );
}

export default Home11;
