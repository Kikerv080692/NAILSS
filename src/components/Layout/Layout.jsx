import { Outlet } from "react-router-dom";
import Footer from "../Contacts/Contacts";
import Header from "../Header/Header";


export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
