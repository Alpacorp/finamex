import { FC, useContext } from "react";

import ScoreContext from "../../context/ScoreContext";

import { questions } from "../../db/questions/questions.json";

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
  const { setScore } = useContext(ScoreContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form: HTMLFormElement = e.target;
    const data: FormData = new FormData(form);
    const entries: IterableIterator<[string, FormDataEntryValue]> =
      data.entries();
    const obj: { [x: string]: FormDataEntryValue } =
      Object.fromEntries(entries);
    const values: FormDataEntryValue[] = Object.values(obj);

    const sum: number = values.reduce(
      (a: number, b: FormDataEntryValue | (FormDataEntryValue & {})): number =>
        Number(a) + Number(b),
      0
    );

    setScore(sum);
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
        <Button type="button" text="Enviar" />
      </form>
    </section>
  );
};
