
import { Box, Button, Card, CardBody, CardFooter, Flex, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
import image1 from '../../../assets/img/satellites-jpg.webp'
import theme from "../../../theme"
const SpadeHeader = () => {
    return (
       
             <Box  w="100%" justifyContent="center" mb= '5em' >
                
                 <Flex justifyContent='center'>
            <Card w='5xl' 
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                boxShadow='none'
              
                >
             

                <Stack>
                    <CardBody>
                        <Heading fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight} color={theme.companyTheme.color.secondry} >The perfect latte
                       
                        </Heading>
                        <Heading mt="3px"> Lorem ipsum dolor sit.</Heading>
                        <Heading mt="3px">Lorem ipsum dolor sit.</Heading>
                        <Text mt="8px" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni voluptate perspiciatis minus odit? Perferendis similique assumenda suscipit error inventore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, distinctio rem nemo officia consequatur natus deserunt quae necessitatibus inventore neque?
                        </Text>

                       
                    </CardBody>
                    
                     <CardFooter >
                     <HStack spacing='3vh'>
                        <Button variant='solid' colorScheme='blue' w='26vh' rounded='full' >
                            Buy Latte
                        </Button>
                        <Button colorScheme='teal' variant='outline' w='26vh'   rounded='full'>
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

export default SpadeHeader