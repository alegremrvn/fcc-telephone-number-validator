function telephoneCheck(str) {
  return /1?^\(?\d{3}\)?/.test(str);
}

console.log(telephoneCheck("(555)-555-5555"));

// let str = '()'
// console.log(/\(/.test(str))
// console.log(str.match(/\(|\)/g))