import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  InputGroup,
  Link,
  Stack,
  Text,
  Image,
  InputRightElement,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

import { FaBars } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { NavLink as ReachLink } from "react-router-dom";

import logo from "../assets/Corebiz.png";
import useCart from "../Hooks/useCart";
const Links = [{ label: "Mi cuenta", url: "/user" }, ,];

const NavLink = ({ text, link }) => {
  return (
    <Link
      px={2}
      py={1}
      as={ReachLink}
      to={link}
      rounded={"md"}
      _hover={{ color: "#F8475F" }}
      style={({ isActive }) =>
        isActive ? { color: "#F8475F", boder: "none" } : undefined
      }
    >
      {text}
    </Link>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart } = useCart();
  return (
    <Box bgColor="white" color="black" px="20px">
      <Flex
        minH="80px"
        maxH="160px"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <IconButton
          size="lg"
          icon={isOpen ? <CloseIcon /> : <FaBars fontSize="1.5rem" />}
          aria-label={"Open Menu"}
          variant="link"
          display={{ md: "none" }}
          ml={2}
          onClick={isOpen ? onClose : onOpen}
        />
        <Heading size="md" textTransform="capitalize" ml="4rem">
          <Link as={ReachLink} to={"/"}>
            <Image src={logo} alt="Corebiz logo" w="181px" />
          </Link>
        </Heading>
        <HStack display={{ base: "none", md: "flex" }} w="40%">
          <InputGroup w="100%">
            <InputRightElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="tel"
              variant="flushed"
              placeholder="¿Qué estás buscando?"
            />
          </InputGroup>
        </HStack>
        <Flex alignItems={"center"} gap={{ base: 1, lg: 3 }} mr="4rem">
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
            justify="flex-end"
          >
            {Links.map((link) => (
              <NavLink
                key={`link-${link.label}`}
                text={link.label}
                link={link.url}
              />
            ))}
          </HStack>

          <Flex ml="20px">
            <BsCart4 fontSize="1.3rem" />
            <Text
              fontSize="12px"
              bgColor="red"
              color="white"
              borderRadius="50%"
              h="20px"
              w="20px"
              ml="10px"
              textAlign="center"
            >
              {cart.length}
            </Text>
          </Flex>
        </Flex>{" "}
      </Flex>
      <HStack display={{ base: "flex", md: "none" }} alignItems="flex-end">
        <InputGroup pb="5px">
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type="tel"
            variant="flushed"
            placeholder="¿Qué estás buscando 2?"
          />
        </InputGroup>
      </HStack>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink
                key={`link${link.label}`}
                text={link.label}
                link={link.url}
              />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
