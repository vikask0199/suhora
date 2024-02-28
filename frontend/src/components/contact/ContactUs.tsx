import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    Stack,
    StackDivider,
    Textarea
} from '@chakra-ui/react'

export const ContactUs = () => (
    <Container py={{ base: '4', md: '8' }} maxW="6xl" mt={20}>
        <Stack spacing="5">
            {/* <Stack spacing="4" direction={{ base: 'column', sm: 'row' }} justify="space-between">
                <Box>
                    <Text textStyle="lg" fontWeight="medium">
                        Your Profile
                    </Text>
                    <Text color="fg.muted" textStyle="sm">
                        Tell others who you are
                    </Text>
                </Box>
                <Button alignSelf="start">Save</Button>
            </Stack> */}
            {/* <Divider /> */}
            <Stack spacing="5" divider={<StackDivider />}>
                <FormControl id="name">
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={{ base: '1.5', md: '8' }}
                        justify="space-between"
                    >
                        <FormLabel variant="inline">Name</FormLabel>
                        <Input maxW={{ md: '3xl' }}  />
                    </Stack>
                </FormControl>
                <FormControl id="phone">
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={{ base: '1.5', md: '8' }}
                        justify="space-between"
                    >
                        <FormLabel variant="inline">Phone</FormLabel>
                        <Input maxW={{ md: '3xl' }}  />
                    </Stack>
                </FormControl>
                <FormControl id="email">
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={{ base: '1.5', md: '8' }}
                        justify="space-between"
                    >
                        <FormLabel variant="inline">Email</FormLabel>
                        <Input type="email" maxW={{ md: '3xl' }} />
                    </Stack>
                </FormControl>
                {/* <FormControl id="picture">
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={{ base: '1.5', md: '8' }}
                        justify="space-between">
                        <FormLabel variant="inline">Photo</FormLabel>
                        <Stack
                            spacing={{ base: '3', md: '5' }}
                            direction={{ base: 'column', sm: 'row' }}
                            width="full"
                            maxW={{ md: '3xl' }}
                        >
                            <Avatar size="lg" name="Christoph Winston" src="https://tinyurl.com/yhkm2ek8" />
                            <Dropzone width="full" />
                        </Stack>
                    </Stack>
                </FormControl> */}
                <FormControl id="website">
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={{ base: '1.5', md: '8' }}
                        justify="space-between"
                    >
                        <FormLabel variant="inline">Subject</FormLabel>
                        <InputGroup maxW={{ md: '3xl' }}>
                            {/* <InputLeftAddon>https://</InputLeftAddon> */}
                            <Input />
                        </InputGroup>
                    </Stack>
                </FormControl>
                <FormControl id="bio">
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={{ base: '1.5', md: '8' }}
                        justify="space-between"
                    >
                        <Box>
                            <FormLabel variant="inline">Message</FormLabel>
                            <FormHelperText mt="0" color="fg.muted">
                                Write a short message
                            </FormHelperText>
                        </Box>
                        <Textarea maxW={{ md: '3xl' }} rows={5} resize="none" />
                    </Stack>
                </FormControl>

                <Flex direction="row-reverse">
                    <Button>Save</Button>
                </Flex>
            </Stack>
        </Stack>
    </Container>
)