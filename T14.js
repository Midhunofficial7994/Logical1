function generateSquares(n) {
    let squares = [];
    for (let i = 1; i <= n; i++) {
        squares.push(i * i);
    }
    return squares;
}

console.log(generateSquares(100));