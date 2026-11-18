export function formatRelativeTime(date, now = new Date()) {
  const timestamp = date instanceof Date ? date.getTime() : new Date(date).getTime()
  if (Number.isNaN(timestamp)) return 'unknown time'

  const elapsedMinutes = Math.max(0, Math.floor((now.getTime() - timestamp) / 60_000))
  if (elapsedMinutes < 1) return 'just now'
  if (elapsedMinutes < 60) return `${elapsedMinutes}m ago`

  const elapsedHours = Math.floor(elapsedMinutes / 60)
  if (elapsedHours < 24) return `${elapsedHours}h ago`

  const elapsedDays = Math.floor(elapsedHours / 24)
  if (elapsedDays < 7) return `${elapsedDays}d ago`
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(timestamp))
}
