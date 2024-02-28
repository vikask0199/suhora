
import { CheckIcon } from '@chakra-ui/icons';
import { Box, Button, Card, CardBody, CardFooter, Flex, HStack, Image, Stack, ListIcon, ListItem, List, Heading, Text } from '@chakra-ui/react'
import theme from "../../../theme"
import image1 from '../../../assets/img/satellites-jpg.webp'
const Spade = () => {
    return (

        <Box w="100%" justifyContent="center" mb='5em' >

            <Flex justifyContent='center'>
                <Card w='5xl'
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    boxShadow='none'

                >


                    <Stack>
                        <CardBody>
                            <List spacing={5}>
                                <ListItem >
                                    <ListIcon as={CheckIcon} /><Heading fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight} as='span'>A Data Product Platform</Heading>
                                    <Text mt= '1em' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis at numquam ducimus illum,
                                        eveniet architecto expedita odit reiciendis atque corrupti laborum omnis et hic molestiae aliquam </Text>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckIcon} /><Heading fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight} as='span'>A Data Product Platform</Heading>
                                    <Text mt= '1em' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis at numquam ducimus illum,
                                        eveniet architecto expedita odit reiciendis atque corrupti laborum omnis et hic molestiae aliquam </Text>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckIcon} /><Heading fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight} as='span'>A Data Product Platform</Heading>
                                    <Text mt= '1em' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis at numquam ducimus illum,
                                        eveniet architecto expedita odit reiciendis atque corrupti laborum omnis et hic molestiae aliquam </Text>
                                </ListItem>
                                {/* You can also use custom icons from react-icons */}

                            </List>

                        </CardBody>

                        <CardFooter >
                            <HStack spacing='3vh'>
                                <Button variant='solid' colorScheme='blue' w='26vh' rounded='full' >
                                    Buy Latte
                                </Button>
                                <Button colorScheme='teal' variant='outline' w='26vh' rounded='full'>
                                    Button
                                </Button>

                            </HStack>
                        </CardFooter>


                    </Stack>
                    <Flex alignItems='center' p='2em' pl='5em' >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', md: '400px' }}
                            height='20em'
                            src={image1}
                            alt='Caffe Latte'
                        />
                    </Flex>

                </Card>
            </Flex>

        </Box>


    )
}

export default Spade