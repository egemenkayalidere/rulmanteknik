import Head from "next/head";
import styles from "../styles/Home.module.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Carousel from "better-react-carousel";

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

export default function Contact() {
  return (
    <div className="bg-white">
      <Head>
        <title>Rulman Teknik</title>
        <meta name="description" content="Rulman Teknik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-start items-start h-[auto] bg-white w-full px-20 flex-col">
        <div className="w-full h-12 flex justify-center items-center">
          <span className="text-black font-bold text-[24px]">İLETİŞİM</span>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap">
          <div className="text-black">
            <b>Adres Bilgisi</b>
            <br />
            <br />
            İkitelli Organize Sanayi Bölgesi Tormak Sanayi Sitesi Sosyal
            Tesisler B Blok No:2 Başakşehir/İSTANBUL
            <br />
            <br />
            <b>İletişim Bilgisi</b>
            <br />
            <br />
            0212 222 22 22
            <br />
            info@erolrulmanhirdavat.com
          </div>
        </div>
        <div className="w-full h-12 flex justify-center items-center">
          <span className="text-black font-bold">HARİTA - GOOGLE MAPS</span>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap">
          <div className="w-full">
            <iframe
              width="100%"
              height="600"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%C4%B0kitelli%20Orga%20Tormak%20Sanayi%20Sitesi+(Rulman%20Teknik)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
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
                width="25%"
                height={"100%"}
                src="https://erolrulmanhirdavat.com/wp-content/uploads/2020/06/66fbdb1d4b3b8cc72b05e768d11bba26.jpg"
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
                width="25%"
                height={"100%"}
                src="https://erolrulmanhirdavat.com/wp-content/uploads/2020/06/akcal-logo.png"
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
                width="25%"
                height={"100%"}
                src="https://erolrulmanhirdavat.com/wp-content/uploads/2020/06/66fbdb1d4b3b8cc72b05e768d11bba26.jpg"
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
                width="25%"
                height={"100%"}
                src="https://erolrulmanhirdavat.com/wp-content/uploads/2020/06/akcal-logo.png"
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
                width="25%"
                height={"100%"}
                src="https://erolrulmanhirdavat.com/wp-content/uploads/2020/06/66fbdb1d4b3b8cc72b05e768d11bba26.jpg"
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
                width="25%"
                height={"100%"}
                src="https://erolrulmanhirdavat.com/wp-content/uploads/2020/06/akcal-logo.png"
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
                width="25%"
                height={"100%"}
                src="https://erolrulmanhirdavat.com/wp-content/uploads/2020/06/66fbdb1d4b3b8cc72b05e768d11bba26.jpg"
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
                width="25%"
                height={"100%"}
                src="https://erolrulmanhirdavat.com/wp-content/uploads/2020/06/akcal-logo.png"
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
                width="25%"
                height={"100%"}
                src="https://erolrulmanhirdavat.com/wp-content/uploads/2020/06/66fbdb1d4b3b8cc72b05e768d11bba26.jpg"
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
                width="25%"
                height={"100%"}
                src="https://erolrulmanhirdavat.com/wp-content/uploads/2020/06/akcal-logo.png"
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
                width="25%"
                height={"100%"}
                src="https://erolrulmanhirdavat.com/wp-content/uploads/2020/06/66fbdb1d4b3b8cc72b05e768d11bba26.jpg"
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
                width="25%"
                height={"100%"}
                src="https://erolrulmanhirdavat.com/wp-content/uploads/2020/06/akcal-logo.png"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
