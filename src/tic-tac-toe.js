class TicTacToe {

    currentPlayer = "x";
    winPlayer = null;
    counter = 0;
    gameField = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] == null) {
            this.gameField[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.currentPlayer = this.currentPlayer == "x" ? "o" : "x";
            this.counter++;
            return true;
        }
        return false

    }

    isFinished() {
        return this.getWinner() !== null || this.isDraw();
    }

    getWinner() {
        let field = this.gameField;

        field.forEach((el) => {
            if (el[0] === el[1] && el[0] === el[2] && el[0] !== null) {
                this.winPlayer = el[0];
                return el[0];
            }
        });

        for (let i = 0; i < 3; i++) {
            if (field[0][i] === field[1][i] && field[0][i] === field[2][i] && field[0][i] !== null) {
                this.winPlayer = field[0][i];
                return field[0][i];
            }
        }

        if (field[1][1] === field[0][0] && field[1][1] === field[2][2] && field[1][1] !== null) {
            this.winPlayer = field[1][1];
            return field[1][1];
        }

        if (field[1][1] === field[0][2] && field[1][1] === field[2][0] && field[1][1] !== null) {
            this.winPlayer = field[1][1];
            return field[1][1];
        }

        return this.winPlayer;
    }

    noMoreTurns() {
        return this.counter >= 9;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;