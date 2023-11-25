export function getVideoTitle(videoTitle) {
  if (!videoTitle) return

  const pattern = /"([^"\\]*(?:\\.[^"\\]*)*)"/g

  let matchString = pattern.exec(videoTitle)

  if (matchString) {
    return matchString[1]
  } else {
    return null
  }
}
