import { IVulnerabilitiesResponse, IVulnerability } from "../types";

const wait = () => new Promise((resolve) => setTimeout(() => {
    resolve(true)
}, 1000))

const fetchVulnerabilities = async (): Promise<IVulnerability[]> => {
    // Add some fake latency
    await wait()

    const response = await fetch('/assets/vulnerabilities.json')
    const json = await response.json() as IVulnerabilitiesResponse;

    return json?.data ?? []
}

export default fetchVulnerabilities