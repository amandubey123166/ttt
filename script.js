

document.getElementById("startbtn").addEventListener("click",()=>{
   document.getElementById("username1").classList.remove("displaya")
 document.getElementById("username1").classList.add("username")
   document.getElementById("startbtn").classList.add("displaya")
})


document.querySelector(".next").addEventListener("click", ()=>{
     document.getElementById("box1").classList.remove("displaya");


 document.getElementById("box1").classList.add("box");
   document.getElementById("username1").classList.remove("username");

   document.getElementById("username1").classList.add("displaya");

    document.getElementById("turn1").classList.remove("displaya");
 document.getElementById("turn1").classList.add("turn");
})



let boxes = document.querySelectorAll(".b");
let turnText = document.getElementById("turnText");
let resetBtn = document.getElementById("reset");

let firstUser = "";
let secondUser = "";

let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

// Next button click
document.querySelector(".next").addEventListener("click", ()=>{

  firstUser = document.getElementById("firstuser").value || "Player 1";
  secondUser = document.getElementById("seconduser").value || "Player 2";

  turnText.innerText = `${firstUser}'s Turn (X)`;
});

// Box click logic
boxes.forEach((box)=>{
  box.addEventListener("click", ()=>{

    if(box.innerText !== "" || !gameActive) return;

    box.innerText = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    if(gameActive){
      turnText.innerText = currentPlayer === "X" 
      ? `${firstUser}'s Turn (X)` 
      : `${secondUser}'s Turn (O)`;
    }

  });
});

// Winner Check
function checkWinner(){

  for(let pattern of winPatterns){

    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if(pos1 !== "" && pos1 === pos2 && pos2 === pos3){

      let winner = pos1 === "X" ? firstUser : secondUser;
      document.getElementById("winnerplayer").innerText = `🎉 ${winner} Wins!`;
    document.getElementById("box1").classList.remove("box");


 document.getElementById("box1").classList.add("displaya");

    document.getElementById("turn1").classList.remove("turn");
 document.getElementById("turn1").classList.add("displaya");
 document.getElementById("winner1").classList.remove("displaya");
 document.getElementById("winner1").classList.add("winner");
      gameActive = false;
      return;
    }
  }

  // Draw condition
  let draw = [...boxes].every(box => box.innerText !== "");
  if(draw){
    document.getElementById("winnerplayer").innerText = "It's a Draw!";
      document.getElementById("box1").classList.remove("box");


 document.getElementById("box1").classList.add("displaya");

    document.getElementById("turn1").classList.remove("turn");
 document.getElementById("turn1").classList.add("displaya");
 document.getElementById("winner1").classList.remove("displaya");
 document.getElementById("winner1").classList.add("winner");
    gameActive = false;
  }
}

// Reset button
resetBtn.addEventListener("click", ()=>{
  boxes.forEach(box => box.innerText = "");
  currentPlayer = "X";
  gameActive = true;
  turnText.innerText = `${firstUser}'s Turn (X)`;
});




document.getElementById("home").addEventListener("click",()=>{
   document.getElementById("winner1").classList.remove("winner");
 document.getElementById("winner1").classList.add("displaya");
   document.getElementById("startbtn").classList.remove("displaya");
     boxes.forEach(box => box.innerText = "");
      currentPlayer = "X";
       gameActive = true;
})



document.getElementById("restart").addEventListener("click",()=>{
   document.getElementById("winner1").classList.remove("winner");
 document.getElementById("winner1").classList.add("displaya");
    document.getElementById("box1").classList.remove("displaya");


 document.getElementById("box1").classList.add("box");
  //  document.getElementById("startbtn").classList.remove("displaya");
      document.getElementById("turn1").classList.remove("displaya");
 document.getElementById("turn1").classList.add("turn");
     boxes.forEach(box => box.innerText = "");
      currentPlayer = "X";
       gameActive = true;
})