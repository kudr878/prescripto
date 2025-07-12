let arr = ['acc', 'brh',  'jee']

const filt = (arr) => {
  return arr.map(el => 'k' + el)
}

const newArr = filt(arr)
console.log(newArr)