import useVulnerabilities from "../utils/useVulnerabilities"
import VulnerabilityLink from "../components/VulnerabilityLink";
import LoaderContainer from "../components/LoaderContainer";

const Vulnerabilities = () => {
    const { vulnerabilities, loading } = useVulnerabilities();

    return (
        <LoaderContainer loading={loading} heading="Vulnerabilities">
            {vulnerabilities.map((vulnerability) => <VulnerabilityLink key={vulnerability.uuid} vulnerability={vulnerability} />)}
        </LoaderContainer>
    )
}

export default Vulnerabilities