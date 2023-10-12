import "./App.css";
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
