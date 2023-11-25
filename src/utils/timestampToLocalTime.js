const timestampToLocalTime = (timestamp, isDateTime = false) => {
  if (!timestamp) return null

  const date = new Date(timestamp)

  if (isDateTime) {
    return date.toLocaleString()
  } else {
    return date.toLocaleTimeString()
  }
}

export default timestampToLocalTime
