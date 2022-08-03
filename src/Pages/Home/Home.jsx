import { SimpleGrid, Spinner, Flex, Heading, Box } from "@chakra-ui/react";
import ProductCard from "../../Components/ProductCard";
import BannerHome from "./BannerHome";

import useGet from "../../Hooks/useGet";

const Home = () => {
  const { data: products, isLoading } = useGet("products");
  return (
    <main>
      <BannerHome />
      <Box ml="15%" mt="50px">
        <Heading w="140px" size="md">
          Más vendidos
        </Heading>
        <Box
          w="45px"
          h="5px"
          bgColor="#C0C0C0"
          borderRadius="1px"
          mt="10px"
          mb="50px"
        />
      </Box>

      <Flex w="100%">
        {isLoading && <Spinner mx="50%" my="50px" size="xl" />}
        {isLoading || (
          <SimpleGrid
            minChildWidth="216px"
            spacing="30px"
            mx="auto"
            w="70%"
            mb="50px"
          >
            {products &&
              products.map((product) => {
                return (
                  <ProductCard product={product} key={product.productId} />
                );
              })}
          </SimpleGrid>
        )}
      </Flex>
    </main>
  );
};
export default Home;
