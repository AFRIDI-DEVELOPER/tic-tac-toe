let head = document.querySelector(".head");
let boxes = document.querySelectorAll(".box")
let turnO = true;

//it's winningpattern 
const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked")
        if (turnO === true) {
            box.innerText = "O"
            turnO = false
        }
        else {
            box.innerText = "X"
            turnO = true
        }
        box.disable = true;
        checkwinner();
    })
})

//disablePattern:----
const disableBoxes = () => {
    for (let box of boxes) {
        box.disable = true;
    }

}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disable = false;
        box.innerText = "";
    }
};
const checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
                pos1Val.style.color = "yellow";
            }

        }
    }
}


const resetGame = () => {
    turnO = true
    enableBoxes();
    msgContainer.classList.add("hide")
}
// heads style:---
head.style.textShadow = "0px 4px 4px  black"
head.style.padding = "10px 15px 10px 15px"
head.style.fontSize = "32px"
head.style.color = "red";