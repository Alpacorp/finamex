import { createContext, useState } from "react";

interface ScoreProviderProps {
  children: React.ReactNode;
}

const ScoreContext = createContext({
  score: 0,
  setScore: (score: number) => {},
  detectedDevice: "",
  setDetectedDevice: (detectedDevice: string) => {},
});

export const ScoreProvider = ({ children }: ScoreProviderProps) => {
  const [score, setScore] = useState(0);
  const [detectedDevice, setDetectedDevice] = useState("");

  return (
    <ScoreContext.Provider
      value={{ score, setScore, detectedDevice, setDetectedDevice }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContext;
