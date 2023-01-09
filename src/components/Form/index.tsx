import "./styles.css";
import "../../components/gc-styles.css";
import { questions } from "../../db/questions/questions.json";

export interface FormProps {
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

export const Form = () => {
  console.log("questions", questions);

  return (
    <section id="form" className="form">
      <div className="container">
        {questions.map((question: any) => {
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
                      />
                      <label htmlFor={option.id}> {option.option}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
