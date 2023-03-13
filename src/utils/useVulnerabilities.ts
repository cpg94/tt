import { useEffect, useState } from "react";
import { IVulnerability } from "../types";
import fetchVulnerabilities from "./fetchVulnerabilities";

const useVulnerabilities = () => {
    const [loading, setLoading] = useState(false);
    const [vulnerabilities, setVulnerabilities] = useState<IVulnerability[]>([])

    const getVulnerabilities = async () => {
        setLoading(true)
        try {
            const vulnerabilityData = await fetchVulnerabilities();
            setVulnerabilities(vulnerabilityData)
        } catch (_) {
            setVulnerabilities([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getVulnerabilities();
    }, [])

    return {
        vulnerabilities,
        loading
    }
}

export default useVulnerabilities