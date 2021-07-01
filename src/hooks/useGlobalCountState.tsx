import { createContext, useContext, useState } from "react";

interface GlobalCountContextData {
  globalCount: () => number;
}

const GlobalCountContext = createContext<GlobalCountContextData>({} as GlobalCountContextData);

export function GlobalConut() {
  const [count, setCount] = useState(0);

  setCount(count + 1);

  return count;
}

export function useGlobalCountState() {
  const context = useContext(GlobalCountContext);

  return context;
}