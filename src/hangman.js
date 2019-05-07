class HangMan {
    constructor(word, numOfGuesses) {
        this.word = [...word.toLowerCase()]
        this.guessedLetters = []
        this.numOfGuesses = numOfGuesses
        this.gameStatus = 'Playing'
    }

    changeGameStatus() {
        const finished = this.word.every(letter => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.numOfGuesses <= 0) {
            this.gameStatus = 'Failed'
        } else if (finished) {
            this.gameStatus = 'Finished'
        } else {
            this.gameStatus = 'Playing'
        }
    }

    get puzzle() {
        let puzzle = ''

        this.word.forEach(w => {
            if (this.guessedLetters.includes(w) || w === ' ') {
                puzzle += w
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }

    get statusCheck() {
        if (this.gameStatus === 'Failed') {
            return `Nice try! the word was ${this.word.join('')}.`
        } else if (this.gameStatus === 'Playing') {
            return `Guesses left: ${this.numOfGuesses}.`
        } else {
            return `Great work! You guessed the word.`
        }
    }

    makeGuess(guessedLetter) {
        guessedLetter = guessedLetter.toLowerCase()

        if (!this.word.includes(guessedLetter) && !this.guessedLetters.includes(guessedLetter)) {
            this.numOfGuesses--
        }

        if (!this.guessedLetters.includes(guessedLetter)) {
            this.guessedLetters.push(guessedLetter)
        }

        this.changeGameStatus()

        return `${this.puzzle}`
    }
}

export default HangMan