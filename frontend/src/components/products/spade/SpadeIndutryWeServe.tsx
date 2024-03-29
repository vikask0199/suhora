import {
    Box,
    Flex,
    SimpleGrid,
    Stack
} from '@chakra-ui/react';


const AnimatedText = motion(Text)
const AnimatedBox = motion(Box)


export const SpadeIndutryWeServe = () => {


    return (
        <Box >
            <Box
                maxW="6xl"
                mx="auto"
                px={{ base: '4', md: '8', lg: '12' }}
                py={{ base: '16', md: '12' }}>
                <Stack spacing={{ base: '6', md: '8', lg: '12' }}>
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                        <AnimatedText variants={textVarient} initial="hidden" whileInView="show">
                            <Text as="span">Industry We </Text>
                            <Text as="span" color={theme.companyTheme.color.secondry}>Supports </Text>
                        </AnimatedText>
                    </Flex>
                    <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={{ base: '4', md: '6', lg: '8' }}>
                        {categories.map((category) => (
                            <CategoryCard key={category.name} category={category} />
                        ))}
                    </SimpleGrid>
                </Stack>
            </Box>
        </Box>
    )

}


import agri from "../../../assets/img/industries/agri.webp";
import defence from "../../../assets/img/industries/defense.webp";
import disaster from "../../../assets/img/industries/disaster.webp";
import energy from "../../../assets/img/industries/energy.webp";
import forest from "../../../assets/img/industries/forest.webp";
import infra from "../../../assets/img/industries/infra.webp";
import mining from "../../../assets/img/industries/mining.webp";

const categories = [
    {
        name: 'Defence & Intelligence',
        imageUrl:
            defence,
        url: '/defence-and-intelligence',
    },
    {
        name: 'Disaster & Insurance',
        imageUrl:
            disaster,
        url: '/disaster-and-insurance',
    },
    {
        name: 'Infrastructure',
        imageUrl:
            infra,
        url: '/infrastructure',
    },
    {
        name: 'Renewable Energy',
        imageUrl:
            energy,
        url: '/renewable-energy',
    },
    {
        name: 'Forestry',
        imageUrl:
            forest,
        url: '/forestry',
    },
    {
        name: 'Agriculture',
        imageUrl:
            agri,
        url: '/agriculture',
    },
    {
        name: 'Mining',
        imageUrl:
            mining,
        url: '/mining',
    },

]

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
>
    ? ElementType
    : never

export type Category = ElementType<typeof categories>





import { AspectRatio, BoxProps, Image, Skeleton, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import theme from '../../../theme';
import { motion } from 'framer-motion';
import { textVarient, textVarientSecond } from '../../../animation';

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
        <AnimatedBox variants={textVarientSecond} whileInView="show" initial="hidden" position="relative" key={category.name} borderRadius="lg" overflow="hidden" {...rootProps} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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