import { useEffect, useState } from "react";

import axios from "axios";

const useGet = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getProdcts = async () => {
      const response = await axios.get(
        `https://corebiz-test.herokuapp.com/api/v1/products`
      );
      setData(response.data);
      setIsLoading(false);
    };
    getProdcts();
  }, []);
  return { data, isLoading };
};
export default useGet;
