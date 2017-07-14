$(function() {
  console.log(location.href.indexOf('&'));
  var Chinese = {
    nation: '中国'
  }

  function Object(o) {
    function F() {}
    F.prototype = o;
    return new F();
  }

  var Doctor = Object(Chinese);
  Doctor.career = '医生';

  console.log(Doctor.nation);

})