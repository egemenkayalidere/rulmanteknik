import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="mobil:h-auto md:h-[300px] bg-[#eaeaea] px-20 pb-2 flex mobil:flex-col md:flex-row w-full border-t-2 border-[#0c92c8] mobil:justify-center mobil:items-center">
        <div className="mobil:w-full md:w-1/4 h-full flex justify-between flex-col">
          <div className="h-1/3 flex justify-start items-center">
            <img
              src="/assets/images/rulman-teknik-logo-400x400.png"
              width={100}
              height={100}
              style={{ padding: 0 }}
            />
          </div>
          <div className="h-1/3 flex justify-center items-start flex-col">
            <span className="text-sm text-black font-bold">MERKEZ ADRES</span>
            <span className="text-xs text-black font-thin">
              İ.O.S.B. BAĞCILAR GÜNGÖREN SAN. SİT. BÜYÜK ÇARŞI GRUBU NO:94
              BAŞAKŞEHİR /İSTANBUL 0212 549 11 34 - 0212 549 11 35 -
              info@cihatrulman.com.tr
            </span>
          </div>
          <div className="h-1/3 flex justify-center items-start flex-col">
            <span className="text-sm text-black font-bold">ŞUBE ADRES</span>
            <span className="text-xs text-black font-thin">
              AKÇABURGAZ MAHALLESİ 319. SOKAK NO:11/5 ESENYURT /İSTANBUL 0212
              858 07 09 - cihatrulman@hotmail.com
            </span>
          </div>
        </div>
        <div className="mobil:w-full md:w-1/4 h-full flex justify-between flex-col">
          <div className="h-1/3 flex justify-start items-center flex-col pt-12">
            <span className="text-sm text-black font-bold">Site Haritası</span>
            <br />
            <span className="text-sm text-black font-thin">Ana Sayfa</span>
            <br />
            <span className="text-sm text-black font-thin">Ürünlerimiz</span>
            <br />
            <span className="text-sm text-black font-thin">Hakkımızda</span>
            <br />
            <span className="text-sm text-black font-thin">İletişim</span>
          </div>
        </div>
        <div className="mobil:w-full md:w-1/4 h-full flex justify-between flex-col">
          <div className="h-1/3 flex justify-start items-center flex-col pt-12">
            <span className="text-sm text-black font-bold">Sosyal Medya</span>
            <br />
            <span className="text-sm text-black font-thin">-</span>
            <br />
            <span className="text-sm text-black font-bold">Önemli Linkler</span>
            <br />
            <span className="text-sm text-black font-thin">-</span>
            <br />
            <span className="text-sm text-black font-thin">-</span>
          </div>
        </div>
        <div className="mobil:w-full md:w-1/4 h-full flex justify-between flex-col">
          <div className="h-1/3 flex justify-start items-center flex-col pt-12">
            <span className="text-sm text-black font-bold">
              Popüler Ürünler
            </span>
            <br />
            <span className="text-sm text-black font-thin">-</span>
            <br />
            <span className="text-sm text-black font-thin">-</span>
            <br />
            <span className="text-sm text-black font-thin">-</span>
            <br />
            <span className="text-sm text-black font-thin">-</span>
          </div>
        </div>
      </div>
      <div className="mobil:hidden md:flex h-[50px] bg-[#dcdcdc] flex justify-between items-center px-20">
        <span className="text-xs font-thin text-black">
          @ 2022 Developed and Designed by <b>EgKa Soft</b>
        </span>
        <img
          src="/assets/images/payment-icons.png"
          width={200}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default Footer;
