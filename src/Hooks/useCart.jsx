import { useRecoilState } from "recoil";

import { cartState } from "../Recoil/cartAtom";

const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const addProduct = (product) => {
    const productExist = cart.some((pr) => pr.productId === product.productId);
    if (productExist === false) {
      const productoCantidad = { ...product, cantidad: 1 };
      setCart([...cart, productoCantidad]);
    } else {
      setCart(
        cart.map((pr) => {
          if (pr.productId === product.productId) {
            return { ...pr, cantidad: pr.cantidad + 1 };
          }
          return pr;
        })
      );
    }
  };

  return {
    cart,
    addProduct,
  };
};
export default useCart;
