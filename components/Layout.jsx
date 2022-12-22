import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
  
// const Header = () => {
//   return <h3>This is Header</h3>;
// };
  
// const Footer = () => {
//   return <h3>This is Footer</h3>;
// };
  
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
  
export default Layout;