export interface IVulnerabilitiesResponse {
  data: IVulnerability[]
}

export interface IVulnerability {
  uuid: string
  name: string
  severity: string
  category: string
  description: string
  remediation: string
  exploit_available: number
  cvss_score: number
  cvss3_score: number
  cves: string[]
  external_links: IExternalLink[]
  nessus_plugin_family: string
  nessus_plugin_id: null
  created_at: string
  updated_at: string
  deleted_at: null
  additional_affected_asset_fields: string[]
  record_to_remove: null
}

export interface IExternalLink {
  url: string
  title: string
}
