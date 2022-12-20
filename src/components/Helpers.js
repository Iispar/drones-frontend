const distanceFromMiddle = (x, y) => {
  const distance = Math.sqrt(Math.pow((x - 250000), 2) + Math.pow((y - 250000), 2))
  return distance
}

export default distanceFromMiddle
