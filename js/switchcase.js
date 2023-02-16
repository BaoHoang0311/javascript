

const logName = function () {
    console.log(`your name`);
}
const logName1 = function () {
    return 1;
}
logName();

let val = a(5, 6);
console.log('val', val)

function a(a, b) {
    return a + b;
}

(function () {
    console.log(`object dsadasd`);
})();


if (2 > 1) {
    var mess = "hello evondedfgfgdgv";
}
console.log(mess);

const das = function () {
    return 'abc';
}
console.log(das());

const das1 = function () {
    console.log(`object afafa`);
}
das1();

function cloisure1(str) {
    let hi = 'Hi';
    let hello = 'hello';
    function sayHi() {
        console.log(hi);
    }
    function sayhello() {
        console.log(hello);
    }
    if (str == 'hi') return sayHi;
    return sayhello;
}
let funcInside = cloisure1('hello');
funcInside();

function cloisure2(){
    count = 0;
    let func = () =>{
        count++;
        console.log(count);
    }
    return func;
}
let first = cloisure2(); 
first(); first(); // in ra 2 lần gọi
let first2 = cloisure2();
first2(); // in ra 1 lần gọi



function showName(fName, lName) {
    let nameIntro = "Your name is ";
    //! C1
    function makeFullName() {
        nameIntro = 'gggg'
        return nameIntro + fName + " " + lName;
    }
    return makeFullName;
    //! C2
    // return function makeFullName() {
    //     nameIntro = 'gggg'
    //     return nameIntro + fName + " " + lName;
    // }
}
let zz13 = showName('dad', 'adad');
console.log(zz13());



function cloisure(message) {
    return function hiyourname(name) {
        console.log(`${message} + ${name}`);
    }
}

let zzz = cloisure('hahaha');
zzz('hoang bao');

function compare(a, b) {
    if (Number(a) === NaN || Number(a) === NaN) return 'khong phai so';
    return Math.max(a, b);
}

console.log('compare(5,7)', compare('6', '5'));

function stringSplit(str) {
    let word = str.split(' ');
    let res = '';
    word.forEach(e => {
        res += capFirst(e) + ' ';
    });
    return res;
}

function capFirst(str) {
    if (typeof str === 'string') {
        let res = str.charAt(0).toUpperCase() + str.slice(1);
        return res;
    }
    return 0;
}

console.log(`dasdas ${stringSplit('nguyen le hoang bao')}`);

// callback function
function sum(a, b, callback) {
    callback(a + b);
}
function print(number) {
    console.log(number);
}

sum(5, 6, print);

let arr = [1, 2, 3];
arr.unshift('a');
console.log(arr);

const square = x => {
    return x * x;
}
console.log('square(5)', square(5));

const square1 = str => {
    console.log(`${str}`);
}
square1('hello');

const dasd = x => {
    return x * x;
}
console.log(`dasd(5)`, dasd(5));

const dasd1 = function (x) {
    return x * x;
}
console.log(`dasd1(5)`, dasd1(5));

const dss = () => {
    console.log(`clonsadad`);
}
dss();

const abcde = (str, num) => {
    console.log(str, num);
}
abcde('5534', 6);

const now = new Date(2022, 0, 2);
// TIMESTAMP dùng (kết quả từ ngày 1/1/1970) đến bây giờ -> milisecond
console.log(now);// timestamp tính ra kết quả milisecond

const abc = now.getTime();
console.log(`date now`, new Date(abc));

const birthday = new Date(1995, 0, 3);
console.log(`object`, birthday.getDay());
// in ra timestamp
birthday.setFullYear(2022);
console.log(`timestamp`, birthday.getTime());
birthday.setMonth(0);
birthday.setDate(16);
console.log(`my birthday after update`, birthday);
console.log(`birthday.toDateString`, birthday.toDateString('mm/dd/yyyy'));
console.log(`birthday.toLocaleDateString`, birthday.toLocaleDateString('en-Us'));
console.log(`birthday.toTimeString`, now.toTimeString());
console.log(`birthday.toDateString`, birthday.toISOString());

console.log(`object`, now.getDate());
console.log(`object`, now.getMonth());

let s = "";
// 012 -> 12
// 02 ->  02 
s = ('0' + now.getDate()).slice(-2) + '/' + ('0' + (now.getMonth() + 1)).slice(-2) + '/' + now.getFullYear();
console.log(s);


//! setTimeout : sau 5s nó chạy 
//! setInterval : cứ mỗi 5s là nó chạy

