import "./styles.css";

var animals = {
  name: "cat",
  print: function () {
    var inner1 = function () {
      console.log(this.name, name);
    }.bind(this);
    inner1();
    //cat, undefined
    //bind 함수 안써주면 typeError 뜸
    //객체 중첩함수에서 this는 undefined
    // typeError : Cannot read properties of undefined (reading 'name')

    var inner2 = () => console.log(this.name, name);
    inner2();
    //cat, undefined
    //arrow함수의 경우 맥락상 상위객체의 name을 가져옴.
    var name = "horse";
    console.log(window.name, this.name, name);
    //dog cat horse
    //window -> global
  }
};

name = "dog";
animals.print();

var time = (t) => {
  console.log("time:", t);
  //while (true); // 무한루프
};

setTimeout(() => time(100), 0);
setTimeout(() => time(200), 0);
//0초 지연으로 바로 콘솔창에 보임
//time: 100
//time: 200
