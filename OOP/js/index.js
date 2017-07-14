$(function() {
  var name = 'chen';
  function Animal() {　　　　
    this.species = '动物';　　
  }
  Animal.prototype.species = '动物1';
  Animal.prototype.address = '香江动物园';

  function Cat(name, color) {　　　　
    this.name = name;　　　　
    this.color = color;　　
  }

  function extend(Child, Parent) {
    var F = function() {}
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
  }
  extend(Cat, Animal);　
  Cat.prototype.type = "猫科动物";　　
  Cat.prototype.eat = function() {
    alert("吃老鼠")
  };
  var cat = new Cat('大毛', '黑色');

  console.log(cat);
  // for (var i in cat) {
  //   alert(cat[i] + ':' + i + typeof(i));
  // }

  var promise = new Promise(function(resolve, reject) {
    $.ajax({
      type: 'post',
      url: 'http://zs.derucci.net/deruccimid/antifake/savefeedback315',
      dataType: 'jsonp',
      jsonp: "jsoncallback",
      data: {
          name: 'name',
          phone: 'phone',
          content: 'content',
          price: '1111'
      },
      success: function(data) {
        resolve(data);
      }
    })
  });

  function fn1(){
    promise.then(function(value) {
      console.log(value.msg);
    }, function(value) {
     // failure
    });
  }

  function fn2(){
    promise.then(function(value) {
      console.log(value.msg);
    }, function(value) {
     // failure
    });
  }

  fn1();
  fn2();
  Animal.prototype.age = '8';
  var Fn = function(){};
  var Dog = function(){
    this.color = 'black';
  };

  var Fn = function(){};
  Fn.prototype = Animal.prototype;
  Fn.prototype.constructor = Fn;

  Dog.prototype = new Fn;
  Dog.prototype.constructor = Dog;
  Dog.prototype.weight = '30kg';
  console.log(Fn);

  var fn = new Fn();
  var animal = new Animal();
  var dog = new Dog();
  console.log(fn.species+"::"+fn.address+'::'+fn.age);
  console.log(animal.species+"::"+animal.address+'::'+animal.age)
  console.log(dog.species+"::"+dog.address+'::'+dog.age)

  const obj = {
    id: 1,
    name: 'guang',
  }
  const address = '东莞';
  obj.age = 22;
  obj.id = 2;
  console.log(obj);
  console.log(address)

  const items = [1,2,3,4];
  const itemsCopy = [...items];
  items.push(5);
  console.log(itemsCopy);

  let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
  };

  // sum = (x,y) => x+y;
  $('.submit').click(()=> console.log('success'))
  function sum(x,y){
    return x+y;
  }

  console.log(sum(1,2));

  //模块
  (function() {
    // 私有变量
    var age = 20;
    var name = 'Tom';
 
 
    // 私有方法
    function getName() {
        return `your name is ` + name;
    }
 
 
    // 共有方法
    function getAge() {
        return age;
    }
 
    // 将引用保存在外部执行环境的变量中，形成闭包，防止该执行环境被垃圾回收
    window.getAge = getAge;
  })();

  function fn() {
    return 20;
}
 
fn.toString = function() {
    return 10;
}
 
console.log(fn + 10);  // 输出结果是多少？

})