import {
    Box,
    Flex,
    SimpleGrid,
    Stack
} from '@chakra-ui/react';
import spade from "../../assets/img/products/spade.png";
import lance from '../../assets/img/products/lance_page.webp';
import { Link } from "react-router-dom"

const AnimatedText = motion(Text)
const AnimatedBox = motion(Box)

export const DefenceProduct = () => {
    // const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box >
            <Box
                maxW="6xl"
                mx="auto"
                px={{ base: '4', md: '8', lg: '12' }}
                py={{ base: '16', md: '12' }}>
                <Stack spacing={{ base: '6', md: '8', lg: '12' }}>
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                        <AnimatedText variants={textVarient} whileInView="show" initial="hidden" >
                            <Text as="span">Suhora </Text>
                            <Text as="span" color={theme.companyTheme.color.secondry}>Products </Text>
                        </AnimatedText>
                    </Flex>

                    <Flex justifyContent="center">
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={{ base: '4', md: '6', lg: '8' }}>
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


// import agri from "../../assets/img/industries/agri.webp";

const categories = [
    {
        name: 'Spade',
        imageUrl:
            spade,
        url: "/spade",
    },
    {
        name: 'Lance',
        imageUrl:
            lance,
        url: '/lance',
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
import theme from '../../theme';
import { motion } from 'framer-motion';
import { textVarient, textVarientSecond } from '../../animation';

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
        <AnimatedBox variants={textVarientSecond} whileInView="show" initial="hidden" position="relative" key={category.name} h="60" w="60" borderRadius="lg" overflow="hidden" {...rootProps} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to={category.url}>
                <AspectRatio ratio={1}>
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