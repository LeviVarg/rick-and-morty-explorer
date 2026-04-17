"use client"

interface StatusBadgeProps {
  status: string
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "alive":
        return { bg: "bg-green-100 dark:bg-green-900", text: "text-green-800 dark:text-green-200", dot: "bg-green-500" }
      case "dead":
        return { bg: "bg-red-100 dark:bg-red-900", text: "text-red-800 dark:text-red-200", dot: "bg-red-500" }
      default:
        return { bg: "bg-gray-100 dark:bg-gray-800", text: "text-gray-800 dark:text-gray-200", dot: "bg-gray-500" }
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
