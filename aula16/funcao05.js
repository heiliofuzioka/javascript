// RECURSIVIDADE
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }0
}

console.log(fatorial(5))