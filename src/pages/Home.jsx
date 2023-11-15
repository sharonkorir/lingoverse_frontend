import React from "react";
import Languages from "./Languages";
import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import home from "../assets/home.jpg";
import banner from "../assets/banner.jpg";
import logo from "../assets/logo.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export default function Home() {
  return (
    <Box
      h="100vh"
      backgroundImage={banner}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      position="relative"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor="rgba(0, 0, 0, 0.2)"
        zIndex={1}
      />

      <Box position="relative" zIndex={2}>
        <Flex alignItems="center" justifyContent="space-between">
          <Box width="33%" pl={6} py={4}>
            <Image src={logo} height="18px" />
          </Box>

          <Center gap={2} width="33%" color="white" alignItems="center">
            <ReactRouterLink>Connect</ReactRouterLink>
            <ReactRouterLink to="translator">Translate</ReactRouterLink>
            <ReactRouterLink to="/download">Download</ReactRouterLink>
          </Center>
          <Box width="33%"></Box>
        </Flex>

        <Box>
          <Stack
            textAlign={"center"}
            align={"center"}
            spacing={{ base: 6, md: 8 }}
            py={{ base: 20, md: 28 }}
            px={{ base: 2, md: "150px" }}
          >
            <Text color="white"> WELCOME TO LINGOVERSE</Text>

            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              lineHeight="110%"
              color="white"
            >
              The metaverse of immersive language learning
            </Heading>
            <Text color="white" maxW="3xl">
              "Lingoverse - where connecting with new friends, chatting in
              context, and interactive learning blend seamlessly. Join the
              friendly language community, where fluency is a conversation
              away."
            </Text>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
