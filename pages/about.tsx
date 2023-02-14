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

export default function About() {
  return (
    <div className="bg-white">
      <Head>
        <title>Rulman Teknik</title>
        <meta name="description" content="Rulman Teknik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-start items-start h-[auto] bg-white w-full px-20 flex-col">
        <div className="w-full h-12 flex justify-center items-center">
          <span className="text-black font-bold text-[24px]">HAKKIMIZDA</span>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap">
          <p className="text-black">
            Erol Rulman ve Teknik Hırdavat Üzerine Her Türlü Ürün ! Firmamız
            Sektöre 1993 yılında Eminönü Tahtakale’de Rulman toptancılığı ile
            başlamıştır. Zamanın ve şartların değişmesinden dolayı Rulman
            sektörünün yanında Hırdavat,Kesici takım vb.ürün çeşitliliğiyle 2002
            yılında İkitelli Organize Sanayi Bölgesi’ne taşınmıştır. Firmamızı
            daha ileri götürmek üzere toptan satışına ilaveten perakende
            satışına başlanmıştır. Zengin ürün çeşitliliği ile firmamız her
            geçen gün müşterilerine en iyi hizmeti vermeyi görev bilmiştir. Her
            geçen gün daha da büyüyerek müşterilerine kaliteli ürünleri en uygun
            fiyatla sunmaktadır. Müşteri memnuniyetini ve güvenini ön planda
            tutan firmamız kaliteli ve zamanında hizmet prensibiyle her geçen
            gün daha iyi olma amacındadır.
          </p>
        </div>
        <div className="w-full h-12 flex justify-center items-center">
          <span className="text-black font-bold">VİZYONUMUZ</span>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap">
          <p className="text-black">
            Alanında, en iyi ve en tecrübeli işbirlikçelirimizle çalışarak,
            sektörde sürdürülebilir büyümeyi sağlamak. Nihayetinde sektördeki
            lider kuruluşlar arasında yer almak, müşteri memnuniyetimizi
            maksimize etmek, kolay erişilebilirlik, aktif teknik destek ve
            zengin ürün çeşitliliğini sağlamak.
          </p>
        </div>
        <div className="w-full h-12 flex justify-center items-center">
          <span className="text-black font-bold">MİSYONUMUZ</span>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap">
          <p className="text-black">
            Yerli ve Yabancı Dünyanın önde gelen işbirlikçileriyle çalışarak, en
            iyi ürünleri, en uygun fiyattan müşterilerimizle buluşturuyoruz.
          </p>
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
