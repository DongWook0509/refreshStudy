var fruits = ["apple", "orange", "cherry"];
// for 
for (var i = 0; i <fruits.length; i++){
    //fruits[0] var i = 2; i = i + 2; i += 2
    document.getElementById('for').innerHTML += '<li>' + fruits[i] + '</li>'; 
}

// for each
fruits.forEach(function(item, index){
    //document.getElementById('foreach').innerHTML += '<li>' + fruits[index] + '</li>';
    document.getElementById('foreach').innerHTML += '<li>' + item + '</li>';
});

// for of
var item;
for (item of fruits){
    document.getElementById('forof').innerHTML += '<li>' + item + '</li>';
}

//for in
//(객체내의 값들마다 할일 ) 객체 = 변수 (property) + 함수(method)
var person = { pname : '홍길동' , page : '200', pgender : '남성'}
var x;
//person[pname] 홍길동 
for (x in person) {
    document.getElementById('forin').innerHTML += '<li>' + x + ' : ' + person[x] + '</li>'
}

//do / while
var y = 0;
do {
    document.getElementById('dowhile').innerHTML += '<li>'+fruits[y]+'</li>';
    y++;
}
while(y < fruits.length);