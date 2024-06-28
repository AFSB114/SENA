let nums = [[], [], []];

for (let num = 0; num < 10; num++) {
    nums[0][num] = num + 1;
}

let contPar = 0;
let contImpar = 0;
nums[0].forEach(function (number) {
    if (number % 2 == 0) {
        nums[1][contPar] = number;
        contPar++;
    } else {
        nums[2][contImpar] = number;
        contImpar++;
    }
})

// console.log(nums);
// console.log(`Numeros: ${nums[0]}`);
console.log(`Numeros Pares: ${nums[1]}`);
console.log(`Numeros Impares: ${nums[2]}`);