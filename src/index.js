function reverse (n) {
    let result = ''
    let absolute = Math.abs(n)
    let absstring = String(absolute)

    for (let i = 0; i < absstring.length; i ++) {
        result = `${absstring[i]}${result}`
    }
    console.log(+result)
}