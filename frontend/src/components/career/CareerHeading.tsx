import{Box, Container,Stack,Heading,Text} from '@chakra-ui/react'
import theme from '../../theme'
const CareerHeading = () => {
  return (
    <>
     <Box as="section" bg="bg.surface" p='5em' >
        <Container maxW='5xl'>
            <Stack spacing="3" textAlign="center">
                <Heading fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight} color={theme.companyTheme.color.secondry}>
                    Join Us
                </Heading>
            </Stack>
            <Text textAlign='center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, repellendus!</Text>
         

            

        </Container>
    </Box>
    </>
  )
}

export default CareerHeading