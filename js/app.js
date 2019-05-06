let hangMan1
const contentEl = document.querySelector('#hangman-content')
const guessesEl = document.querySelector('#guesses-left')

window.addEventListener('keypress', e => {
    const guess = String.fromCharCode(e.charCode)
    hangMan1.makeGuess(guess)
    render()
})

const startGame = async () => {
    const puzzle = await getPuzzle()
    hangMan1 = new HangMan(puzzle, 5)
    render()
}

const render = () => {
    contentEl.innerHTML = ''
    guessesEl.textContent = hangMan1.statusCheck

    hangMan1.puzzle.split('').forEach(letter => {
        contentEl.innerHTML += `<span>${letter}</span>`
    })
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

getPuzzle().then(puzzle => {
    console.log(puzzle)
}).catch(error => {
    console.log(`Error: ${error}`)
})