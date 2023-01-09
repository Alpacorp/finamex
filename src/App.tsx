import "./App.css";
import { Cta } from "./components/Cta/Cta";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info/info";

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Info />
      <Cta />
      <Form />
    </div>
  );
};