// const adz = setTimeout(function () {
//     alert('hello world');
// }, 5000);
// clearTimeout(adz);
// const zzz1 = setInterval(function () {
//     console.log(`hello lololo`);
// }, 100000);
// clearInterval(zzz1);

// function getAge (year){
//     if (typeof year !== 'number') return 'nhap dung dinh dang nam';
//     const yearNow = new Date().getFullYear();
//     return yearNow - year;
// }
// console.log('getAge', getAge(lol));

// function countDown(time) {
//     let count = 0;
//     const z1 = setInterval(() => {
//         count++;
//         console.log(count);
//         if (count === time) {
//             console.log(`time out`);
//             clearInterval(z1);
//         }
//     }, 1000);
// }
// countDown(5);

function timeSince(timec) {
    let date = Date.now();
    console.log(date - timec);
    return secondsToHms((date - timec) / 1000);
}
console.log(timeSince(new Date(2021, 9, 26)));

// function timestampq(time) {
//     let now = Date.now();
//     let ngay = 0;
//     let gio = 0;
//     let phut = 0;
//     let giay = 0;
//     const z1 = setInterval(() => {
//         let tinhtoan = now - time;
//         //! tính giay
//         if (tinhtoan / (1000 * 60) >= 60) {
//             phut++;
//             giay = tinhtoan - 60;
//         }
//         console.log(`phut`, Math.trunc(tinhtoan / (1000 * 60)));
//     },1000)
// };

let now1 = Date.now();
let time = new Date(2023, 0, 18, 0, 00, 00);
let someMillisecondValue = now1 - time;

