import type { PropsWithChildren } from "react";
import { Container, Heading, Spinner } from "@chakra-ui/react"

interface ILoaderContainerProps {
    loading: boolean;
    centerContent?: boolean;
    heading?: string;
}

const LoaderContainer = ({ loading, heading, children, centerContent = true }: PropsWithChildren<ILoaderContainerProps>) => {
    return (
        <Container maxW="2xl" centerContent={centerContent} padding={12}>
            {loading ? (
                <Spinner size="xl" />
            ) : (
                <>
                    <Heading>{heading}</Heading>

                    <Container marginTop={10}>
                        {children}
                    </Container>
                </>
            )}
        </Container>
    )
}

export default LoaderContainer