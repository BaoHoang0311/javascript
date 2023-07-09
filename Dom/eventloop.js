//https://www.youtube.com/watch?v=GVx47SJYZhI
console.log(`0`)
setTimeout(function () {
    console.log(`1`)
})
new Promise(function (resovle, reject) {
    console.log(`2`)
    resovle(3)
}).then(function (val) {
    setTimeout(function () {
        console.log(val);
    })
}).then(function () {
    console.log(`then... 1`);
})
new Promise(function (resovle, reject) {
    console.log(`4`)
    resovle(5)
}).then(function (val) {
    console.log(val)
}).then(function () {
    console.log(`then... 2`)
})
console.log(`6`)

//0
// 2
// 4
// 6
// 5
// then... 1
// then... 2
// 1
// 3

