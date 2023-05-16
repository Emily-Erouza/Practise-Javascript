// let isGreaterThan = 20;

// if (10 > 20) {
//   console.log('false');
// } else if (11 > 20) {
//   console.log('false');
// } else if (5 < 20) {
//   console.log('true');
// }

// let isLessThan = 10;

// if (10 > 10) {
//   console.log('true');
// } else if (9 > 10) {
//   console.log('false');
// } else if (6 < 10) {
//   console.log('false');
// }

// const getGreaterThan = (name, number, value) => {
//   // code.
//   // return "true" ;
//   console.log(" isGreaterThan" + name + number > 5 + value < 10);
// };

// getGreaterThan("isGreatherThan", 10, 5);
// let isGreaterThan = (5, 10);
// let str = getGreaterThan(isGreaterThan, 5 > 10);
// console.log(str);

const getGreaterThan = (name, number, value) => {
  
if (name == "greater") {
    if (number > value) {
      return true;
    }
    if (value > number) {
      return false;
    }
  }

  if (name == "less") {
    if (value > number) {
      return true;
    }
    if (number > value) {
      return false;
    }
  }
  //   } else {
  return false;
  //   }
};

console.log(getGreaterThan("greater", 1, 6));

console.log(getGreaterThan("greater", 10, 6));
// console.log("isLessThan",true );
