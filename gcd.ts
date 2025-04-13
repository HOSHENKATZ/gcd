
isGcdTs(48,18)

// implemntation of Euclidean algorithm
function isGcdTs(a: number, b: number):number {
    let big: number = 0
    let small: number = 0
    if (a > b) {
        big = a
        small = b
    } else {
        big = b
        small = a
    }
    if ( big !== 0 &&  small !== 0) {
        
        while ( small !== 0) {
            let prevNum: number = small
            small = big % small
            big = prevNum
        }
    }
    console.log(big)
    return big
}

