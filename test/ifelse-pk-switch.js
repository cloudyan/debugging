// ifelse pk switch 性能

const count = 100000000;

function ifElseTest(num) {
  const startTime = new Date();
  let temp = 0;
  for(let i = 0; i < count; i++) {
    if(num == 1) {
      temp = 0;
    } else if(num == 2) {
      temp = 0;
    } else if(num == 3) {
      temp = 0;
    } else if(num == 4) {
      temp = 0;
    } else if(num == 5) {
      temp = 0;
    } else if(num == 6) {
      temp = 0;
    } else if(num == 7) {
      temp = 0;
    } else if(num == 8) {
      temp = 0;
    } else if(num == 9) {
      temp = 0;
    } else if(num == 10) {
      temp = 0;
    } else if(num == 11) {
      temp = 0;
    } else if(num == 12) {
      temp = 0;
    } else if(num == 13) {
      temp = 0;
    } else if(num == 14) {
      temp = 0;
    } else if(num == 15) {
      temp = 0;
    } else if(num == 16) {
      temp = 0;
    } else if(num == 17) {
      temp = 0;
    } else if(num == 18) {
      temp = 0;
    } else if(num == 19) {
      temp = 0;
    } else if(num == 20) {
      temp = 0;
    }
  }
  const endTime = new Date();
  console.log('a: ', num, endTime - startTime);
}

function switchTest(num) {
  const startTime = new Date();
  let temp = 0;
  for (let i = 0; i < count; i++) {
    switch (num) {
      case 1: temp = 0;break;
      case 2: temp = 0;break;
      case 3: temp = 0;break;
      case 4: temp = 0;break;
      case 5: temp = 0;break;
      case 6: temp = 0;break;
      case 7: temp = 0;break;
      case 8: temp = 0;break;
      case 9: temp = 0;break;
      case 10: temp = 0;break;
      case 11: temp = 0;break;
      case 12: temp = 0;break;
      case 13: temp = 0;break;
      case 14: temp = 0;break;
      case 15: temp = 0;break;
      case 16: temp = 0;break;
      case 17: temp = 0;break;
      case 18: temp = 0;break;
      case 19: temp = 0;break;
      case 20: temp = 0;break;
      default:
        break;
    }
  }
  const endTime = new Date();
  console.log('b: ', num, endTime - startTime);
}


// ifElseTest(20);
// switchTest(20);
for (let i = 1; i < 20; i=i+4) {
  ifElseTest(i);
  switchTest(i);
}
