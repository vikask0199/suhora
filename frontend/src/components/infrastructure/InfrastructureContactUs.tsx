import { Box, Button, Flex } from '@chakra-ui/react'
import bgImage from "../../assets/img/satellites-jpg.webp"
import theme from '../../theme'
import { Link } from 'react-router-dom'


const InfrastructureContactUs = () => {
    return (
        <Box
            as="section"
            py="12"
            position="relative"
            h={{ base: '260px', md: '340px' }}
            bgImage={bgImage}
            bgSize="cover"
            bgPosition="center"
            _after={{
                content: `""`,
                display: 'block',
                w: 'full',
                h: 'full',
                bg: 'blackAlpha.700',
                position: 'absolute',
                inset: 0,
                zIndex: 0,
            }}
        >
            <Box
                maxW={{ base: 'xl', md: '5xl' }}
                mx="auto"
                px={{ base: '6', md: '8' }}
                h="full"
                zIndex={1}
                position="relative">
                <Flex direction={{ base: 'column', md: 'row' }} height="100%" justifyContent="center" alignItems="center">
                    <Link  to="/contact-us">
                    <Button   width="fit-content" px="8" border="1px solid white" variant="outline" color="white" _hover={{ backgroundColor: theme.companyTheme.color.secondry, border: "1px solid #1266A0" }} >
                        Contact Sales
                    </Button>
                    </Link>
                </Flex>
            </Box>
        </Box>
    )
}

export default InfrastructureContactUs