
import { Box, Button, Card, CardBody, CardFooter, Flex, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
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
                        <Heading >The perfect latte
                       
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
                <Flex >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', md: '400px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />
                </Flex>
                
            </Card>
            </Flex>
         
        </Box>
        
       
    )
}

export default SpadeHeader