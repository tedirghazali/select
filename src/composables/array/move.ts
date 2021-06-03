import { destroy } from './destroy.js'

export default function move(...indexes: number[]) => {
  return (fromArr, toIndex, removeCount = 0) => {
    if(!isArray(fromArr)) {
      throw new Error('Please enter array only here')
    }
    if(!isNumber(toIndex)) {
      throw new Error('Input only index number here')
    }
    
    const oriArr = Array.from(fromArr)
    const tempArr = []
    
    for(let ind of indexes) {
      if(oriArr[Number(ind)] !== undefined) {
        tempArr.push(oriArr[Number(ind)])
      }
    }
    
    const newArr = destroy(...indexes)(oriArr)
    
    newArr.splice(toIndex, removeCount, ...tempArr)
    
    return newArr
  }
}

