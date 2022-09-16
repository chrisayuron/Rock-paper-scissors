let times=+prompt("how many times would you like to play")
let pcpoints=0
let userpoints=0

for (let i = 0; i < times; i++) {
    let user = 0
    while (user <= 0 || user > 3 || user=='Nan') {
        user = +prompt("Choose a option \n 1. Piedra \n 2. Papel \n 3. Tijera")
    }

    user = choose(user)
    let pc = select()

    function select() {
        let value = Math.floor(Math.random() * 3 + 1)
        return choose(value)
    }

    function choose(value) {
        if (value == 1) return "Stone"
        else if (value == 2) return "Paper"
        else if (value == 3) return "Scissor"
    }

    function result(pc, user) {
        if (user == pc) {
            alert(`tie User: ${user} and PC: ${pc}`)
            
        }
        else if (user == "Stone" && pc == "Paper") {
            alert(`Winner PC: ${pc} and Loser User: ${user}`)
            pcpoints+=1
        }
        else if (user == "Stone" && pc == "Scissor") {
            alert(`Winner User: ${user} and Loser PC: ${pc}`)
            userpoints+=1
        }
        else if (user == "Paper" && pc == "Stone") {
            alert(`Winner User: ${user} and Loser PC: ${pc}`)
            userpoints+=1
        }
        else if (user == "Paper" && pc == "Scissor") {
            alert(`Winner PC: ${pc} and Loser User: ${user}`)
            pcpoints+=1
        }
        else if (user == "Scissor" && pc == "Stone") {
            alert(`Winner PC: ${pc} and Loser User: ${user}`)
            pcpoints+=1
        }
        else if (user == "Scissor" && pc == "Paper") {
            alert(`Winner User: ${user} and Loser PC: ${pc}`)
            userpoints+=1
        }
    }

    result(pc, user)

}