import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMainStore } from "../store/mainStore";

const InfoTopBar = () => {
  return (
    <div className="md:px-20 mobil:px-4 sm:flex-row bg-[#3d3d3d] h-12 flex items-center justify-between mobil:py-2 sm:py-auto">
      <span className="mobil:text-xs sm:text-sm">
        WhatsApp: <span className="text-[#0c92c8]">0546 465 5663</span>
      </span>
      <span className="mobil:text-xs sm:text-sm">
        Email: <span className="text-[#0c92c8]">cihatrulman@hotmail.com</span>
      </span>
    </div>
  );
};

const Navbar = () => {
  const showCats = useMainStore((state: any) => state.showCats);
  const setShowCats = useMainStore((state: any) => state.setShowCats);
  const router = useRouter();
  const { category } = router?.query;
  const { product } = router?.query;
  console.log("category", category);
  return (
    <>
      <InfoTopBar />
      <div className="md:px-20 mobil:px-4 mobil:flex-col sm:flex-row bg-white sm:h-24 mobil:h-48 mobil:flex mobil:justify-between mobil:items-center">
        <div className="text-black mobil:flex sm:flex sm:w-[300px] mobil:w-full mobil:h-1/2 sm:justify-start mobil:justify-center items-center sm:h-[100%] mr-4">
          <Image
            onClick={() => {
              //@ts-ignore
              window.location = "/";
            }}
            src={"/assets/images/rulman-teknik-logo-400x400.png"}
            alt={"Rulman Teknik Logo"}
            width={400}
            height={400}
            className="mobil:w-[240px] cursor-pointer"
          />
        </div>
        <div className="text-black mobil:flex sm:flex  mobil:w-full mobil:h-1/2 justify-center items-center sm:h-[100%]">
          <input
            className="bg-white border-4 border-[#0c92c8] w-full h-1/2 pl-2 sm:text-sm mobil:text-xs rounded-xl"
            placeholder="Ürün ara..."
          />
        </div>
        <div className="text-black mobil:hidden md:flex w-fit items-center flex justify-center md:w-[100px] h-[100%] sm:justify-end">
          <span className="text-sm font-bold">Login</span>
        </div>
      </div>
      <div className="md:px-20 mobil:px-4 h-12 bg-[#0c92c8] flex justify-between items-center mobil:h-[200px] sm:h-12">
        <div
          // style={{ opacity: category ? 0 : 1 }}
          onClick={() => {
            //@ts-ignore
            category || product ? (window.location = "/") : null;
            setShowCats(!showCats);
          }}
          className="mobil:hidden md:flex md:w-[300px] bg-[#3d3d3d] h-full items-center flex pl-2 mr-2 cursor-pointer"
        >
          <span className="text-sm font-bold">KATEGORİLER</span>
        </div>
        <div className="mobil:w-full sm:w-full md:w-[300px] lg:w-[400px] justify-between flex items-start mobil:flex-col mobil:items-center mobil:h-[200px] sm:h-12 sm:flex-row mobil:py-4">
          <a
            className="text-sm font-bold text-black hover:underline mobil:text-xs"
            href="/"
          >
            ANA SAYFA
          </a>
          <a
            className={
              category
                ? "hidden"
                : "sm:flex md:hidden text-sm font-bold text-black hover:underline mobil:text-xs"
            }
            href="/catagories"
          >
            KATEGORİLER
          </a>
          <a
            className="text-sm font-bold text-black hover:underline mobil:text-xs"
            href="/"
          >
            ÜRÜNLERİMİZ
          </a>
          <a
            className="text-sm font-bold text-black hover:underline mobil:text-xs"
            href="/about"
          >
            HAKKIMIZDA
          </a>
          <a
            className="text-sm font-bold text-black hover:underline mobil:text-xs"
            href="/contact"
          >
            İLETİŞİM
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
