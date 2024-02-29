import {
    Box,
    Container,
    Heading,
    Stack,
    Text,
    ListItem,
    UnorderedList
} from '@chakra-ui/react'

import theme from '../../theme'
const AgricultureContent = () => (
    <Box as="section" bg="bg.surface" p='5em' >
        <Container maxW='5xl'>
            <Stack spacing="3" textAlign="center">
                <Heading fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight} color={theme.companyTheme.color.secondry}>
                    Climate change hurts agriculture the most, but we don't respond to these risks well.
                </Heading>
            </Stack>
            <Box p={5} fontSize={theme.fonts.description}>
                <Text align='left' p={1}>Changing temperature and rainfall patterns are increasing the frequency of extreme weather events around the world. These include increased droughts, heavy rain, and intense flooding.</Text>
                <Text align='left' p={1}>A United Nations report from 2016 estimates that these extreme weather events lead to economic losses of $100 billion globally. Agriculture-related businesses were 25% of these losses.¹</Text>
                <Text align='left' p={1}>Most agriculture risk assessment requires field labor, making the process costly and time-intensive. Field research can only provide a limited view of a small geographic area. </Text>
                <UnorderedList p={5}>
                    <ListItem p={2}> Farm managers are unable to quickly respond to variable weather conditions, resulting in a loss of crops and livestock.</ListItem>
                    <ListItem p={2}>Financial institutions lose more money on agricultural lending, leading to lower insurance coverage and access to credit.</ListItem>
                    <ListItem p={2}>Governments are unable to have a broad impact through social programs around their agriculture industries.</ListItem>
                    
                </UnorderedList>

            </Box>

            <Stack spacing="3" textAlign="center">
                <Heading fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight} color={theme.companyTheme.color.secondry}>
               Satellite images can give you accurate and detailed ground information.
                </Heading>
            </Stack>

        </Container>
    </Box>
)

export default AgricultureContent

