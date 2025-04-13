
isGcd(85, 34)

// implemntation of Euclidean algorithm
function isGcdJs(a, b) {
    let big = null
    let small = null
    if (a > b) {
        big = a
        small = b
    } else {
        big = b
        small = a
    }
    while (big !== 0 && small !== 0) {
        let prevNum = small
        small = big % small
        big = prevNum
    }
    console.log(big)
    return big
}