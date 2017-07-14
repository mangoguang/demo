$(function(){
	var concat3WordsCurrying = function(a){
		return function(b){
			return function(c,d){
				return a+b+c+d;
			}
		}
	}

	console.log(concat3WordsCurrying('bar ')('foo ')('li ','ul '));


class Functor {
  constructor(val) { 
    this.val = val; 
  }

  map(f) {
    return new Functor(f(this.val));
  }
}

console.log((new Functor(2)).map(function (two) {
  return two + 2;
}));

class Point {
}
var p1 = new Point;
console.log(p1.__proto__);


var Person = function () { };
	Person.prototype.Say = function () {
	alert("Person say");
}
var p = new Person();
p.Say();


	// var arry = 'helloworld';
	// console.log(arry.map(function(arr){
	// 	return ':'+arr;
	// }))
})