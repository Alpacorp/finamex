import { FC, useContext, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import ScoreContext from "../../context/ScoreContext";

import { questions } from "../../db/questions/questions.json";

import { Button } from "../Button";

import "../../components/component-styles.css";
import "./styles.css";
import { useForm } from "../../hooks/useForm";
import { apiCreateContact } from "../../apis/createContact";

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
  const { setScore } = useContext(ScoreContext);
  const [recaptcha, setRecaptcha] = useState<string>("");
  const recaptchaRef: React.MutableRefObject<any> = useRef<any>(null);
  const secret: string = import.meta.env.VITE_SECRET_CAPTCHA;

  const [formValues, handleInputChange, reset] = useForm({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });

  const { firstname, lastname, phone, email } = formValues;

  const sumarValoresRadio = () => {
    const radios: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      "input[type='radio']"
    );
    let total: number = 0;
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        total += parseInt(radios[i].value);
      }
    }
    setScore(total);
  };

  const handleChangeCaptcha = (value: any) => {
    const recaptchaValue = recaptchaRef.current.getValue();
    setRecaptcha(recaptchaValue);
  };

  const handleCreateContact = (e: any) => {
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
            `Hola ${firstname}, tu correo ya está en nuestras bases de datos, sin embargo, con este nuevo registro actualizaremos la información. ¡Muchas gracias! A continuación, te mostramos tu resultado ✅.`
          );
        res.status === 200 &&
          !res.data.message.code &&
          alert(
            `hola ${firstname} ${lastname}, tu registro fue exitoso. A continuación, te mostramos tu resultado ✅.`
          );
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
        alert(
          `${firstname}, tuvimos un error en el registro ❌ por favor intenta nuevamente o hazlo más tarde.`
        );
        window.location.href = "/";
      });
    sumarValoresRadio();
    reset();
  };

  const verifyCapcha = (e: any) => {
    fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${recaptcha}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("ok captcha", data);
          handleCreateContact(e);
        } else if (
          !data.success &&
          data["error-codes"][0] === "invalid-input-response"
        ) {
          alert(
            `${firstname} por favor verifica ✅ el código captcha para continuar,`
          );
        } else {
          console.log("error captcha", data);
        }
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    verifyCapcha(e);
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
        <div className="container alejo">
          {questions.map((question: QuestionProps) => {
            return (
              <div className="question-content" key={question.id}>
                <h4 className="question-title">{question.title}</h4>
                <div key={question.id}>
                  {question.options?.map((option: OptionsProps) => {
                    return (
                      <div className="question-options" key={option.id}>
                        <input
                          type="radio"
                          id={option.id}
                          name={question.id}
                          value={option.value}
                          required
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
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Digita tus nombres"
            onChange={handleInputChange}
            value={firstname}
            required
          />
          <input
            className="input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Digita tus apellidos"
            onChange={handleInputChange}
            value={lastname}
            required
          />
          <input
            className="input"
            type="number"
            name="phone"
            id="phone"
            onChange={handleInputChange}
            placeholder="Digita tu teléfono"
            value={phone}
            required
          />
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            onChange={handleInputChange}
            value={email}
            placeholder="Digita tu correo electrónico"
            required
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
            sitekey="6LdBcgMkAAAAAG1guFqtvgKW1lOgdFI4QzpJ8TlC"
            onChange={handleChangeCaptcha}
            ref={recaptchaRef}
            size="normal"
          />
        </div>
        <Button type="button" text="Enviar" />
      </form>
    </section>
  );
};
