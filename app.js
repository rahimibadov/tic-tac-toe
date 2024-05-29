const gameboard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startCells = [
        "", "", "", "", "", "", "", "", ""
]

let go = "circle"
infoDisplay.textContent = " Circle goes first"
infoDisplay.style.color="white"
infoDisplay.style.fontSize="30px"

function createBoard(){
    startCells.forEach((cell, index)=>{
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        cellElement.id = index
        cellElement.addEventListener("click", addGo)
        gameboard.append(cellElement)
    })
}

createBoard()

function addGo(e) {
   const goDisplay = document.createElement("div")
   goDisplay.classList.add(go)
   e.target.append(goDisplay) 
   go = go === "circle" ? "cross" : "circle"              //* if true returns cross otherwise returns circle
   infoDisplay.textContent = "it is now " + go + "'s go"
   e.target.removeEventListener("click", addGo)
   checkScore()
};

function checkScore(){
    const allSquares = document.querySelectorAll(".square")
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8], 
        [0,3,6], [1,4,7], [2,5,8], 
        [0,4,8], [2,4,6]
    ]

    console.log(allSquares[4])

    winningCombos.forEach(array =>{
        const circleWins = array.every(cell => 
            allSquares[cell].firstChild ?.classList.contains("circle"))

            if(circleWins){
                infoDisplay.textContent ="Circle wins"
                infoDisplay.style.fontSize="30px"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
    })

    winningCombos.forEach(array =>{
        const crossWins = array.every(cell => 
            allSquares[cell].firstChild ?.classList.contains("cross"))

            if(crossWins){
                infoDisplay.textContent ="Cross wins"
                infoDisplay.style.fontSize="30px"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
    })
}
