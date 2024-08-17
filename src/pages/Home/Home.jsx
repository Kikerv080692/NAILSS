
import Footer from "../../components/Contacts/Contacts";
import Header from "../../components/Header/Header";
import { Interesting } from "../../components/Interesting/Interesting";
import { Login } from "../../components/Login/Login";

import Nav from "../../components/Navigation/Nav";
import { Register } from "../../components/Register/Register";
import Price from "../../components/Price/Price.jsx";
import { CalendarPage } from "../../components/CalendarPage/CalendarPage.jsx"
import { Nailss } from "../../components/Nailss/Nailss.jsx";
import { AboutMe } from "../../components/AboutMe/AboutMe.jsx";




export const Home = () => {

  return (
    <div>
      <Register />
      <Login />
      <Nav />
      <Header />
      <AboutMe/>
      <Nailss/>
      <CalendarPage />
      <Interesting />
      <Price />
      <Footer />
    </div>
  );
};
