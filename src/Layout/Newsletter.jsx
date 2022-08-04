import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import axios from "axios";
const userSchema = object({
  email: string().email().required("Debe ingresar su email "),
  name: string().required("Debe ingresar su nombre "),
});

const Newsletter = () => {
  const onSubmit = ({ email, name }) => {
    axios.post("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
      email,
      name,
    });
  };

  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(userSchema),
  });
  console.log(formState);
  const { errors, isSubmitting } = formState;
  return (
    <Box minH="146px" maxH="325px" bgColor="#F2F2F2" p="16px">
      <Heading textAlign="center" fontSize="22px">
        ¡Únete a nuestras novedades y promociones!
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid
          minChildWidth="230px"
          spacing="8px"
          mx="auto"
          w="50%"
          my="15px"
        >
          <FormControl isInvalid={errors.name}>
            <Input
              type="text"
              w="280px"
              bgColor="white"
              borderRadius="0"
              placeholder="Ingresa tu nombre"
              {...register("name")}
            ></Input>
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl w="350px" isInvalid={errors.email}>
            <Input
              w="280px"
              bgColor="white"
              borderRadius="0"
              placeholder="Ingresa tu mail"
              type="email"
              _placeholder={{ opacity: 1, color: " #585858", fontSize: "12px" }}
              {...register("email")}
            ></Input>
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            bgColor="black"
            _hover={{ bgColor: "#F8475F" }}
            color="white"
            w="140px"
            borderRadius="0"
            isLoading={isSubmitting}
            type="submit"
          >
            Suscribirme
          </Button>
        </SimpleGrid>
      </form>
    </Box>
  );
};
export default Newsletter;
