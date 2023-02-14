import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <div className="flex justify-center items-center">
      <div className="mobil:w-screen lg:w-[1280px] lg:border-[#3d3d3d] lg:border-4">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
