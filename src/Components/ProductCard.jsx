import { Button, Text, Image, Box, Flex } from "@chakra-ui/react";

import { BsStarFill, BsStar } from "react-icons/bs";
import useCart from "../Hooks/useCart";

const ProductCard = ({ product }) => {
  const { addProduct } = useCart();

  return (
    <Box
      w="216px"
      h="353px"
      pb="20px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      _hover={{ bgColor: "#E6E8EA" }}
    >
      <Image
        boxSize="216px"
        objectFit="cover"
        src={product.imageUrl}
        alt="SAPATO FLOATER PRETO"
      />
      <Box w="216px" display="flex" flexDirection="column" textAlign="center">
        <Text fontSize="16px" color="#7A7A7A">
          {product.productName}
        </Text>
        <Flex mx="auto" color="#F8475F">
          <BsStarFill />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
        </Flex>

        <Text
          fontSize="16px"
          color="#7A7A7A"
          h="18px"
          textDecoration="line-through"
        >
          {product.listPrice ? `de ${product.listPrice}` : ""}
        </Text>
        <Text fontSize="24px">por $ {product.price}</Text>
        <Text fontSize="15px" color="#7A7A7A" h="20px">
          {product.installments[0]
            ? `ou em ${product.installments[0].quantity}x de R$ ${product.installments[0].value}`
            : ""}
        </Text>
        <Button
          bgColor="black"
          color="white"
          w="125px"
          h="32px"
          mx="auto"
          my="5px"
          _hover={{ bgColor: "#F8475F" }}
          onClick={() => addProduct(product)}
        >
          {" "}
          COMPRAR
        </Button>
      </Box>
    </Box>
  );
};
export default ProductCard;
