import {
    Box,
    Flex,
    SimpleGrid,
    Stack
} from '@chakra-ui/react';

type sidCurrentTheme = {
    currentTheme: string
}

const AnimatedText = motion(Text)
const AnimatedBox = motion(Box)

export const SidIndutryWeServe = ({ currentTheme }: sidCurrentTheme) => {
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
                        <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} gap={{ base: '4', md: '6', lg: '8' }} justifyContent="center">
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


import disaster from "../../../assets/img/industries/disaster.webp";

const categories = [
    // {
    //     name: 'Forestry',
    //     imageUrl:
    //         forest,
    //     url: '#',
    // },
    // {
    //     name: 'Agriculture',
    //     imageUrl:
    //         agri,
    //     url: '#',
    // },
    {
        name: 'Disaster & Insurance',
        imageUrl:
            disaster,
        url: '/disaster-and-insurance',
    },
    // {
    //     name: 'Renewable Energy',
    //     imageUrl:
    //         energy,
    //     url: '#',
    // },
    // {
    //     name: 'Mining',
    //     imageUrl:
    //         mining,
    //     url: '#',
    // },
    // {
    //     name: 'Infrastructure',
    //     imageUrl:
    //         infra,
    //     url: '#',
    // },
    // {
    //     name: 'Defence & Intelligence',
    //     imageUrl:
    //         defence,
    //     url: '#',
    // },

]

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
>
    ? ElementType
    : never

export type Category = ElementType<typeof categories>





import { AspectRatio, BoxProps, Image, Skeleton, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { textVarient } from '../../../animation';
import theme from '../../../theme';
import { Link } from 'react-router-dom';

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
        <AnimatedBox variants={textVarient} whileInView="show" initial="hidden" position="relative" h="60" w="60" key={category.name} borderRadius="lg" overflow="hidden" {...rootProps} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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