//! tính gio phut giay chinh xac
function secondsToHms(d) {
    d = Number(d);
    var year = Math.floor(d / (365 * 24 * 60 * 60));
    var day = Math.floor(d % (365 * 24 * 60 * 60) / (24 * 60 * 60));
    var h = Math.floor(d % (365 * 24 * 60 * 60) % (24 * 60 * 60) / 3600);
    var m = Math.floor(d % (365 * 24 * 60 * 60) % (24 * 60 * 60) % 3600 / 60);
    var s = Math.floor(d % (365 * 24 * 60 * 60) % (24 * 60 * 60) % 3600 % 60 % 60);
    var yearDisplay = year > 0 ? year + (year == 1 ? " year, " : " years, ") : "";
    var dayDisplay = day > 0 ? day + (day == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return yearDisplay + dayDisplay + hDisplay + mDisplay + sDisplay;
}
console.log(secondsToHms(someMillisecondValue / 1000));


function haha() {
    let now = Date.now(); // timestamp 
    let time = new Date(2023, 0, 18, 0, 00, 00); // timestampw  d
    let someMillisecondValue = (now - time) / 1000;
    return function calc() {
        let d = Number(someMillisecondValue);
        let time = d / (365 * 24 * 60 * 60);
        if (Math.floor(time) > 0) {
            console.log(`${Math.floor(time)} nam truoc`);
            return;
        }
        time = d / (31 * 24 * 60 * 60);
        if (Math.floor(time) > 0) {
            console.log(`${Math.floor(time)} thang truoc`);
            return;
        }
        time = d / (7 * 24 * 60 * 60);
        if (Math.floor(time) > 0) {
            console.log(`${Math.floor(time)} tuan truoc`);
            return;
        }
        time = d / (24 * 60 * 60);
        if (Math.floor(time) > 0) {
            console.log(`${Math.floor(time)} ngay truoc`);
            return;
        }
        time = d / (1 * 60 * 60);
        if (Math.floor(time) > 0) {
            console.log(`${Math.floor(time)} gio truoc`);
            return;
        }
        time = d / (1 * 60);
        if (Math.floor(time) > 0) {
            console.log(`${Math.floor(time)} phut truoc`);
            return;
        }
        time = d;
        if (Math.floor(time) > 0) {
            console.log(`${Math.floor(time)} giay truoc`);
            return;
        }
    }
}
let zb = haha();
zb();

let arr1 = ['as', 'db', 'cd'];

// console.log(arr1.reverse());
// join 

console.log(arr1.join(" ,"));
arr1.unshift('090');

// console.log(arr1);
// arr1.splice(0,10);

// console.log(arr1);
// console.log(arr1);

// let arr2 = arr1.slice(1,5);
// console.log(arr2);

// splice insert array
let arrz = ['as', 'db', 'cd'];
arrz.splice(0, 2, 5, 6, 7, 8, 9);
console.log('arrz', arrz); // 5 6 7 8 9 cd

arr1.splice(5, 0, 'a', 'a', 'a', 'a', 'a');
console.log(arr1);
let random = [99, 3, 1, -5, 7, -6, -20];
console.log('random', random.sort());

const random2 = random.sort((a, b) => {
    if (a < b) return 1; // sắp xếp theo tăng dần
    else return -1; // sắp xếp theo giảm dần
});
console.log(random2);

const random1 = random.sort((a, b) => a > b ? 1 : -1);//giảm dần
console.log(random1);

let str = x => x > 2 && x < 10;
const res = random.find(str);
console.log(res);

console.log('array map');
// map- duyệt qua hết phan62 tử tgrong mảng trả ra mảng mới
const list = [1, 2, 3, 41, 456, 7, 88];
// trả ra 1 mảng mới các số trong mảng cũ gấp đôi
const list2 = list.map((value, index) => {

    if (index % 2 == 0) {
        return value * 2;
    }
    else {
        return value;
    }
});
console.log('list2', list2);// mảng mới thay đổi
console.log('list', list); // mảng cũ y nguyên

const list3 = list.map(function (value, index) {
    if (index % 2 == 0) {
        return value * 3;
    }
    else {
        return value + 2;
    }
});
console.log(list3);

//! hãy cho biết sự khác nhau của forech và map
//! foreach return ko được ko dừng
//! map return được

// filter
let zzz1 = list.filter((value, index, array) => {
    if (index % 2 == 0)
        return value % 2 == 0;
});
console.log(zzz1);

//! some every
//! reduce
const arr55 = [1, 2, 3, 4, 5];
const tongreduce = arr55.reduce((sum, cur, curidx) => {
    console.log(`${cur} - ${curidx}`);
    return sum += cur;
}, 45);
console.log('tongreduce', tongreduce);

const str1 = "My name is evondev";
function reverseString(str) {
    if (!str) return null;
    let z3 = str1.split(" ").reverse();
    let trtr = z3.reduce((res, cur, idx) => {
        console.log(`${cur}-${idx}`);
        return res = res + ' ' + cur;
    });
    return trtr;
}

console.log(reverseString());

let strr = 'abc';
console.log(strr.split(''));

function reversCharandString(str) {
    if (!str) return null;
    let abc = str.split(' ').reverse();
    let res = '';
    abc.forEach(element => {
        let kq = element.split('').reverse().reduce((chr, cur) => {
            chr = chr + cur;
            console.log(chr);
            return chr;
        });
        res += kq + ' ';
    });
    return res;
}

function reversCharandString2(str) {
    if (!str) return null;
    const res = str.split(' ')
        .reverse()
        .map((x) => {
            return x.split('').reverse().join('');
        }).join(' ');
    return res;
}
console.log(reversCharandString2('My name is evondev'));

let z = list.map(x => x * 2);
console.log(z);
console.log(list);

function capFirst(str = "") {
    if (!str) return null;
    return str.toLowerCase().charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}

function capString(str = "") {
    if (!str) return null;
    let arrStr = str.split(' ').map(x => {
        return capFirst(x);
    }).join(' ');
    return arrStr;

}
console.log(capString('My name is hoang bao'));

//! by references

//! Json.stringfy: convert sang string có thể chuyển về lại Json; 
//! Json.Parse: ép kiểu string ve Json
console.log(JSON.stringify([1, 2, 3]));// "[1,2,3]"
console.log(JSON.parse("[1,2,3]"));
const student = ['a', 'b', 'c', 'd', 'e'];

console.log(student);
//! 1. copy dùng slice
//! 2. spread operatior
const student2 = student.slice(-2);
console.log(student2);
console.log(student);

const studentspreadoperator = [...student];
console.log(studentspreadoperator);

const arr11 = [1, 2];
const arr12 = [1, 2];
const arr13 = [1, 2];
let mergearr = [...arr11, [...arr12], ...arr13];
console.log('mergearr', mergearr);

let mergearr1 = arr11.concat(arr12, arr13)
console.log('mergearr1', mergearr1);

let ggg = [1, 3, 3, 4];
let zz = ggg.splice(0, 3, 'a');
console.log('zz', zz);
console.log('ggg', ggg);

// destructuring object
const toys = ["ball", "sword", "arrow", "magic"];
const toysa = toys[0];
const toysb = toys[1];

// setInterval(()=> alert("hello"),1000);

function timestamp(time) {
    let dem = 0;
    const z1 = setInterval(function count() {
        dem++;
        console.log(dem);
        if (dem == 5) {
            console.log('het thoi gian');
            clearInterval(z1);
        }
    }, 1000);
}

// timestamp(30);

//! counting time
function secondsToHms1(d) {
    d = Number(d);
    let h = Math.floor(d / (60 * 60));
    let m = Math.floor(d % (60 * 60) / 60);
    let s = Math.floor(d % (60 * 60) % 60);
    let hDisplay = h == 1 ? `0${h} hour ` : `0${h}`.slice(-2)+` hours `;
    let mDisplay = m == 1 ? `0${m} minute ` : `0${m}`.slice(-2)+` minutes `;
    let sDisplay = s == 1 ? `0${s} second ` : `0${s}`.slice(-2)+` seconds `;
    return hDisplay + mDisplay + sDisplay;
}

function countDown1(gio, phut, giay) {
    let time = (gio * 3600 + phut * 60 + giay); // milliseconds
    const zz = setInterval(() => {
        let count = time--;
        if (count > 0) console.log(secondsToHms1(count));
        else {
            clearTimeout(zz);
            console.log("het gio");
        };
    }, 1000);
}
// countDown1(2, 0, 5);

function test() {
    return 5;
}
const zds = test();
console.log(zds);

const demo = ['a', 'b', 'c', 'd', 'e'];
const adsd = demo[0];
const b = demo[1];
const c = demo[3];

const eqe = [...demo, ...demo];
const [q, e, w, r] = eqe;
console.log(q, e, w, r);// a, b, c,d
// rest parameters
const [z1, ...gggd] = demo;
console.log(`z: ${z1},gggd: ${gggd}`); // a ,b,c,d,e 

function demo15(a, ...z) {
    console.log(a);
    console.log(z);
}
demo15(0, 2, 3, 4, 'a'); // 0,  [2,3,4,'a']

let test1 = [1, 1000, false, null, "evondev", "", undefined, "javascript", [1, 2, 3]]
let resz = test1.filter(x => Boolean(x));
console.log('filter', resz);
console.log('filter', test1);

//! 1: true,false:false, null:false, "":false,undefined:false
let resz1 = test1.map(x => Boolean(x));
console.log('map', resz1);
console.log('map', test1);
console.log(test1[0]);

const complexarray_flat = [,
    [
        1,
        2,
        3,
        [true, false]
    ],
    [
        1,
        3,
        4,
        [
            [['a', 'b', 'c'], 3]
        ]
    ]
];
// dectruction objects
console.log(complexarray_flat.flat(20));

function unique(arr) {
    if (!Array.isArray(arr)) return arr;
}
function splitArray(array, number) {
    if (!Array.isArray(array)) return null;
    let res = [];
    let index = 0;
    while (index < array.length) {
        let cut = array.slice(index, index + number);
        res.push(cut);
        index = index + number;
    }
    console.log(res);
}
splitArray([1, 2, 3, 4, 6], 2);

// ... spread operation, flat() (cắt ra 1 array)
// khai báo object
const objectliteral = {};
// object contructor 
const objectContructor = new Object();

const student1 = {
    "name": "bao",
    "age": [23, 27],
    "hi": function () {
        console.log('hello');
    },
    "number": () => 5,
    "last": () => "adas",
}

student1.hi();

console.log(student1['name']);
console.log(student1.age);
// delete student1.age;
console.log(student1);
// for of dùng cho mảng , for in dùng cho object
for (const key in student1) {
    console.log(`${key}---${student1[`${key}`]}`);
}

let keys = Object.keys(student1); // in ra hết các key
console.log(keys);

let values = Object.values(student1); // in ra tat ca cac value
console.log(values);

let entries = Object.entries(student1);
console.log(entries.flat(20));
entries[2][1]();

const name1 = {
    "firstName": "Hoang",
}
const name2 = {
    "lastName": "Bao",
}
let fullName = {
    ...name1,
    ...name2,
    'haha': 30,
    'themObject': 'hehehe'
};
console.log(fullName);

// object.freeze
const car = {
    'name': 'BMW',
    'age': 27,
}
// car.name = 'Merc';
// let freezeCar = Object.freeze(car);
// car.name = 'Merc';
// console.log(freezeCar);

let user = {
    'name': 'nguyen le hoang bao'
};
user = { ...fullName, ...car };
user = Object.seal(user); // ko cho chỉnh sửa hay thêm properties
user.age = 'Senidasdasdor';
user.name = 'merc';
user.dsadadas = 'oooop';
console.log(user);

const car2 = car;
car2.age = 26,
    console.log(car);
console.log(car2);

// objectcopy {...object}, arraycopy [...arra]
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
let objectassign = Object.assign(target, source);
console.log(objectassign);

// sao chép user phức tạp
const user3 = {
    'userName': 'Hoang Bao',
    'school': {
        'name': 'Cao thang',
        'room': {
            'name': 'IT',
        },
    }
}
// khi làm vậy thì sẽ bị thay đổi hết
const user4 = { ...user3 };
user4.school.name = 'Bách khoa tphcm';
console.log(user4);
console.log(user3);
// copy 1 object phức tạp
// clone
const user5 = JSON.parse(JSON.stringify(user4));
user5.school.name = 'khoa hoc tu nhien tphcm';
console.log('user5', user5);

const student23 = {
    'name': 'nguyễn lê hoàng bảo',
    'age': 30,
    'titile': 'senior',
    'hi': function () {
        console.log(`${this.age}---${this.name}---${this.titile}`);
    },
    'fullname': {
        'name': 'nguyen le hoang bao'
    },
    'dasdasd': {
        'dazdee': '0o09o0'
    },
    'testfunc': () => console.log('testfunc gfgf'),
}
student23.hi();
console.log(Object.keys(student23));
let student25 = { ...student23 };
student25.name = 'zzz';
//! nếu ở ngoài thì không bị thay đổi, nhưng student25.fullname.name bị thay đổi
console.log('student25', student25);
console.log('student23', student23);
//! nhưng student25.fullname.name bị thay đổi

student25.fullname.name = "zzzzzzz";
console.log('student25', student25);
console.log('student23', student23);
//! nên dùng 

const student24 = JSON.parse(JSON.stringify(user3));
student24.school.room.name = 'business';
console.log(user3);
console.log(student24);
console.log(student23.fullname.name);

//! optional chaining
const zlo = student23.fulllname?.name;
console.log('zlo', zlo);
const lili = student23?.dasdasd?.dazdee;
console.log('lili', lili);

(function () {
    console.log(5 + 5);
    let z = 5;
    return function student(z) {
        console.log(z);
    }
})();

console.log(Object.entries(student23));
const [p, k, i] = Object.entries(student23);
console.log(p, k, i);

//! detructing object
const { age, name, ...ppp } = student23;

//30, bao , 
// {title:string, hi:f(), fullname: {name:string} , dasdas:{dazz:string}}
console.log(age, name, ppp);
ppp.testfunc();

const info = {
    'name': 'bao',
    'age': 27,
    'info': 'khoa hoc tu nhien tphcm'
}
myInfo({ age: 27, name: 'bao', info: 'zzzz' });

function myInfo({ name, age, info }) {
    console.log(name, age, info);
}

// {} [] null === object
const zzzzz = (object) => {
    if (!Array.isArray(object) && object !== null && typeof object === 'object') {
        return true;
    }
    return false;
}
console.log(zzzzz(student23)); //true

const ttt = (x) => {
    if ((x < 10 || x > 20) && x % 2 == 0) return true;
    return false;
}
console.log(ttt(23));

//! viết function trả về key object
const eqee = {
    'a': 1,
    'b': 2,
}
console.log(Object.entries(eqee));// [['a',1],['b',2]]

const qeqe = (obj) => {
    return Object.keys(obj).map(val => [val, obj[val]]);
}
console.log(qeqe(eqee)); // [['a',1],['b',2]]

const ter = [1, 3, 4, 5, 7, 6].map(x => {
    if (x % 2 == 0) return [x, 'sochan'];
    else return x;
});
console.log('ter', ter);

const qeqe1 = (obj) => {
    let res = [];
    Object.keys(obj).forEach(key => {
        res.push([key, obj.key])
    });
    return res;
}
console.log(qeqe1(eqee));// [['a',1],['b',2]]

//! viết function xóa object muốn xóa
// dele
console.log();
let zzzr = (obj, ...keyDel) => {
    let objj = JSON.parse(JSON.stringify(obj));
    keyDel.forEach(key => delete objj[key]);
    console.log(obj);
    return objj;
}
console.log('zzzr', zzzr({ 'a': 1, 'b': 2, 'c': 3 }, 'b', 'a'));

//!.every()
const sochan = [2, 4, 6].every((val, x) => x + 2 % 2);
console.log('sochan', sochan)
//! any()
const cosole = [1, 2, 3].some(x => x % 2); //true
console.log('cosole', cosole)

//! copy chac chan
const  a43434 = {
    'num1': 1,
    'info': {
        'name':27,
    },
    'num3':3
};
const copy = JSON.parse(JSON.stringify(a43434));
copy.info.name = 26 ;
console.log(copy);
console.log(a);

//! DOM

