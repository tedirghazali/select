import { destroy } from './destroyArray.js'
import { intersection } from './intersectionArray.js'

export const transfer = (...indexes) => {
  if(indexes.length === 0) {
    throw new Error('Only accept index of array elements and you must enter at least one index in number type')
  }
  return (fromArr, toArr, byIndex = null) => {
    if(!isArray(fromArr)) {
      throw new Error('Accept array only here')
    }
    if(!isArray(toArr)) {
      throw new Error('Accept array only here')
    }
    if(!isNumber(byIndex)) {
      throw new Error('Input only index number here')
    }
    
    const varFromArr = Array.from(fromArr)
    const varToArr = Array.from(toArr)
    let tempArr = []
    
    for(let ind of indexes) {
      if(varFromArr[Number(ind)] !== undefined) {
        tempArr.push(varFromArr[Number(ind)])
      }
    }
    
    const byInd = (byIndex === null) ? Number(varToArr.length) : byIndex
    
    varToArr.splice(byInd, 0, ...tempArr)
    
    const newArr = destroy(...indexes)(varFromArr)
    
    return {
      from: newArr,
      to: varToArr
    }
  }
}
