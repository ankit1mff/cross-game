let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbutton");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO= true;

const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=> {
    box.addEventListener("click", ()=>{
    if(turnO){
        box.innerText = "O"
        turnO  = false;

    }
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true

    chekWinner();
});
});
    const disableBoxes= () =>{
        for(let box of boxes){
            box.disabled = true;
        }
    }
     const enableBoxes= () =>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText ="";
        }
    }
const showWinner = (winner) =>{
    msg.innerText =`congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const chekWinner = () => {
    for (let pattern of winpattern){
        let poss1val = boxes[pattern[0]].innerText;
        let poss2val = boxes[pattern[1]].innerText;
        let poss3val = boxes[pattern[2]].innerText;

        if(poss1val != "" && poss2val != "" && poss3val != ""){
            if(poss1val === poss2val && poss2val === poss3val){
                showWinner(poss1val);
            }
        }
    }
}
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
resetbtn.addEventListener("click",resetGame);
