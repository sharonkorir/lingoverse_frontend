import React from "react";
import notFound from "../assets/404.jpg";
import {
  Box,
  Center,
  Image,
  Text,
  VStack,
  HStack,
  Heading,
  Button,
} from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Box height="100vh">
      <Box
        backgroundImage={notFound}
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        backgroundPosition="center"
        height="70%"
      ></Box>
      <VStack textAlign={"center"} align={"center"}>
        <Heading>Wow! (style this page pls)</Heading>
        <Text>
          You've reached the edge of lingoverse. You are far from home, let's
          take you back.
        </Text>
        <Button colorScheme="green" to="/">
          Go Home
        </Button>
        {/* <Image src={notFound} boxSize="600px" /> */}
      </VStack>
    </Box>
  );
}
