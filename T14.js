function generateSquares(n) {
    let squares = [];
    for (let i = 1; i <= n; i++) {
        squares.push(i * i);
    }
    return squares;
}

console.log(generateSquares(100));


// Zipping

const keys = ['a', 'b', 'c'];
const values = [1, 2, 3];

const zipped = keys.map((key, index) => [key, values[index]]);
console.log(zipped); 