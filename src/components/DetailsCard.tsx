import { Box, Card, CardBody, CardHeader } from "@chakra-ui/react"
import type { PropsWithChildren } from "react"

interface IDetailsCardProps {
    heading: string;
}

const DetailsCard = ({ heading, children }: PropsWithChildren<IDetailsCardProps>) => {
    return (
        <Box marginBottom={5}>
            <Card>
                <CardHeader>
                    {heading}
                </CardHeader>
                <CardBody>
                    {children}
                </CardBody>
            </Card>
        </Box>
    )
}

export default DetailsCard
