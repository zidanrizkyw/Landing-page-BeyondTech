import layer1 from "../assets/Layer_1.png";
import facebook from "../assets/Facebook.png";
import twitter from "../assets/Twitter.png";
import instagram from "../assets/Instagram.png";

function Footer() {
  return (
    <div className="mt-20">
      <div className="flex flex-col lg:flex-row justify-center bg-[#003C6A] lg:space-x-10 p-5">
        <div className="flex flex-col items-center lg:items-start mt-5 lg:mt-20 lg:ml-10 w-full lg:w-1/3 text-center lg:text-left">
          <img src={layer1} />
          <p className="text-sm text-[#FFFFFF] mt-10">
            Track your card order effortlessly!
          </p>
          <p className="text-sm text-[#FFFFFF]">
            Log in to your account and check the
          </p>
          <p className="text-sm text-[#FFFFFF]">
            "Order History" for real-time updates.
          </p>
          <p className="text-sm text-[#FFFFFF]">
            Simplify tracking with Hamilton.
          </p>
          <div className="flex flex-row mt-4 lg:mt-10">
            <img src={facebook} />
            <img src={twitter} />
            <img src={instagram} />
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-10 lg:mt-20 space-y-5">
          <h1 className="font-bold text-[#FFFFFF] text-center lg:text-left lg:mt-10">Our Services</h1>
          <div className="grid grid-cols-2 gap-y-3 text-center lg:text-left">
            <p className=" text-sm text-[#FFFFFF]">Product</p>
            <p className=" text-sm text-[#FFFFFF]">Solution</p>
            <p className=" text-sm text-[#FFFFFF]">Partners</p>
            <p className=" text-sm text-[#FFFFFF]">Resources</p>
            <p className=" text-sm text-[#FFFFFF]">Company</p>
            <p className="text-sm text-[#FFFFFF]">Enterprise</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-10 lg:mt-20 text-center lg:text-left">
          <h1 className="font-bold text-[#FFFFFF] lg:mt-10">Contact</h1>

          <p className=" text-sm text-[#FFFFFF] mt-3">
            Propan Tower @ Ciputra International - 14, Lantai 5
          </p>
          <p className=" text-sm text-[#FFFFFF]">
            RT.14/RW.4, Rw. Buaya, Kecamatan Cengkareng,
          </p>
          <p className=" text-sm text-[#FFFFFF]">
            Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta
          </p>
          <p className=" text-sm text-[#FFFFFF]">11740</p>
        </div>
      </div>
      <div className="p-2 flex justify-center bg-[#012542]">
        <p className=" text-sm text-[#FFFFFF] text-center ">©2024 PT. Adisena Mitra Usaha. Hak Cipta Dilindungi Undang-Undang.</p>
      </div>
    </div>
  );
}

export default Footer;
