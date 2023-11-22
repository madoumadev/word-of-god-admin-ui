export const getFormattedDate = (date) => {
  const newsDate = new Date(date)
  return newsDate.toLocaleDateString('ru', {
    year: 'numeric',
    day: '2-digit',
    month: 'long'
  })
}

export default getFormattedDate
