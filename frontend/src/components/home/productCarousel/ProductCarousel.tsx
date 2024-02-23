import { Flex, Text } from "@chakra-ui/react"
import { Gallery } from "./Gallery"
import theme from "../../../theme"

const SecondCarousel = () => {
    return (
        <Flex
            maxW="5xl"
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