import Image from "next/image";
import { useRouter } from "next/router";
import { useMainStore } from "../../store/mainStore";

// export const getStaticPaths = async () => {
//   console.log("getStaticPaths");
//   const result = await fetch(
//     "https://www.breakingbadapi.com/api/characters?limit=20"
//   );
//   const data = await result.json();

//   const paths = data.map((item: any) => {
//     return { params: { id: item.char_id.toString() } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context: any) => {
//   console.log("getStaticProps");
//   const id = context.params.id;
//   const result = await fetch(
//     "https://www.breakingbadapi.com/api/characters/" + id
//   );
//   const data = await result.json();

//   return {
//     props: { user: data },
//   };
// };

export const MOCK_DATA_CATEGORIES = [
  {
    id: 1,
    query: "hareket-elemanlari",
    name: "Hareket Elemanları",
    subCats: [
      {
        catId: 1,
        id: 1,
        query: "ac-motor-ve-reduktorler",
        name: "Ac Motor ve Redüktörler",
      },
      {
        catId: 1,
        id: 2,
        query: "spindle-motorlar",
        name: "Spindle Motorlar",
      },
      {
        catId: 1,
        id: 3,
        query: "servo-motorlar",
        name: "Servo Motorlar",
      },
    ],
  },
  {
    id: 2,
    query: "linear-hareket-elemanları",
    name: "Linear Hareket Elemanları",
    subCats: [
      {
        catId: 2,
        id: 1,
        query: "araba-ve-kizaklar",
        name: "Araba ve Kızaklar",
      },
      {
        catId: 2,
        id: 2,
        query: "vidali-mil-ve-somunlar",
        name: "Vidalı Mil ve Somunlar",
      },
      {
        catId: 2,
        id: 3,
        query: "linear-rulmanlar",
        name: "Linear Rulmanlar",
      },
    ],
  },
  {
    id: 3,
    query: "rulman",
    name: "Rulman",
    subCats: [
      {
        catId: 3,
        id: 1,
        query: "standart-rulmanlar",
        name: "Standart Rulmanlar",
      },
      {
        catId: 3,
        id: 2,
        query: "isiya-dayanikli-rulmanlar",
        name: "Isıya Dayanıklı Rulmanlar",
      },
      {
        catId: 3,
        id: 3,
        query: "tek-yonlu-rulmanlar",
        name: "Tek Yönlü Rulmanlar",
      },
      {
        catId: 3,
        id: 4,
        query: "kam-rulmanlari",
        name: "Kam Rulmanları",
      },
      {
        catId: 3,
        id: 5,
        query: "yuksek-hiz-rulmanlari",
        name: "Yüksek Hız Rulmanları",
      },
    ],
  },
  {
    id: 4,
    query: "guc-aktarim-rulmanlari",
    name: "Güç Aktarım Elemanları",
    subCats: [
      {
        catId: 4,
        id: 1,
        query: "triger-kasnak",
        name: "Triger Kasnak",
      },
      {
        catId: 4,
        id: 2,
        query: "v-kasnak",
        name: "V Kasnak",
      },
      {
        catId: 4,
        id: 3,
        query: "zincir-disli",
        name: "Zincir Dişli",
      },
      {
        catId: 4,
        id: 4,
        query: "kaplin",
        name: "Kaplin",
      },
      {
        catId: 4,
        id: 5,
        query: "kramiyer-ray-ve-pinyon-disli",
        name: "Kramiyer Ray ve Pinyon Dişli",
      },
      {
        catId: 4,
        id: 6,
        query: "konik-burclar",
        name: "Konik Burçlar",
      },
      {
        catId: 4,
        id: 7,
        query: "kama",
        name: "Kama",
      },
      {
        catId: 4,
        id: 8,
        query: "v-kayislar",
        name: "V Kayışlar",
      },
      {
        catId: 4,
        id: 9,
        query: "triger-kayislar",
        name: "Triger Kayışlar",
      },
    ],
  },
  {
    id: 5,
    query: "baglanti-elemanlari",
    name: "Bağlantı Elemanları",
    subCats: [
      {
        catId: 5,
        id: 1,
        query: "civatalar",
        name: "Civatalar",
      },
      {
        catId: 5,
        id: 2,
        query: "segmanlar",
        name: "Segmanlar",
      },
      {
        catId: 5,
        id: 3,
        query: "yarikli-pimler",
        name: "Yarıklı Pimler",
      },
      {
        catId: 5,
        id: 4,
        query: "dubeller",
        name: "Dübeller",
      },
      {
        catId: 5,
        id: 5,
        query: "paslanmaz-baglanti-elemanlari",
        name: "Paslanmaz Bağlantı Elemanları",
      },
    ],
  },
  {
    id: 6,
    query: "hirdavat-grubu",
    name: "Hırdavat Grubu",
    subCats: [
      {
        catId: 6,
        id: 1,
        query: "el-aletleri",
        name: "El Aletleri",
      },
      {
        catId: 6,
        id: 2,
        query: "elektrikli-el-aletleri",
        name: "Elektrikli El Aletleri",
      },
      {
        catId: 6,
        id: 3,
        query: "yapistirici-urunler",
        name: "Yapıştırıcı Ürünler",
      },
    ],
  },
  {
    id: 7,
    query: "muhendislik-urunleri",
    name: "Mühendislik Ürünleri",
    subCats: [
      {
        catId: 7,
        id: 1,
        query: "silikon-urunler",
        name: "Silikon Ürünler",
      },
      {
        catId: 7,
        id: 2,
        query: "teflon-urunler",
        name: "Teflon Ürünler",
      },
      {
        catId: 7,
        id: 3,
        query: "polietilen-urunler",
        name: "Polietilen Ürünler",
      },
      {
        catId: 7,
        id: 4,
        query: "teflon-kumaslar",
        name: "Teflon Kumaşlar",
      },
    ],
  },
];

