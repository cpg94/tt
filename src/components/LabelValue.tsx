import { Flex, Text } from "@chakra-ui/react"

interface ILabelValueProps {
    label: string
    value?: string | number
    component?: JSX.Element
}

const LabelValue = ({ label, value, component }: ILabelValueProps) => {
    return (
        <Flex justifyContent="space-between" alignItems="center">
            <Text as="b">{label}</Text>
            {!!component ? component : <Text>{value ?? 'N/A'}</Text>}
        </Flex>
    )
}

export default LabelValue