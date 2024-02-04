let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function createGame(){
    let c = 0
    for(let i = 0; i < 3; i++){
        let row = document.createElement("div")
        row.setAttribute("class","row justify-content-around m-4")
        row.innerHTML =`
        <div id=`+(c++)+` onclick="selectBox(this.id)" class="col text-bg-info mx-2 box" style="width:250px;height:250px"></div>
        <div id=`+(c++)+` onclick="selectBox(this.id)" class="col text-bg-info mx-2 box" style="width:250px;height:250px"></div>
        <div id=`+(c++)+` onclick="selectBox(this.id)" class="col text-bg-info mx-2 box" style="width:250px;height:250px"></div>`
        document.getElementById("game").appendChild(row) 
    }

    createPlayersGrid()
}

function takePlayersName(){
    const player1 = document.getElementById("player1").value
    const player2 = document.getElementById("player2").value
    sessionStorage.setItem('player1',player1)
    sessionStorage.setItem('player2',player2)
    window.location.href = 'game.html'
}

function createPlayersGrid(){
    const player1 = sessionStorage.getItem('player1')
    const player2 = sessionStorage.getItem('player2')
    let divPlayer1 = document.createElement("div")
    divPlayer1.setAttribute("class","d-flex align-items-center")
    divPlayer1.innerHTML = `
    <img src='assets/x.png' style='width:30px;height:30px'>
    <h3 class='mx-2'>`+player1+`</h3>
    `
    document.getElementById("playersGrid").appendChild(divPlayer1)   
    
    let divPlayer2 = document.createElement("div")
    divPlayer2.setAttribute("class","d-flex align-items-center")
    divPlayer2.innerHTML = `
    <img src='assets/circle.jpg' style='width:30px;height:30px'>
    <h3 class='mx-2'>`+player2+`</h3>
    `
    document.getElementById("playersGrid").appendChild(divPlayer2)
    
    document.getElementById("round").innerText = player1 + "'s round"
}

function selectBox(boxId){
    let clickedBox = document.getElementById(boxId)

    //Coordinate row e col
    const row = Math.floor(boxId / 3);
    const col = boxId % 3;

    let playerRound = document.getElementById("round")
    const player1 = sessionStorage.getItem('player1')
    const player2 = sessionStorage.getItem('player2')

    if (gameBoard[row][col] === '') {

        if (playerRound.innerText === player1 + "'s round")  {
            gameBoard[row][col] = 'X';
            clickedBox.style.backgroundImage = 'url(assets/x.png)'
            clickedBox.style.backgroundSize = "contain";
            clickedBox.style.backgroundPosition = "center";
            clickedBox.style.backgroundRepeat = "no-repeat";
            document.getElementById("round").innerText = player2 + "'s round"  
        } else {
            gameBoard[row][col] = 'O';
            clickedBox.style.backgroundImage = 'url(assets/circle.jpg)'  
            clickedBox.style.backgroundSize = "contain";
            clickedBox.style.backgroundPosition = "center";
            clickedBox.style.backgroundRepeat = "no-repeat";
            document.getElementById("round").innerText = player1 + "'s round"
        }

        // Controlla se c'è una vittoria
        if (checkForWin()) {
            alert('Hai vinto!');
            // Puoi fare altre azioni qui, come ricominciare il gioco
        }

        // Aggiungi la tua logica aggiuntiva per il gioco
    }
    checkForWin()
}

function checkForWin() {
    // Controlla righe e colonne
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2] && gameBoard[i][0] !== '') {
            return true; // Vittoria in una riga
        }
        if (gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i] && gameBoard[0][i] !== '') {
            return true; // Vittoria in una colonna
        }
    }

    // Controlla diagonali
    if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] && gameBoard[0][0] !== '') {
        return true; // Vittoria sulla diagonale principale
    }
    if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0] && gameBoard[0][2] !== '') {
        return true; // Vittoria sulla diagonale secondaria
    }

    return false; // Nessuna vittoria
}

createGame()


