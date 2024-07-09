let factorial = []
let nums = []
let result
for (let index1 = 1; index1 <= 5; index1++) {
    nums.push(index1)
    nums.push('')
    nums.push(index1)
    for (let index2 = index1; index2 >= 1; index2--) {
        nums[1] += `${index2}`
        if (index2 !== 1) {
            nums[1] += ' X '
            if (index2 === nums[2]) {
                continue
            }
            nums[2] *= index2
        }
    }
    factorial.push(nums)
    nums = []
}

let screen = ''
for (let index = 0; index < factorial.length; index++) {
    screen += `
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item col-4">${factorial[index][0]}!</li>
            <li class="list-group-item col-4">${factorial[index][1]}</li>
            <li class="list-group-item col-4">${factorial[index][2]}</li>
        </ul>
        `
}

document.getElementById('list-groups').innerHTML = screen