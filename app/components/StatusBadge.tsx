interface StatusBadgeProps {
  status: string
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "alive":
        return { bg: "bg-rm-rick-green/20", text: "text-rm-jerry-green dark:text-rm-rick-green", dot: "bg-rm-rick-green" }
      case "dead":
        return { bg: "bg-rm-beth-red/20", text: "text-rm-beth-red", dot: "bg-rm-beth-red" }
      default:
        return { bg: "bg-rm-rick-brown/20", text: "text-rm-rick-brown", dot: "bg-rm-rick-brown" }
    }
  }

  const colors = getStatusColor(status)

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg}`}>
      <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
      <span className={`text-sm font-medium ${colors.text}`}>{status}</span>
    </div>
  )
}
