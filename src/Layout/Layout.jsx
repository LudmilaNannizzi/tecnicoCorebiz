import Footer from "./Footer";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Newsletter />
      <Footer />
    </>
  );
};
export default Layout;
