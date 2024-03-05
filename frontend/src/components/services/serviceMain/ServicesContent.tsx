import {
    Box,
  
    Container,
    Flex,
   
    Stack,
    Text,
  
} from '@chakra-ui/react';
import theme from '../../../theme';
// import { RiTyphoonLine } from 'react-icons/ri';
 const ServicesContent = () => {
   
    return (
        <Box >
            <Container py={{ base: '16', md: '12' }} maxW="6xl">
                <Stack spacing={{ base: '12', md: '12' }} textAlign="center" align="center">
                    <Stack spacing={{ base: '4', md: '5' }}>
                        <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <Text>
                               
                                <Text as="span" color={theme.companyTheme.color.secondry}>Custom </Text>
                                <Text as="span">Solutions </Text>
                            </Text>
                        </Flex>
                        <Text color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
                       Precision monitoring actionable insights for your needs
                        </Text>
                        <Text textAlign="justify">
                        We are specialized in understanding the problems and customer pain areas from the root. Our Tailored Services are one of the key offerings. Suhora is committed to persistence monitoring along with custom made actionable insight for our valuable clients, 
                            <br />
                            <br />
                            our reliable partners in Earth Observation across the globe from high resolution to medium resolution we guarantee that you best satellite data suiting to your needs and at prices that are lowest in the region.
                            Our experience in satellite imagery sales helps in getting the right product along with solutions at a perfect price to you.

                            </Text>
                   
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default ServicesContent




