import { useRecoilState } from "recoil";

import { userAuthState } from "../Recoil/cartAtom";

const useNewsletter = () => {
  const [news, setNews] = useRecoilState(userAuthState);

  const suscribe = (data) => setUser(data);

  return {
    suscribe,
  };
};
export default useNewsletter;
