import './styles/style.scss'

//const number="print";

//alert(number);
//const car={ };//объект
//const cars=[ car ]; //массив
//console.log(cars);
//const car={
 // name:"WV"
//};
//console.log(car);
// const user={
//   name:"IG",
//   email:"mix"
// };
//NULL
//Symbols
//bigint
//const x=5;
//const y=true;
//console.log(y+x);
//console.log(5%2);//остаток от деления
//console.log(5**2);//возведение в степень
//console.log(+"34");//унарный плюс
//const z=3;
//const c="3";
//console.log(z==c,"сравнение равенсва");//нестрогое равенство
//console.log(z===c,"сравнение равенсва");//строгое равенство
//let n=3;
//n=n+5;
//n+=5;

// const x="";
// const y=1;
// const z=0;
// const q=true;
// const w=false;
// const n=null;
// const u=undefined;
// console.log(x+y+z);
// console.log(x-y+z);
// //console.log(q+w);
// console.log(true+false);
// console.log(6/"3");
// console.log("2"*"3");
// console.log(4+5+"px");
// console.log("$"+4+5);
// console.log("4"-2);
// console.log("4px"-2);
// console.log("-9"+5);
// console.log("-9"-5);
// console.log(n+1);
// console.log(u+1);
// console.log("\t\n"-2);


// showMessage();
//
// function showMessage(){
//   console.log("Hello World");
// }

// const showMessage=function (){
//   console.log("Hello World");
// }
// showMessage();

 const showMessage=()=>{
 console.log("Hello World");
 }
// showMessage();
//DOM дерево
//добавление текста
const contactButton=document.getElementById("contactButton");
contactButton.innerHTML="new text";

//добавление класса
contactButton.classList.add("button_size","animation");

//действие после нажатия
//contactButton.addEventListener("click",showMessage);

//получаем доступ к input
const validateForm = () => {
  const input=document.querySelector("input");
  if(input.value.length < 2){
    alert("не менее 2 символа");
    return false;
  }
  return true;

}

contactButton.addEventListener("click",validateForm);

