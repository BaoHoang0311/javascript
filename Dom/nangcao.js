//! 5. cloisure in loop
for (var z = 1; z < 5; z++) {
    setTimeout(function () {
        console.log(z); // z = ?
    }, 1000);
} // 5 5 5 5

for (let z = 1; z < 5; z++) {
    setTimeout(function () {
        console.log(z); // z = ?
    }, 1000);
} // 1 2 3 4