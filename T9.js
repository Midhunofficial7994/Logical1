function fibonacci(n) {
    const sequence = [];
    
    let a = 0, b = 1;
    
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        let next = a + b;
        a = b;
        b = next;
    }
    
    return sequence;
}
console.log(fibonacci(3));
