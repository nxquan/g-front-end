import { GlobalContext } from "../store/GlobalContext";
import { useContext } from "react";

export const useGlobalContext = function() {
  const [state, dispatch] = useContext(GlobalContext);
  
  return [state, dispatch];
}