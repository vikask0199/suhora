import { Flex, Text } from "@chakra-ui/react"
import theme from "../../../theme"
import { Gallery } from "./Gallery"


const SecondCarousel = () => {
    return (
        <Flex
            maxW="6xl"
            mx="auto"
            px={{ base: '4', md: '8', lg: '5' }}
            py={{ base: '4', md: '8', lg: '12' }}
            direction="column"
            gap="4">
            <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                <Text>
                    <Text as="span" color={theme.companyTheme.color.secondry}>Our </Text>
                    <Text as="span">Products</Text>
                </Text>
            </Flex>
            <Gallery />
        </Flex>
    )
}

export default SecondCarousel