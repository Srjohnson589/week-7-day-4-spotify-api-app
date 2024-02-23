// # ----------Examples----------
// # high_and_low("1 2 3 4 5")  # return "5 1"
// # high_and_low("1 2 -3 4 5") # return "5 -3"
// # high_and_low("1 9 3 4 -5") # return "9 -5"


const high_and_low = (a_str) => {
    let a_list = a_str.split(' ');
    maxNum = Math.max(...a_list)
    minNum = Math.min(...a_list)
    return `${maxNum} ${minNum}`
}

console.log(high_and_low("1 2 3 4 5"));
console.log(high_and_low("1 2 -3 4 5"));
console.log(high_and_low("1 9 3 4 -5"));