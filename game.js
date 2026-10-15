let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbutton");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winpattern = [
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8]
];

boxes.forEach((box) => {
box.addEventListener("click", () => {
if (box.innerText !== "") return;

    if (turnO) {
        box.innerText = "O";
        turnO = false;
    } else {
        box.innerText = "X";
        turnO = true;
    }

    box.disabled = true;
    count++;

    checkWinner();
});

});

const disableBoxes = () => {
for (let box of boxes) {
box.disabled = true;
}
};


const enableBoxes = () => {
for (let box of boxes) {
box.disabled = false;
box.innerText = "";
}
};

const showWinner = (winner) => {
msg.innerText = `Congratulations! Winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableBoxes();
};

const showDraw = () => {
msg.innerText = "Match Draw!";
msgcontainer.classList.remove("hide");
disableBoxes();
};

const checkWinner = () => {
for (let pattern of winpattern) {
let val1 = boxes[pattern[0]].innerText;
let val2 = boxes[pattern[1]].innerText;
let val3 = boxes[pattern[2]].innerText;

    if (val1 !== "" && val1 === val2 && val2 === val3) {
        showWinner(val1);
        return;
    }
}
if (count === 9) {
    showDraw();
} };

const resetGame = () => {
turnO = true;
count = 0;
enableBoxes();
msgcontainer.classList.add("hide");
};

resetbtn.addEventListener("click", resetGame);