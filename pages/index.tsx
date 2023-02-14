import Head from "next/head";
import styles from "../styles/Home.module.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Carousel from "better-react-carousel";
import { useMainStore } from "../store/mainStore";
import { MOCK_DATA_CATEGORIES } from "./category/[category]";

export const getStaticProps = async () => {
  console.log("getStaticProps");
  // const result = await fetch(
  //   "https://www.breakingbadapi.com/api/characters?limit=20"
  // );
  // const users = await result.json();
  return {
    props: { users: [] },
  };
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Home({ users }: any) {
  console.log("users", users);
  const showCats = useMainStore((state: any) => state.showCats);
  console.log("showCats", showCats);
  return (
    <div className="bg-white">
      <Head>
        <title>Rulman Teknik</title>
        <meta name="description" content="Rulman Teknik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:px-20 mobil:px-4 bg-white flex justify-center items-start mobil:h-[300px] sm:h-[500px]">
        <div
          style={{ display: showCats ? "flex" : "none" }}
          className="bg-[#0c92c8] h-[500px] md:w-[300px] flex-col px-4 mobil:hidden md:flex py-4"
        >
          {MOCK_DATA_CATEGORIES.map((item, key) => {
            return (
              <div className="w-full bg-white mb-2 p-2" key={key}>
                <a
                  className="text-sm font-bold text-black hover:underline mobil:text-xs w-full"
                  href={`/category/${item?.query}`}
                >
                  {`${item?.name.toLocaleUpperCase()} (${
                    item?.subCats?.length
                  })`}
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex-1 h-full pl-4">
          <AwesomeSlider
            bullets={false}
            style={{ height: "100%", width: "100%" }}
          >
            <div>
              <img src="https://erolrulmanhirdavat.com/wp-content/uploads/2020/07/Erol-rulman-ve-teknik-h%C4%B1rdavat-2.png" />
            </div>
            <div>
              <img src="https://erolrulmanhirdavat.com/wp-content/uploads/2020/07/Erol-rulman-ve-teknik-h%C4%B1rdavat-2.png" />
            </div>
            <div>
              <img src="https://erolrulmanhirdavat.com/wp-content/uploads/2020/07/Erol-rulman-ve-teknik-h%C4%B1rdavat-2.png" />
            </div>
          </AwesomeSlider>
        </div>
      </div>
      <div className="md:px-20 mobil:px-4 bg-white flex sm:justify-between items-center sm:h-[200px] py-4 mobil:flex-col sm:flex-row mobil:h-[400px]">
        <div className="border-2 h-full w-[240px] justify-center items-center flex-col flex mobil:mb-4 sm:mb-0">
          <img src="/assets/images/fast-delivery.png" width={75} />
          <span className="text-sm font-bold text-[#3d3d3d]">
            Hızlı Teslimat
          </span>
          <span className="text-sm text-[#3d3d3d]">Türkiye'nin Her Yerine</span>
        </div>
        <div className="border-2 h-full w-[240px] justify-center items-center flex-col flex mobil:mb-4 sm:mb-0">
          <img src="/assets/images/feedback.png" width={75} />
          <span className="text-sm font-bold text-[#3d3d3d]">%99 Olumlu</span>
          <span className="text-sm text-[#3d3d3d]">Geri Bildirim</span>
        </div>
        <div className="border-2 h-full w-[240px] justify-center items-center flex-col flex mobil:mb-4 sm:mb-0">
          <img src="/assets/images/parcel.png" width={75} />
          <span className="text-sm font-bold text-[#3d3d3d]">365 Gün</span>
          <span className="text-sm text-[#3d3d3d]">Ücretsiz İade</span>
        </div>
        <div className="border-2 h-full w-[240px] justify-center items-center flex-col flex mobil:mb-4 sm:mb-0">
          <img src="/assets/images/credit-card.png" width={75} />
          <span className="text-sm font-bold text-[#3d3d3d]">Güvenli</span>
          <span className="text-sm text-[#3d3d3d]">Online Ödeme</span>
        </div>
      </div>
      <div className="flex justify-center items-center h-[150px] bg-white w-full border-y-2 px-20">
        <Carousel
          cols={6}
          rows={1}
          gap={20}
          loop={true}
          autoplay={4000}
          scrollSnap={true}
          showDots={true}
        >
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/SKF-RULMAN-HESAPLI-RULMAN.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/FAG-RULMAN.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/%C4%B0NA-RULMAN-.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/NSK-RULMAN.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2021/09/timken-logo.png"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/NTN-RULMAN.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/SKF-RULMAN-HESAPLI-RULMAN.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/FAG-RULMAN.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/%C4%B0NA-RULMAN-.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/NSK-RULMAN.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2021/09/timken-logo.png"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/NTN-RULMAN.jpg"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="flex justify-start items-start h-[auto] bg-white w-full px-20 flex-col">
        <div className="w-full h-12 flex justify-center items-center">
          <span className="text-black font-bold">SİZİN İÇİN SEÇTİKLERİMİZ</span>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap">
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
        </div>
      </div>
      <div className="flex justify-start items-start h-[auto] bg-white w-full px-20 flex-col">
        <div className="w-full h-12 flex justify-center items-center">
          <span className="text-black font-bold">EN ÇOK SATANLAR</span>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap">
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
          <div className="w-[200px] h-[200px] bg-white border-2 flex justify-center items-center m-4"></div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[150px] bg-white w-full border-y-2 px-20">
        <Carousel
          cols={6}
          rows={1}
          gap={20}
          loop={true}
          autoplay={4000}
          scrollSnap={true}
          showDots={true}
        >
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/SKF-RULMAN-HESAPLI-RULMAN.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/FAG-RULMAN.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/%C4%B0NA-RULMAN-.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/NSK-RULMAN.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2021/09/timken-logo.png"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/NTN-RULMAN.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/SKF-RULMAN-HESAPLI-RULMAN.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/FAG-RULMAN.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/%C4%B0NA-RULMAN-.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/NSK-RULMAN.jpg"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2021/09/timken-logo.png"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width="65%"
                height={"100%"}
                src="https://www.1001rulman.com.tr/wp-content/uploads/2019/11/NTN-RULMAN.jpg"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* {users.map((item: any, key: any) => {
        return (
          <div key={key}>
            <Link href={"/users/" + item.char_id}>
              <span>{item.name}</span>
            </Link>
          </div>
        );
      })} */}
    </div>
  );
}
