import { FC } from "react";

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
  subquestions?: QuestionProps[] | undefined | [];
}

export const Question: FC<OptionsProps> = ({
  id,
  title,
  option,
  value,
  subquestions,
}) => {
  return (
    <>
      <div className="question">
        <div className="question-content" key={id}>
          <h4 className="question-title">{title}</h4>
          <div key={id}>
            <div className="question-options" key={id}>
              <input id={id} name={id} required type="radio" value={value} />
              <label htmlFor={id}>{option}</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
