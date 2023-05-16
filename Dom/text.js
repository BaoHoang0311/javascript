console.log(5);
let dic = {};
dic[1] = [];
dic[1].push(5);
dic[1].push(6);
dic[2]= "b";

console.log(dic);
let BgDict = {
    '1': ['#031B4D','ada'], 
    '0': '', 
    '3': '#062847', 
    '2': '#303E4D', 
    '5': '#115478', 
    '4': '#00122e', 
    '7': '#152324', 
    '6': '#243447', 
    '8': '#11202F'
}
let str = JSON.stringify(BgDict);
console.log(JSON.parse(str));

let c = {"1":[97,96],"2":[81,80]}

// console.log(c["1"][0]);
// console.log(c[1][0]);

c[1].map(x=>console.log(x));