import { Box, Container, Flex, Stack } from '@chakra-ui/react'

type howWorks = {
    currentTheme: string
}


export const HowItsWorks = ({ currentTheme }: howWorks) => {
    const [currentStep] = useStep({ maxStep: steps.length, initialStep: 2 })
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';
    return (
        <Box py={{ base: '4', md: '8', lg: '16' }} backgroundColor={backgroundColor}>
            <Container maxW="6xl">
                <Flex mb={{ base: '2', md: '4' }} justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight} >
                    <Text>
                        <Text as="span">How It </Text>
                        <Text as="span" color={theme.companyTheme.color.secondry}>Works</Text>
                    </Text>
                </Flex>
                <Text mb={{ base: '2', md: '4' }} color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" pb={{ base: '4', md: '8' }} textAlign="center">
                    Elevating decisions with precision in 3D terrain solutions.
                </Text>
                <Stack spacing="0" direction={{ base: 'column', md: 'row' }} >
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
                </Stack>
            </Container>
        </Box>
    )
}



const steps = [
    {
        title: 'Select project',
        description: 'area',
    },
    {
        title: 'Define Your',
        description: 'requirments',
    },
    {
        title: 'Production',
        description: '',
    },
    {
        title: 'Seamless and',
        description: 'precise terrain data',
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
                <Text color="fg.emphasized" fontWeight="medium">
                    {title}
                </Text>
                <Text color="fg.muted">{description}</Text>
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