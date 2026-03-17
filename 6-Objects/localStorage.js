let  Count = JSON.parse(localStorage.getItem("count"))
if(!Count){ // will run if null,undefined or any falsy value
   Count = {
    count : 0
  }
}
function Show(){ alert(`Count = ${Count.count}`)}  
function Sum(num){
  if(num>0){
    Count.count+=num;
    console.log(`+${num} pressed -> count =${Count.count}`)
    alert(`Count = ${Count.count}`)
  }
  else{
    Count.count-=1;
    console.log(`-1 pressed -> count =${Count.count}`)
    alert(`Count = ${Count.count}`)
  }
  localStorage.setItem("count",JSON.stringify(Count)) // key , string value
}
function ClearStorage(){
  localStorage.removeItem("count")//remove from localStorage
  Count.count = 0 // and resets the value
}
//even though we refresh the page the value is stored
