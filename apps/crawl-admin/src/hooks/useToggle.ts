import { useCallback, useState } from "react";

export const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [bool, setBool] = useState(initialState);
  const toggle = useCallback(() => setBool((prevBool) => !prevBool), []);
  return [bool, toggle];
};
