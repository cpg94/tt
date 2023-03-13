import { Badge } from "@chakra-ui/react"
import severityToBadgeMap from "../utils/severityToBadgeMap"

interface ISeverityBadgeProps {
    severity: string;
}

const SeverityBadge = ({ severity }: ISeverityBadgeProps) => {
    return <Badge colorScheme={severityToBadgeMap(severity)}>{severity}</Badge>
}

export default SeverityBadge