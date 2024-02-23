import { Flex, Text } from "@chakra-ui/react"
import { ServiceGallery } from "./ServiceGallery"
import theme from "../../../theme"

const ServiceCarousel = () => {
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
                    <Text as="span">Industry We </Text>
                    <Text as="span" color={theme.companyTheme.color.secondry}>Serve</Text>
                </Text>
            </Flex>
            <ServiceGallery />
        </Flex>
    )
}

export default ServiceCarousel