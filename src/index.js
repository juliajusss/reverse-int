module.exports = function reverse(n) {
    let reversedN = parseInt(n.toString().split('').reverse().join(''));
    return reversedN;
}


