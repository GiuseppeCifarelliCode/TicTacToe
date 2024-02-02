
function createGame(){
    let c = 0
    for(let i = 0; i < 3; i++){
        let row = document.createElement("div")
        row.setAttribute("class","row justify-content-around m-4")
        row.innerHTML =`
        <div id=`+(c++)+` onclick="selectBox()" class="col text-bg-info mx-2" style="width:250px;height:250px"></div>
        <div id=`+(c++)+` onclick="selectBox()" class="col text-bg-info mx-2" style="width:250px;height:250px"></div>
        <div id=`+(c++)+` onclick="selectBox()" class="col text-bg-info mx-2" style="width:250px;height:250px"></div>`
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

function selectBox(){
    console.log(document.getElementById('3'));
}

createGame()


