const timestampToLocalTime = (timestamp) => {
  if (!timestamp) return null

  const date = new Date(timestamp)
  return date.toLocaleTimeString()
}

export default timestampToLocalTime
