import {Box , Flex, Text, Stack} from '@chakra-ui/react'
import theme from "../../../theme"
const Content = () => {
  return (
    <>
    <Box  w="100%" mb = '5em' >
    <Stack spacing={{ base: '4', md: '5' }}>
                        <Flex  justifyContent='center' fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight} >
                            <Text>
                                <Text as="span" >What is SatSure  </Text>
                                <Text as="span" color={theme.companyTheme.color.secondry}>Sparta?</Text>
                            </Text>
                        </Flex>
                       <Flex justifyContent='center'>
                        <Text> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Esse recusandae at libero 
                             </Text>
                       </Flex>
                        
                    </Stack>

    </Box>


    </>
  )
}

export default Content