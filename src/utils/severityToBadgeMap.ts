const severityToBadgeMap = (severity: string) => {

    const mapToBadge: Record<string, string> = {
        'HIGH': 'orange',
        'MEDIUM': 'purple',
        'CRITICAL': 'red',
        'LOW': 'gray',
        'INFO': 'green'
    }

    return mapToBadge[severity] ?? 'gray'
}

export default severityToBadgeMap