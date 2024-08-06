let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choices")
let result = document.querySelector(".msg-play")
let userscore = document.querySelector(".user-score")
let compscore = document.querySelector(".comp-score")


const compChoice = ()=>{
    let moves = ["rock", "paper", "scissors"]
let idx = Math.floor(Math.random() * 3)
return moves[idx]

}

let showWinner = (userwin,userChoice,compmove) =>{
    if (userwin) {
        result.innerText = `You win! your ${userChoice} beat ${compmove}`
        
        userscore.innerText = parseInt(userscore.innerText) +1
        
    }else {
        result.innerText = `You lose, ${compmove} beat your ${userChoice}`
        compscore.innerText = parseInt(compscore.innerText) +1
    }
}
const drawGame = () =>{
    result.innerText = "Draw"
}
const playgame = (userChoice)=>{
    
    let compmove = compChoice()
    
    if (userChoice === compmove) {
        drawGame()}
        else{
        userwin = true;
            if (userChoice === "rock") {
                userwin = compmove === "paper" ? false : true;
                
            }
            else if (userChoice === "paper") {
                userwin = compmove === "scissors" ? false : true;
                
            }
            else{
                userwin = compmove === "rock" ? false: true;
            }
            showWinner(userwin,userChoice,compmove)
            
        }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id")
        
        playgame(userChoice)
        })
    
})