export const MOCK_DATA_PRODUCTS = [
  {
    catId: 1,
    subCatId: 2,
    id: 1,
    query: "spindle-motorlar",
    name: "Spindle Motorlar",
    image: "/assets/images/products/spindle-motor.jpg",
    desc: "Spindle motorlar, yüksek güç ihtiyaçlarına cevap verebilir ve yumuşak malzemeleri işlemek için tasarlanmış olan CNC ROUTER gibi sistemlerde kullanılmaktadır.  Spindle motorlar, sıvı soğutmalı spindle motor ve hava soğutmalı spindle motor olarak iki gruba ayrılır.",
  },
];

const SingleItem = () => {
  const router = useRouter();
  const { product } = router?.query;
  const productItem = MOCK_DATA_PRODUCTS.filter((x) => x.query == product);
  console.log("productItem", productItem);
  const selectedSubCat = useMainStore((state: any) => state.selectedSubCat);
  const setSelectedSubCat = useMainStore(
    (state: any) => state.setSelectedSubCat
  );
  console.log("selectedSubCat", selectedSubCat);
  if (productItem && productItem.length > 0) {
    return (
      <div className="px-20 h-[auto] w-full flex justify-center items-start">
        <div className="h-full w-full flex justify-start items-start">
          <div className="bg-[#eaeaea] w-[300px] h-full p-2">
            <div className="w-full bg-[lightgray] border-2 border-[#3d3d3d] my-2 p-2 flex-col">
              <a
                href={`/category/${
                  MOCK_DATA_CATEGORIES.filter(
                    (x) => x.id == productItem[0].catId
                  )[0].query
                }`}
              >
                <span className="text-sm font-bold text-black mobil:text-xs w-full">
                  {`${MOCK_DATA_CATEGORIES.filter(
                    (x) => x.id == productItem[0].catId
                  )[0].name.toLocaleUpperCase()}`}
                </span>
              </a>
            </div>
            <div className="w-full bg-[white] border-2 border-[#3d3d3d] my-2 p-2 flex-col">
              <span className="text-sm font-bold text-black mobil:text-xs w-full">
                {`${productItem[0].name}`}
              </span>
            </div>
          </div>
          <div className="h-full flex-1 flex justify-start items-center flex-col">
            <div className="w-full h-12 flex items-center justify-center">
              <span className="text-black">{productItem[0].name}</span>
            </div>
            <div className="w-full flex justify-center items-center flex-wrap">
              {MOCK_DATA_PRODUCTS?.filter((x) => {
                return x.query == productItem[0]?.query;
              }).map((item, key) => {
                console.log("item", item);
                return (
                  <>
                    <div
                      key={key}
                      className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"
                    >
                      {item?.image ? (
                        <Image
                          onClick={() => {}}
                          src={`${item?.image}`}
                          alt={`${item.name}`}
                          width={400}
                          height={400}
                          className="mobil:w-[240px] cursor-pointer"
                        />
                      ) : null}
                    </div>
                    <div
                      key={key}
                      className=" bg-white flex justify-center items-center m-4"
                    >
                      {<span className="text-black">{item?.desc}</span>}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-[500px] w-full flex justify-center items-center">
      <div className="h-[50px] w-full flex justify-center items-center">
        <span className="text-black">{"Ürün Bulunamadı"}</span>
      </div>
    </div>
  );
};

export default SingleItem;
