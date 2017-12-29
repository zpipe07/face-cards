import * as utils from './utils'

describe('utils', () => {
  describe('getRandomArrayElements', () => {
    it('should return an array with a length equal to the amount', () => {
      const array = [1, 2, 3, 4, 5]
      const amount = 3
      const result = utils.getRandomArrayElements(array, amount)

      expect(Array.isArray(result)).toEqual(true)
      expect(result).toHaveLength(amount)
    })
  })

  describe('shuffleArray', () => {
    it('should', () => {
      const array = [1, 2, 3, 4, 5]
      const result = utils.shuffleArray(array)

      expect(Array.isArray(result)).toEqual(true)
      expect(result).toHaveLength(array.length)
      // TODO: figure out why arrayContaining() is not a function
      // expect(result).arrayContaining(array)
    })
  })
})
