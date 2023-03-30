import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

import image360 from "../../../public/360.png";
import sofaGif from "../../../public/360.gif";
import sofa from "../../../public/sofa.png";
import close from "../../../public/close.png";

const Second: NextPage = () => {
  const [gif, setGif] = useState(false);

  return (
    <Center minH="100vh" bgColor="#D9CDF7" color="purple.800">
      <SimpleGrid columns={2} spacing={16}>
        <Box position="relative">
          <Box
            onClick={() => setGif(!gif)}
            cursor="pointer"
            position="absolute"
            left="81.51%"
            right="11.14%"
            top="3.8%"
            bottom="86.12%"
          >
            <Image src={gif ? close : image360} alt="360 vector" />
          </Box>
          <Image src={gif ? sofaGif : sofa} alt="Sofá" width={449} />
        </Box>
        <Flex flexDir="column">
          <VStack align="flex-start" spacing="12px">
            <Text fontFamily="lato" fontWeight="light" fontSize={10}>
              CÓDIGO: 42404
            </Text>
            <Heading fontFamily="crimson" color="purple.900" fontSize={32}>
              Sofá Margot II - Rosé
            </Heading>
            <Text
              fontFamily="lato"
              fontWeight="normal"
              color="purple.900"
              fontSize={16}
            >
              R$ 4.000
            </Text>
          </VStack>
          <Button
            w="max-content"
            mt="20px"
            variant="outline"
            borderRadius="999px"
            borderColor="purple.800"
            _hover={{ bg: "purple.200" }}
          >
            ADICIONAR À CESTA
          </Button>
        </Flex>
      </SimpleGrid>
    </Center>
  );
};

export default Second;
