import {
    Box,
    Flex,

    SimpleGrid,
    Stack
} from '@chakra-ui/react'


type lanceCurentTheme = {
    currentTheme: string
}

const AnimatedText = motion(Text)
const AnimatedBox = motion(Box)

export const LanceIndutryWeServe = ({ currentTheme }: lanceCurentTheme) => {
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box background={backgroundColor}>
            <Box
                maxW="6xl"
                mx="auto"
                px={{ base: '4', md: '8', lg: '12' }}
                py={{ base: '16', md: '12' }}>
                <Stack spacing={{ base: '6', md: '8', lg: '12' }}>
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                        <AnimatedText variants={textVarient} whileInView="show" initial="hidden">
                            <Text as="span">Industry We </Text>
                            <Text as="span" color={theme.companyTheme.color.secondry}>Supports </Text>
                        </AnimatedText>
                    </Flex>
                    <Flex justifyContent="center">
                        <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} gap={{ base: '4', md: '6', lg: '8' }}>
                            {categories.map((category) => (
                                <CategoryCard key={category.name} category={category} />
                            ))}
                        </SimpleGrid>
                    </Flex>
                </Stack>
            </Box>
        </Box>
    )

}



import defence from "../../../assets/img/industries/defense.webp";
// import disaster from "../../../assets/img/industries/disaster.png";
// import energy from "../../../assets/img/industries/energy.png";
// import forest from "../../../assets/img/industries/forest.png";
// import infra from "../../../assets/img/industries/infra.png";
// import mining from "../../../assets/img/industries/mining.png";

const categories = [
    {
        name: 'Defence & Intelligence',
        imageUrl:
            defence,
        url: '/defence-and-intelligence',
    },
]

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
>
    ? ElementType
    : never

export type Category = ElementType<typeof categories>





import { AspectRatio, BoxProps, Image, Skeleton, Text } from '@chakra-ui/react'
import theme from '../../../theme'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { textVarient, textVarientSecond } from '../../../animation'
import { Link } from 'react-router-dom'

interface Props {
    category: Category
    rootProps?: BoxProps
}

const CategoryCard = (props: Props) => {
    const { category, rootProps } = props
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <AnimatedBox position="relative" h="60" w="60" key={category.name} borderRadius="lg" variants={textVarientSecond} whileInView="show" initial="hidden" overflow="hidden" {...rootProps} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to={category.url}>
                <AspectRatio ratio={1 / 1}>
                    <Image src={category.imageUrl} alt={category.name} fallback={<Skeleton />} />
                </AspectRatio>
                <Box
                    position="absolute"
                    inset="0"
                    bgGradient="linear(to-b, transparent 60%, gray.900)"
                    boxSize="full"
                />
            
                <Box position="absolute" bottom="6" width="full" textAlign="center">
                    <Text color={`${isHovered ? `${theme.companyTheme.color.secondry}` : 'White'}`} fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>
                        {category.name}
                    </Text>
                </Box>
            </Link>
        </AnimatedBox>
    )
}