// ifelse pk switch 性能

const count = 100000000

function ifElseTest(num) {
  const startTime = new Date()
  let temp = 0
  for(let i = 0; i < count; i++) {
    if(num === 1) {
      temp = num
    } else if(num === 2) {
      temp = num
    } else if(num === 3) {
      temp = num
    } else if(num === 4) {
      temp = num
    } else if(num === 5) {
      temp = num
    } else if(num === 6) {
      temp = num
    } else if(num === 7) {
      temp = num
    } else if(num === 8) {
      temp = num
    } else if(num === 9) {
      temp = num
    } else if(num === 10) {
      temp = num
    } else if(num === 11) {
      temp = num
    } else if(num === 12) {
      temp = num
    } else if(num === 13) {
      temp = num
    } else if(num === 14) {
      temp = num
    } else if(num === 15) {
      temp = num
    } else if(num === 16) {
      temp = num
    } else if(num === 17) {
      temp = num
    } else if(num === 18) {
      temp = num
    } else if(num === 19) {
      temp = num
    } else if(num === 20) {
      temp = num
    }
  }
  const endTime = new Date()
  console.log('a: ', temp, endTime - startTime)
}

function switchTest(num) {
  const startTime = new Date()
  let temp = 0
  for (let i = 0; i < count; i++) {
    switch (num) {
      case 1: temp = num;break
      case 2: temp = num;break
      case 3: temp = num;break
      case 4: temp = num;break
      case 5: temp = num;break
      case 6: temp = num;break
      case 7: temp = num;break
      case 8: temp = num;break
      case 9: temp = num;break
      case 10: temp = num;break
      case 11: temp = num;break
      case 12: temp = num;break
      case 13: temp = num;break
      case 14: temp = num;break
      case 15: temp = num;break
      case 16: temp = num;break
      case 17: temp = num;break
      case 18: temp = num;break
      case 19: temp = num;break
      case 20: temp = num;break
      default:
        break
    }
  }
  const endTime = new Date()
  console.log('b: ', temp, endTime - startTime)
}


// ifElseTest(20);
// switchTest(20);
for (let i = 1; i < 20; i+=4) {
  ifElseTest(i)
  switchTest(i)
}
