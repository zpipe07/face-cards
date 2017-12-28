export function getRandomArrayElements(array, amount) {
  const randomArray = shuffleArray([].concat(array))
  return randomArray.slice(0, amount)
}

export function shuffleArray(array) {
  const shuffledArray = [].concat(array)

  for (var i = shuffledArray.length-1; i >=0; i--) {
    const randomIndex = Math.floor(Math.random()*(i+1))
    const itemAtIndex = shuffledArray[randomIndex]

    shuffledArray[randomIndex] = shuffledArray[i]
    shuffledArray[i] = itemAtIndex
  }

  return shuffledArray
}
