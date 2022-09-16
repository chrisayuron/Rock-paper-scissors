let times=+prompt("how many times would you like to play")
let pcpoints=0
let userpoints=0

for (let i = 0; i < times; i++) {
    let user = 0
    while (user <= 0 || user > 3 || user=='Nan') {
        user = +prompt("Choose a option \n 1. Piedra \n 2. Papel \n 3. Tijera")
    }
}