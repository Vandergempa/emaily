
const sortSurveys = (surveys, sortBy) => {
  return surveys.sort((a, b) => {
    if (sortBy === 'decreasing') {
      return a.sendDate < b.sendDate ? 1 : -1;
    } else if (sortBy === 'increasing') {
      return a.sendDate < b.sendDate ? -1 : 1;
    }
  })
}

export default sortSurveys;
