
import group58682 from "../assets/Group 58682.png"

function Home11() {
  return (
    <div className="mt-40 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col justify-center items-center">
        
        {/* Judul Visi Misi */}
        <div className="text-center mt-10">
          <h1 className="font-semibold text-2xl md:text-3xl text-[#505050]">Visi Misi</h1>
        </div>
        
        {/* Gambar dengan lebar responsif */}
        <div className="mt-10 flex justify-center items-center">
          <img src={group58682} className="w-full sm:w-3/4 lg:w-11/12 h-auto" alt="Visi Misi" />
        </div>
      </div>
    </div>
  );
}

export default Home11;
