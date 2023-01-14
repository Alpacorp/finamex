import { createContext, useState } from "react";

const ScoreContext = createContext({
  score: 0,
  setScore: (score: number) => {},
});

interface ScoreProviderProps {
  children: React.ReactNode;
}

export const ScoreProvider = ({ children }: ScoreProviderProps) => {
  const [score, setScore] = useState(0);
  console.log("score context", score);
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContext;
