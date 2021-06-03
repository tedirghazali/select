import { destroy } from './destroy.js'
import { intersection } from './intersection.js'

export const switched = (...fromIndex) => {
  if(fromIndex.length === 0) {
    throw new Error('Accept index of array elements only and you add at least one index in number')
  }
  return (fromArr, ...withIndex) => {
    if(!isArray(fromArr)) {
      throw new Error('Please enter array only here')
    }
    if(withIndex.length === 0 && withIndex.length !== fromIndex.length && intersection(fromIndex, withIndex).length !== 0) {
      throw new Error('Only accept index of array elements and the number of the first indexes must be the same as the second indexes and also, both indexes must be different')
    }
    
    const oriArr = Array.from(fromArr)
    const newArr = Array.from(fromArr)
    
    for(let i = 0;i < fromIndex.length;i++) {
      if(fromIndex[i] !== undefined && withIndex[i] !== undefined) {
        newArr.splice(fromIndex[i], 1, oriArr[withIndex[i]])
        newArr.splice(withIndex[i], 1, oriArr[fromIndex[i]])
      }
    }
    
    return newArr
  }
}

