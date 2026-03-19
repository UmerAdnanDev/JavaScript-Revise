let num = 0;
let n = document.querySelector(".num")
function Zero(number){
  if(number == +1){ num+=1
     n.innerHTML = num; }
  else if(number == -1){num-=1
     n.innerHTML = num;
     }
  else{ num = 0
   n.innerHTML = num;}
  if(num>0){
    n.classList.remove("grey")
    n.classList.add("green")
    n.classList.remove("red")
  }
  else if(num<0){
    n.classList.remove("grey")
    n.classList.remove("green")
    n.classList.add("red")
  }
  else if(num === 0){ n.classList.add("grey")}

}
