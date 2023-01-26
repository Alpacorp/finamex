import { FC, useContext, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRollbar } from "@rollbar/react";

import ScoreContext from "../../context/ScoreContext";
import { apiCreateContact } from "../../apis/createContact";

import { questions } from "../../db/questions/questions.json";
import { useForm } from "../../hooks/useForm";
import { sumRadioValues, capitalize, validatePhone } from "../../utils/";

import { Button } from "../Button";

import "../../components/component-styles.css";
import "./styles.css";

export interface QuestionProps {
  id?: string | undefined;
  title?: string;
  options?: OptionsProps[] | undefined;
}

export interface OptionsProps {
  id?: string | undefined;
  options?: string | (string & {}) | undefined | null;
  title?: string;
  option?: string;
  value?: number;
}

export const Form: FC = () => {
  const { setScore, detectedDevice } = useContext(ScoreContext);
  const [captchaStatus, setCaptchaStatus] = useState<Boolean>(false);
  const recaptchaRef: React.MutableRefObject<ReCAPTCHA | undefined> = useRef<
    ReCAPTCHA | undefined
  >();
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string;
  const rollbar = useRollbar();

  const [formValues, handleInputChange, reset] = useForm({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    website: "https://inverfobia.com",
    company: "Inverfobia",
  });

  const { firstname, lastname, phone, email } = formValues;
  const { total } = sumRadioValues();

  const handleChangeCaptcha = () => {
    const recaptchaValue = recaptchaRef?.current?.getValue();
    apiCreateContact
      .post("/captcha", {
        token: recaptchaValue,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(({ data: { message } }) => {
        if (message.success) {
          setCaptchaStatus(true);
        } else if (
          !message.success &&
          message["error-codes"][0] === "invalid-input-response"
        ) {
          alert(
            `${firstname} por favor verifica ✅ el código captcha para continuar.`
          );
        }
      })
      .catch((err) => {
        console.log("err ❌", err);
        rollbar.info("Error en el registro de captcha", err);
        alert(
          `Hubo un error en el registro ❌ por favor intenta nuevamente o hazlo más tarde.`
        );
      });
  };

  const handleCreateContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    apiCreateContact
      .post("/hubspot/contact", formValues, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        res.status === 200 &&
          res.data.message.code === 409 &&
          alert(
            `Hola ${firstname}, tu correo ya está en nuestras bases de datos, sin embargo, con este nuevo registro actualizaremos la información. ¡Muchas gracias! A continuación, te mostramos tu resultado ✅`
          );
        res.status === 200 &&
          !res.data.message.code &&
          alert(
            `Hola ${firstname} ${lastname}, tu registro fue exitoso. A continuación, te mostramos tu resultado ✅`
          );
      })
      .catch((err) => {
        console.log("err ❌", err);
        rollbar.info("Error en el registro de contacto", err);
        alert(
          `Hubo un error en el registro ❌ por favor intenta nuevamente o hazlo más tarde.`
        );
      });
    setScore(total);
    reset();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleChangeCaptcha();

    if (!validatePhone(phone)) {
      alert("❌ Por favor ingresa un número de celular válido 📲");
      return;
    }

    captchaStatus && handleCreateContact(e);
  };

  return (
    <section id="form" className="form">
      <div className="container title">
        <div className="form-title">
          <p>
            Completa el siguiente formulario y{" "}
            <span className="highlight-yellow">descubre la solución</span>{" "}
            específica para enfrentar sus síntomas
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          {questions.map((question: QuestionProps) => {
            return (
              <div className="question-content" key={question.id}>
                <h4 className="question-title">{question.title}</h4>
                <div key={question.id}>
                  {question.options?.map((option: OptionsProps) => {
                    return (
                      <div className="question-options" key={option.id}>
                        <input
                          id={option.id}
                          name={question.id}
                          required
                          type="radio"
                          value={option.value}
                        />
                        <label htmlFor={option.id}>{option.option}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="form-title">
          <p>
            Registra tus datos para{" "}
            <span className="highlight-yellow">mostrar tu resultado</span>
          </p>
        </div>
        <div className="container data">
          <input
            className="input"
            id="firstname"
            minLength={3}
            name="firstname"
            onChange={handleInputChange}
            placeholder="Nombre(s)"
            required
            type="text"
            value={capitalize(firstname)}
          />
          <input
            className="input"
            id="lastname"
            minLength={3}
            name="lastname"
            onChange={handleInputChange}
            placeholder="Apellido(s)"
            required
            type="text"
            value={capitalize(lastname)}
          />
          <input
            className="input"
            id="phone"
            name="phone"
            onChange={handleInputChange}
            placeholder="Número telefónico"
            required
            type="number"
            value={phone}
          />
          <input
            className="input"
            id="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Correo electrónico"
            required
            type="email"
            value={email}
          />
          <div className="terms">
            <input type="checkbox" name="terms" id="terms" required />
            <label htmlFor="terms">
              Acepta la{" "}
              <a href="" target="_blank">
                política de privacidad
              </a>
            </label>
          </div>
          <ReCAPTCHA
            sitekey={siteKey}
            onChange={handleChangeCaptcha}
            ref={recaptchaRef as any}
            size={detectedDevice === "mobile" ? "compact" : "normal"}
          />
        </div>
        <Button type="button" text="Enviar" />
      </form>
    </section>
  );
};
