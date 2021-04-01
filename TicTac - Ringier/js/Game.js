var arr;
export default class Game {
    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }


    nextTurn() {
        this.turn = this.turn === "X" ? "O" : "X";
    }

    makeMove(i) {

        if (!this.isInProgress()) {
            return;
        }

        if (this.board[i]) {
            return;
        }

        this.board[i] = this.turn;
       
        if (!this.findWinningCombination()) 
        {
            this.nextTurn();
        }
    }

    findWinningCombination() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;

            if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                return combination;
            }
        }

        return null;
    }
    
    pcMove()
    {
        var i= 0;
            do
            {
                i = Math.floor(Math.random() * 9);
            } while (this.board[i] != null);
                
                this.board[i] = this.turn;
            
            if (!this.findWinningCombination()) 
            {
                this.nextTurn();
            }
    }

    isInProgress() 
    {
        return !this.findWinningCombination() && this.board.includes(null);
    }

    getBoardValues()
    {
        console.log(this.board)
    }
}


