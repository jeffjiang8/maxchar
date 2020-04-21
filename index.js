function maxChar(str) {

    const chars = {}

    let max = 0
    let maxChar = ''

    // use let char in ___ to iterate through an object || let char of ___ to iterate through a string or an array

    for ( let char of str) {
        if ( chars[char] ){
            chars[char] ++
        } else {
            chars[char] = 1
        }
        // or chars[char] = chars[char] + 1 || 1
    }

    for ( let char in chars) {
        if ( chars[char] > max) {
            max = chars[char]
            maxChar = char
        }
    }

    return maxChar
}