import {
    Box,
    Flex,
    Heading,
    Img,
    Text
} from '@chakra-ui/react'
import AgricultureImg from '../../assets/img/team.jpeg'
import theme from '../../theme'
// type team = {
//     currentTheme: string
// }

const Team = () => {

    // const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';
    return (
        <>
            <Box as="section" minH="140px" position="relative" p={10} >
                <Box py="32" position="relative" zIndex={1} >
                    <Box maxW='5xl' mx="auto" px={{ base: '6', md: '8' }} color="white" >
                        <Flex justifyContent='center' fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <Heading  >
                                Meet Our Team
                            </Heading>


                        </Flex>
                        <Flex justifyContent='center'>
                            <Text mt='1em' fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight} textAlign='center'>
                                We’re a dynamic group of individuals who are passionate about what we do.

                            </Text>
                        </Flex>
                    </Box>
                </Box>
                <Flex
                    id="image-wrapper"
                    position="absolute"
                    insetX="0"
                    insetY="0"
                    w="full"
                    h="full"
                    overflow="hidden"
                    align="center">
                    <Box position="relative" w="full" h="full">
                        <Img
                            src={AgricultureImg}
                            alt="Main Image"
                            w="full"
                            h="full"
                            objectFit="cover"
                            objectPosition="top bottom"
                            position="absolute"
                        />
                        <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
                    </Box>
                </Flex>
            </Box>


        </>
    )
}

export default Team

// const members = [
//     {
//         role: 'Co-Founder / CEO',
//         image:
//             'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
//         name: 'Camila West',
//         description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
//     },
//     {
//         role: 'Co-Founder / CTO',
//         image:
//             'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3V5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
//         name: 'Mark Linhsorg',
//         description: 'Habitant morbi tristique senectus et netus et malesuada fames. Vestibulum morbi',
//     },
//     {
//         role: 'Marketing Manager',
//         image:
//             'https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
//         name: 'Kim Yung',
//         description: 'Quis risus sed vulputate odio ut enim blandit volutpat. Amet cursus sit amet.',
//     },
//     {
//         role: 'Manager, Business Relations',
//         image:
//             'https://images.unsplash.com/photo-1524660988542-c440de9c0fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYwfHxibGFjayUyMGd1eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
//         name: 'Morgan Adebayo',
//         description:
//             'Consectetur libero id faucibus nisl tincidunt eget nullam fringilla urna porttitor.',
//     },
//     {
//         role: 'Chief Operating Officer',
//         image:
//             'https://images.unsplash.com/photo-1522938974444-f12497b69347?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fGJsYWNrJTIwbGFkeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
//         name: 'Bimbo Akintola',
//         description:
//             'Mi eget mauris pharetra et ultrices neque ornare aenean massa eget egestas purus.',
//     },
//     {
//         role: 'Head of Human Resources',
//         image:
//             'https://images.unsplash.com/photo-1574034589502-9f8a1ed46fa7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMxfHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
//         name: 'Yasmine Jones',
//         description: 'Diam maecenas sed enim ut sem viverra aliquet eget magna ac placerat vestibulum.',
//     },
// ]

// import { ImageProps } from '@chakra-ui/react'
// const SquareImage = (props: ImageProps) => (
//     <Box pos="relative">
//         <Img
//             position="relative"
//             zIndex="1"
//             boxSize={{ base: '20', md: '28' }}
//             rounded="lg"
//             objectFit="cover"
//             {...props}
//         />
//         <Box
//             pos="absolute"
//             zIndex="0"
//             w={{ base: '20', md: '28' }}
//             top="-1.5"
//             left="1.5"
//             h="100%"
//             bg="bg.accent.default"
//             rounded="lg"
//         />
//     </Box>


// )