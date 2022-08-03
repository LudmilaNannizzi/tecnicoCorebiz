import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { BsEnvelope, BsHeadset } from "react-icons/bs";
import corebiz from "../assets/corebizfooter.png";
import vtex from "../assets/vtexfooter.png";

const Footer = () => {
  return (
    <Box minH="213px" maxH="520px" bgColor="black" color="white" p="30px">
      <SimpleGrid
        minChildWidth="240px"
        spacing="40px"
        w="70%"
        mb="50px"
        mx="auto"
      >
        <Box display="flex" flexDirection="column">
          <Text fontSize="18px" fontWeight="bold">
            Ubicación
          </Text>
          <Box w="45px" h="5px" bgColor="white" borderRadius="1px" my="10px" />
          <Box>
            <Text fontSize="12px" mb="5px">
              Avenida Andrômeda, 2000.
            </Text>
            <Text fontSize="12px" mb="5px">
              Bloco 6 e 8 Alphavile SP
            </Text>
            <Text fontSize="12px" mb="5px">
              brasil@corebiz.ag
            </Text>
            <Text fontSize="12px" mb="5px">
              +55 11 3090 1039
            </Text>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" mt="20px">
          <Button
            leftIcon={<BsEnvelope />}
            bgColor="white"
            color="black"
            w="230px"
            mb="20px"
            variant="solid"
          >
            Contáctanos
          </Button>
          <Button
            leftIcon={<BsHeadset />}
            bgColor="white"
            color="black"
            w="230px"
            variant="solid"
          >
            Habla con un consultor
          </Button>
        </Box>
        <Flex mt="50px">
          <Box mr="10px">
            <Text fontSize="9px">Desarrollado por</Text>
            <Image src={corebiz} w="83px" />
          </Box>
          <Box>
            <Text fontSize="9px">Powered by</Text>
            <Image src={vtex} w="65px" />
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};
export default Footer;
