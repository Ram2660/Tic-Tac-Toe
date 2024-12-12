let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winner = document.querySelector("#winner");
let newgame = document.querySelector("#newgame");
let container = document.querySelector(".mess");
let count = 0;
const newg = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
        turn0 = true;
        container.classList.add("hide")
        winner.innerText = "";


    }
}


newgame.addEventListener("click", newg);




const disableButton = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showwinner = (winne) => {
    winner.innerText = `Congratulations, Winner is ${winne}`;
    container.classList.remove("hide");
    disableButton();
}
const Winner = () => {


    for (let pattern of Winpatterns) {
        if (boxes[pattern[0]].innerText !== "" && boxes[pattern[1]].innerText !== "" && boxes[pattern[2]].innerText !== "") {
            if (boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText) {
                console.log("Winner is " + boxes[pattern[0]].innerText);

                showwinner(boxes[pattern[0]].innerText);
            }
        }
    }
};

const Winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let turn0 = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked")
        if (turn0) {
            box.innerHTML = "O"
            turn0 = false;

        }
        else {
            box.innerHTML = "X"
            turn0 = true;

        }
        box.disabled = true;
        Winner();

    })

})
reset.addEventListener("click", newg)




