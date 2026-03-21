function reset(){
  score.wins = 0;score.losses = 0;score.ties=0
  // alert(`\"Reset Successfull\"\nWins:${score.wins} Losses:${score.losses} Draws:${score.ties}`)
   document.querySelector(".js-c").innerHTML = `Reset Successfull:-`
   document.querySelector(".js-s").innerHTML = `Wins:${score.wins} Losses:${score.losses} Draws:${score.ties}`
   document.querySelector(".js-y").innerHTML = ``
   document.querySelector(".js-r").innerHTML = ``
}
function ComputerChoice(){
  random  = Math.floor(Math.random()*(3))+1 ; console.log(random);
  if(random == 1){ comp_choice = `Rock`;}
  else if(random == 2){ comp_choice = `Paper`;}
  else{ comp_choice = `Scissors`;}
  return comp_choice;
  
}
let score = JSON.parse(localStorage.getItem("Score"));
if(!score){
  score = {
    wins:0,losses:0,ties:0
  }
}
function play(user_choice){
  let computer_choice = ComputerChoice();
  let result ="It's a Draw";
  if( computer_choice === user_choice){
      Alert()
  }
  else if(user_choice === "Rock"){
     if(computer_choice === "Paper"){
        result ="You Lost";
        Alert()
     }
     else{
        result ="You Won";
        Alert()
     }
  }
  else if(user_choice === "Paper"){
     if(computer_choice === "Scissors"){
        result ="You Lost";
        Alert()
     }
     else{
        result ="You Won";
         Alert()
     }
  }
  else if(user_choice === "Scissors"){
     if(computer_choice === "Rock"){
        result ="You Lost";
         Alert()
     }
     else{
        result ="You Won";
        Alert()
     }
  }
  function Alert(){
   if(result === "You Won"){
    score.wins+=1;
   }
   else if(result === "You Lost"){
    score.losses +=1
   }
   else{
    score.ties +=1
   }
    // alert(`You choose: ${user_choice}\nComputer choose: ${comp_choice}\nResult:${result}\nWins:${score.wins} Losses:${score.losses} Draws:${score.ties}`)
     document.querySelector(".js-y").innerHTML =`You choose: ${user_choice}`
     document.querySelector(".js-c").innerHTML =`Computer choose: ${comp_choice}`
     document.querySelector(".js-r").innerHTML =`Result:${result}`
     document.querySelector(".js-s").innerHTML =`Wins:${score.wins} Losses:${score.losses} Draws:${score.ties}`
  }
  localStorage.setItem("Score",JSON.stringify(score));
}