// .length

const newString3 = "toi la nguyen le hoang bao";

let newStringlenght = newString3.length;
console.log("hello");

var course =[
    'Javascript',
    'PHP',
    'Node.js',
]
var dict = {
    Javascript : "a",
    PHP : '2',
    js : 3 ,
};
var mang = [1,2,3];
var arr2 =[   
    [1,3,4],
    [4,5,6],
]
console.log(arr2[0][1]);
console.log(`dict `,parseInt(dict['Javascript']) ==NaN ? 3 : 4  + 6 );

//// cainaylacallbackfuntion ~= function(course,vitriindex) : callback function
Array.prototype.map2= function (cainaylacallbackfunction){   
    console.log(`${this[2]} xin chao`);
    let arr =[];
    var chieudai = this.length;
    for( var i=0; i< chieudai ; i++){
        arr.push( cainaylacallbackfunction(this,i) );        
    }   
    return arr;
}

var kq  = course.map2( function(course,vitriindex){
    return `${course[vitriindex]}------${vitriindex}`;
});

console.log(kq);

function do1(){
    var a =5 ;
    console.log(a);
}
function do2(){
    var a =6 ;
    console.log(a);
}
function do3(){
    var a =7 ;
    console.log(a);
}
do1();
do2();
do3();
//dsad
