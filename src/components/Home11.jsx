import group7 from '../assets/Group 7.png';

function Home11() {
  return (
    <div className="mt-40 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col justify-center items-center">
        
        {/* Judul Visi Misi */}
        <div className="text-center mt-10">
          <h1 className="font-bold text-[#505050] text-3xl">Visi Misi</h1>
        </div>
        
        {/* Gambar dengan lebar responsif */}
        <div className="mt-10 w-full sm:w-3/4 md:w-3/4 lg:w-3/4">
          <img src={group7} className="w-full h-auto" alt="Visi Misi" />
        </div>
      </div>
    </div>
  );
}

export default Home11;
