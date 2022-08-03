import React, { useState } from "react";

import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const BannerHome = () => {
  const [slider, setSlider] = useState();
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "¿Crear o migrar tu comercio electrónico?",
      text: "¡Hola!¿Qué es lo que buscas?",
      image:
        "https://www.corebiz.ag/wp-content/uploads/2022/07/Banner-mobile_limpo.png",
    },
    {
      title: "",
      text: "",
      image:
        "https://www.corebiz.ag/wp-content/uploads/2022/06/Banner_home_mobile_2.png",
    },
  ];

  return (
    <Box
      position={"relative"}
      s
      height={"430px"}
      width={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        aria-label="left-arrow"
        position="absolute"
        color="#BDBDBD"
        bgColor="none"
        _hover={{ color: "#F8475F" }}
        border="0px"
        variant="ghost"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BsDot size="40px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        color="#BDBDBD"
        bgColor="none"
        _hover={{ color: "#F8475F" }}
        border="0px"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BsDot size="40px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="30%"
                transform="translate(0, -50%)"
              >
                <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                  {card.text}
                </Text>
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  {card.title}
                </Heading>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
export default BannerHome;
