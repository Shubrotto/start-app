import { useEffect } from "react";
import AppCached from "./App.css";
import Header from "./components/header/Header";
import Footer from "./layout/footer/Footer";
import Topbar from "./layout/topbar/Topbar";
import Services from "./components/services/Services";
import MeetSuper from "./components/meet/MeetSuper";
import OtherServices from "./components/otherservices/OtherServices";
import Why from "./components/why/Why";
import PeopleBlog from "./components/blog/PeopleBlog";
import Form from "./components/form/Form";

function App() {
  useEffect(() => {
    const cachedCSS = localStorage.getItem("cachedCSS");
    if (cachedCSS) {
      const styleTag = document.createElement("style");
      styleTag.innerHTML = cachedCSS;
      document.head.appendChild(styleTag);
    } else {
      const stringifyStyles = (stylesObject) => {
        let styleString = "";
        for (const selector in stylesObject) {
          styleString += `${selector} { ${stylesObject[selector]} } `;
        }
        return styleString;
      };

      const cachedStylesString = stringifyStyles(AppCached);

      localStorage.setItem("cachedCSS", cachedStylesString);

      const styleTag = document.createElement("style");
      styleTag.innerHTML = cachedStylesString;
      document.head.appendChild(styleTag);
    }
  }, []);
  return (
    <>
      <Topbar />
      <main className="main">
        <Header />
        <Services />
        <MeetSuper />
        <OtherServices />
        <Why />
        <PeopleBlog />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
