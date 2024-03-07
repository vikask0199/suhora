import { Box, Container, Flex, Stack } from '@chakra-ui/react'

type howSpadeWorks = {
    currentTheme: string
}
const AnimatedText  =  motion(Text)
const AnimatedStack = motion(Stack)

export const HowItsWorksSpade = ({ currentTheme }: howSpadeWorks) => {
    const [currentStep] = useStep({ maxStep: steps.length, initialStep: 2 })
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box py={{ base: '4', md: '8', lg: '16' }} background={backgroundColor}>
            <Container maxW="6xl">
                <Flex mb={{ base: '2', md: '4' }} justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight} >
                    <AnimatedText variants={textVarient} whileInView="show" initial="hidden">
                        <Text as="span">How Spade </Text>
                        <Text as="span" color={theme.companyTheme.color.secondry}>Works</Text>
                    </AnimatedText>
                </Flex>
                <AnimatedText variants={textVarientSecond} whileInView="show" initial="hidden" mb={{ base: '2', md: '4' }} color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" pb={{ base: '4', md: '8' }} textAlign="center">
                    Mapping Earth's shifts, informing decisions with millimeter precision.
                </AnimatedText>
                <AnimatedStack variants={textVarientDelayMedium} whileInView="show" initial="hidden" spacing="0" direction={{ base: 'column', md: 'row' }} >
                    {steps.map((step, id) => (
                        <Step
                            key={id}
                            title={step.title}
                            description={step.description}
                            isActive={currentStep === id}
                            isCompleted={currentStep > id}
                            isFirstStep={id === 0}
                            isLastStep={steps.length === id + 1}
                        />
                    ))}
                </AnimatedStack>
            </Container>
        </Box>
    )
}



const steps = [
    {
        title: 'Search',
        description: 'Search your location by place name Lat,Long.',
    },
    {
        title: 'Draw',
        description: 'Draw AOI/POI by clicking on the map.',
    },
    {
        title: 'Select',
        description: 'Select parameters like data, sensor, collection parameters.',
    },
    {
        title: 'Order',
        description: 'Pick best scenes from archives or auto-select for new collection request.',
    },
    {
        title: 'Insights',
        description: 'Experience the next level of data insight and analytics.',
    },

]


import { BoxProps, Divider, Text, useBreakpointValue } from '@chakra-ui/react'

interface StepProps extends BoxProps {
    title: string
    description: string
    isCompleted: boolean
    isActive: boolean
    isLastStep: boolean
    isFirstStep: boolean
}
const Step = (props: StepProps) => {
    const { isActive, isCompleted, isLastStep, isFirstStep, title, description, ...stackProps } =
        props
    const isMobile = useBreakpointValue({ base: true, md: false })
    const orientation = useBreakpointValue<'horizontal' | 'vertical'>({
        base: 'vertical',
        md: 'horizontal',
    })
    return (
        <Stack spacing="4" direction={{ base: 'row', md: 'column' }} flex="1" {...stackProps}>
            <Stack spacing="0" align="center" direction={{ base: 'column', md: 'row' }}>
                <Divider
                    display={isMobile ? 'none' : 'initial'}
                    orientation={orientation}
                    borderWidth="1px"
                    borderColor={isFirstStep ? 'transparent' : isCompleted || isActive ? `${theme.companyTheme.color.secondry}` : `${theme.companyTheme.color.secondry}`}
                />
                <StepCircle isActive={isActive} isCompleted={isCompleted} />
                <Divider
                    orientation={orientation}
                    borderWidth="1px"
                    borderColor={isCompleted ? `${theme.companyTheme.color.secondry}` : isLastStep ? 'transparent' : `${theme.companyTheme.color.secondry}`}
                />
            </Stack>
            <Stack
                spacing="0.5"
                pb={isMobile && !isLastStep ? '8' : '0'}
                align={{ base: 'start', md: 'center' }}
            >
                <Text color="fg.emphasized" fontWeight={theme.fonts.subHeading.weight}>
                    {title}
                </Text>
                <Text textAlign="center">{description}</Text>
            </Stack>
        </Stack>
    )
}


import { Circle, Icon, SquareProps } from '@chakra-ui/react'
import { HiCheck } from 'react-icons/hi'
interface RadioCircleProps extends SquareProps {
    isCompleted: boolean
    isActive: boolean
}
const StepCircle = (props: RadioCircleProps) => {
    const { isCompleted, isActive } = props
    return (
        <Circle
            size="8"
            bg={isCompleted ? 'accent' : 'inherit'}
            background={theme.companyTheme.color.secondry}
            borderColor={isActive ? 'accent' : 'inherit'}
            {...props}>
            <Icon as={HiCheck} color="white" boxSize="5" />
        </Circle>
    )
}


import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react'
import theme from '../../../theme'
import { motion } from 'framer-motion'
import { textVarient, textVarientDelayMedium, textVarientSecond } from '../../../animation'
interface Helpers {
    goToNextStep: () => void
    goToPrevStep: () => void
    reset: () => void
    canGoToNextStep: boolean
    canGoToPrevStep: boolean
    setStep: Dispatch<SetStateAction<number>>
}
interface UseStepProps {
    maxStep: number
    initialStep?: number
}
const useStep = (props: UseStepProps): [number, Helpers] => {
    const { maxStep, initialStep = 0 } = props
    const [currentStep, setCurrentStep] = useState(initialStep)
    const canGoToNextStep = useMemo(() => currentStep + 1 <= maxStep, [currentStep, maxStep])
    const canGoToPrevStep = useMemo(() => currentStep - 1 >= 0, [currentStep])
    const setStep = useCallback(
        (step: unknown) => {
            const newStep = step instanceof Function ? step(currentStep) : step
            if (newStep >= 0 && newStep <= maxStep) {
                setCurrentStep(newStep)
                return
            }
            throw new Error('Step not valid')
        },
        [maxStep, currentStep],
    )
    const goToNextStep = useCallback(() => {
        if (canGoToNextStep) {
            setCurrentStep((step) => step + 1)
        }
    }, [canGoToNextStep])
    const goToPrevStep = useCallback(() => {
        if (canGoToPrevStep) {
            setCurrentStep((step) => step - 1)
        }
    }, [canGoToPrevStep])
    const reset = useCallback(() => {
        setCurrentStep(0)
    }, [])
    return [
        currentStep,
        {
            goToNextStep,
            goToPrevStep,
            canGoToNextStep,
            canGoToPrevStep,
            setStep,
            reset,
        },
    ]
}