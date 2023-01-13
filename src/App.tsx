import "./App.css";
import { GetContact } from "./api/contacts";
import { Cta } from "./components/Cta/Cta";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HeroImage } from "./components/HeroImage";
import { Responses } from "./components/Responses";
import { ScrollDown } from "./components/ScrollDown/index";

export const App = () => {
  GetContact();
  return (
    <div>
      <Header />
      <Hero>
        <HeroImage />
      </Hero>
      <Cta>
        <ScrollDown />
      </Cta>
      <Form />
      <Responses />
    </div>
  );
};
