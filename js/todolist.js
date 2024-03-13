
//To Add TableData
document.getElementById('addtdbtn').onclick=()=>{
      let addttd = document.getElementById('addtd').value;

      let addtdata= document.getElementById('tabeldata');
      let td = document.createElement('td');
      td.innerHTML=addtdata;
      addtdata.append(td);

      document.getElementById('addtd').value='';
}

//To Add TableHading

document.getElementById('addthbtn').onclick=()=>{
  let addth = document.getElementById('addth').value;

  let addthading= document.getElementById('tablehading');
  let thading = document.createElement('th');
  thading.innerHTML=addthading;
  addthading.append(thading);

  document.getElementById('addth').value='';
}
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
