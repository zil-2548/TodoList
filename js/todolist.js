
//To Add TableData
// document.getElementById('addtdbtn').onclick=()=>{
//       let addttd = document.getElementById('addtd').value;
//
//       let addtdata= document.getElementById('tabeldata');
//       let td = document.createElement('td');
//       td.innerHTML=addttd;
//       addtdata.append(td);
//
//       document.getElementById('addtd').value='';
// }

//To Add TableHading

// document.getElementById('addthbtn').onclick=()=>{
//   let addth = document.getElementById('addth').value;
//
//   let addthading= document.getElementById('tablehading');
//   let thading = document.createElement('th');
//   thading.innerHTML=addth;
//   addthading.append(thading);
//
//   document.getElementById('addth').value='';
// }
// To Add TableRow
// document.getElementById('addtrbtn').onclick=()=>{
//
//   let addtr = document.getElementById('addtr').value;
//
//   let addtrow = document.getElementById('tablerow');
//   let tr = document.createElement('tr');
//   tr.innerHTML=addtrow;
//   addtrow.append(tr);
//
//   document.getElementById('addtr').value='';
//
// }


// <---------->  integers and check whether they are equal or not <------>

//
// document.getElementById('cheack').onclick=()=>{
//   let n1=document.getElementById('n1').value;
//
//   let n2 = document.getElementById('n2').value;
//
//   if (n1===n2 && n2===n1){
//     document.getElementById('output').innerHTML=`Number Is Equal `
//   }
//   else if (n1!==n2 && n2!==n1){
//
//     document.getElementById('output').innerHTML=`Number is Not Equal`
//   }
// }


// <---------> Write a  program to check whether a given number is even or odd. <---------->
// document.getElementById('cheack').onclick=()=>{
//   let n1 = document.getElementById('n1').value;
//   // let n2 = document.getElementById('n2').value;
//
//   if (n1%2 === 0 ){
//       document.getElementById('output').innerHTML=`Given Number ${n1} is Evaen `
//   }
//   else {
//     document.getElementById('output').innerHTML=`Given Number ${n1} is Odd`
//   }
// }




// <---------> Write a  program to check whether a given number is positive or negative <--------->

// document.getElementById('cheack').onclick=()=>{
//   let n1 = document.getElementById('n1').value;
//
//   if(n1>0){
//     document.getElementById('output').innerHTML=`Given Number ${n1} is Positive Number`
//
//   }
//   else {
//     document.getElementById('output').innerHTML = `Given Number ${n1} is Negative Number`
//   }
// }



// <----------> Write a  program to find whether a given year is a leap year or not ❌ <------------->

// document.getElementById('cheack').onclick=()=>{
//   let lepyear = document.getElementById('n1').value;
//
//
// }


// <----------------> Write a  program to read the age of a candidate and determine whether it is eligible for casting
// his/her own vote.   <--------------->
//
// document.getElementById('cheack').onclick=()=>{
//   let vote = 18;
//   let n1 = document.getElementById('n1').value;
//
//   if (n1>=vote){
//     document.getElementById('output').innerHTML=`You Are Eligible For  Your Vote.`
//   }
//   else {
//     document.getElementById('output').innerHTML=`You Are Not Eligible For Vot`
//   }
// }


// <----------------> Write a  program to accept the height of a person in centimeter and categorize the
// person according to their height. <-------------->

//
// document.getElementById('cheack').onclick=()=>{
//   let n1 = document.getElementById('n1').value;
//   if(n1<150)
//   {
//     document.getElementById('output').innerHTML=`Youer height is Dwarf`
//   }
//   else if (n1>=150 && n1<165){
//     document.getElementById('output').innerHTML=`Youer height is average `
//   }
//   else if (n1>=165 && n1<190){
//     document.getElementById('output').innerHTML=`Youer height is taller `
//   }
// }



// <-----------> Write a  program to find the largest of three numbers. <------------------>
//
// document.getElementById('cheack').onclick=()=>{
//   let n1=parseInt( document.getElementById('n1').value);
//   let n2= parseInt(document.getElementById('n2').value);
//   let n3= parseInt(document.getElementById('n3').value);
//
//   if(n1>n2 && n1>n3){
//     document.getElementById('output').innerHTML=`Number ${n1} is Largest`
//   }
//   else if (n2>n1 && n2>n3){
//     document.getElementById('output').innerHTML=`Number ${n2} is Largest`
//   }
//   else if (n3>n1 && n3>n2){
//     document.getElementById('output').innerHTML=`Number ${n3} is Largest`
//   }
// }


// <---------------> Write a  program to read temperature in centigrade and display
// a suitable message according to temperature state below ❌:  <------------->


// document.getElementById('cheack').onclick=()=>{
//   let n1 = parseInt(document.getElementById('n1').value);
//   if (n1<0){
//     document.getElementById('output').innerHTML=`${n1} Is Freezing weather`
//   }
//   else if (n1>10) {
//    document.getElementById('output').innerHTML=`${n1} is Very cold weather`
//    }
//   else if(n1>20 ){
//     document.getElementById('output').innerHTML=`${n1} is  cold weather`
//   }
//   else if(n1>30 ){
//     document.getElementById('output').innerHTML=`${n1} is normal weather`
//   }
//   else if(n1>40 ){
//     document.getElementById('output').innerHTML=`${n1} is  hot  weather`
//   }
//
//
//
// }


// <------------->Movie <--------------->
document.getElementById('addbtn').onclick=()=>{

  let moviename = document.getElementById('moviename').value;
  let year = document.getElementById('movieyear').value;
  // console.log( document.getElementById('moviegenre').value)
  let genre = document.getElementById('moviegenre').value;

  let tr= document.createElement('tr');
  let name=document.createElement('td');
  let myear= document.createElement('td');
  let Mgenre=document.createElement('td');
  let table = document.getElementById('output');

  name.innerHTML=moviename;
  myear.innerHTML=year;
  Mgenre.innerHTML=genre;

  tr.append(name);
  tr.append(myear);
  tr.append(Mgenre);

  table.append(tr);

}
