import {NextPage} from "next";
import {
    Box,
    Card,
    CardBody,
    Center,
    Flex,
    Heading,
    IconButton,
    Image,
    Progress,
    SimpleGrid,
    Stack,
    StackDirection,
    Text,
    VStack
} from "@chakra-ui/react";

import {FaBackward, FaForward, FaPlay} from "react-icons/fa";

interface ProgressLabelProps {
    value: number;
    initialTime: number | string;
    remainingTime: number | string;
}

const ProgressLabel = ({value, initialTime, remainingTime}: ProgressLabelProps) => {
    return <Box w="full">
        <Progress value={value} colorScheme="gray" borderRadius={15}/>
        <Flex justifyContent="space-between">
            <Text color="#C4C4CC">{initialTime}</Text>
            <Text color="#C4C4CC">{remainingTime}</Text>
        </Flex>
    </Box>
}

const Player = () => {
    return (
        <Flex justifyContent="space-around">
            <IconButton aria-label="Backward" icon={<FaBackward style={{color: '#E1E1E6', fontSize: 16}}/>}
                        variant="link"/>
            <IconButton aria-label="Play" icon={<FaPlay style={{color: '#E1E1E6', fontSize: 16}}/>}
                        variant="link"/>
            <IconButton aria-label="Forward" icon={<FaForward style={{color: '#E1E1E6', fontSize: 16}}/>}
                        variant="link"/>
        </Flex>
    )
}

interface DetailsPros {
    source: string;
    alt: string;
    title: string;
    name: string;
    dir: StackDirection;
}

const Details = ({name, title, source, alt, dir}: DetailsPros) => {
    return (
        <Stack direction={dir} spacing={8}>
            <Image
                src={source}
                alt={alt}
                borderRadius='lg'
                width={dir === 'column' ? "full" : 100}
                height={dir === 'column' ? "full" : 100}
            />
            <Flex flexDir="column" justifyContent="center">
                <Heading as="h1" color="#E1E1E6" size="md">
                    {title}
                </Heading>
                <Text color="#E1E1E680">
                    {name}
                </Text>
            </Flex>
        </Stack>
    )
}

interface MusicCardProps {
    dir: StackDirection;
    withProgress?: boolean;
}

const MusicCard = ({dir, withProgress}: MusicCardProps) => {
    return (
        <Card maxW="sm" bgColor="#2A2141">
            <CardBody p={dir === 'column' ? 8 : 4}>
                <VStack spacing={8} align="stretch">
                    <Details source="/music_thumb.png" alt="Thumb Music"
                             title="Acorda Devinho"
                             name="Devinho Novaes" dir={dir}/>
                    <Player/>
                    {withProgress && <ProgressLabel value={80} initialTime="03:20" remainingTime="00:12"/>}
                </VStack>
            </CardBody>
        </Card>
    )
}

const First: NextPage = () => {
    return (
        <Center minH="100vh" bgColor="#0F0D13" color="purple.800">
            <SimpleGrid columns={2} spacing={4}>
                <MusicCard dir="column" withProgress/>
                <VStack spacing={4}>
                    <MusicCard dir="row" withProgress/>
                    <MusicCard dir="row"/>
                </VStack>
            </SimpleGrid>
        </Center>
    );
};

export default First;
