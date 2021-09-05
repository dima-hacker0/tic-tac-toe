class TicTacToe {
    currentPlayer = 'x';
    gameField = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
    constructor() {
    }
    temp = 0;
    temp1 = 0;
    tempDraw = 0;
    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }
    nextTurn(rowIndex, columnIndex) {
        if(this.gameField[rowIndex][columnIndex] != null) return;
        this.gameField[rowIndex][columnIndex] = this.currentPlayer;
        if(this.currentPlayer == 'o') this.currentPlayer = 'x';
        else this.currentPlayer = 'o';
    }

    isFinished() {
        this.temp = 0;
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++){
                if(this.gameField[i][j] == null) this.temp++;
            }
        }
        if(this.gameField[0][0] == 'x' && this.gameField[1][0] == 'x' && this.gameField[2][0] == 'x') return true;
        else if(this.gameField[0][1] == 'x' && this.gameField[1][1] == 'x' && this.gameField[2][1] == 'x') return true;
        else if(this.gameField[0][2] == 'x' && this.gameField[1][2] == 'x' && this.gameField[2][2] == 'x') return true;
        else if(this.gameField[0][0] == 'x' && this.gameField[0][1] == 'x' && this.gameField[0][2] == 'x') return true;
        else if(this.gameField[1][0] == 'x' && this.gameField[1][1] == 'x' && this.gameField[1][2] == 'x') return true;
        else if(this.gameField[2][0] == 'x' && this.gameField[2][1] == 'x' && this.gameField[2][2] == 'x') return true;
        else if(this.gameField[0][0] == 'x' && this.gameField[1][1] == 'x' && this.gameField[2][2] == 'x') return true;
        else if(this.gameField[0][2] == 'x' && this.gameField[1][1] == 'x' && this.gameField[2][0] == 'x') return true;
        else if(this.gameField[0][0] == 'o' && this.gameField[1][0] == 'o' && this.gameField[2][0] == 'o') return true;
        else if(this.gameField[0][1] == 'o' && this.gameField[1][1] == 'o' && this.gameField[2][1] == 'o') return true;
        else if(this.gameField[0][2] == 'o' && this.gameField[1][2] == 'o' && this.gameField[2][2] == 'o') return true;
        else if(this.gameField[0][0] == 'o' && this.gameField[0][1] == 'o' && this.gameField[0][2] == 'o') return true;
        else if(this.gameField[1][0] == 'o' && this.gameField[1][1] == 'o' && this.gameField[1][2] == 'o') return true;
        else if(this.gameField[2][0] == 'o' && this.gameField[2][1] == 'o' && this.gameField[2][2] == 'o') return true;
        else if(this.gameField[0][0] == 'o' && this.gameField[1][1] == 'o' && this.gameField[2][2] == 'o') return true;
        else if(this.gameField[0][2] == 'o' && this.gameField[1][1] == 'o' && this.gameField[2][0] == 'o') return true;
        else if(this.temp == 0) return true;
        else return false;
    }

    getWinner() {
        if(this.gameField[0][0] == 'x' && this.gameField[1][0] == 'x' && this.gameField[2][0] == 'x') return 'x';
        else if(this.gameField[0][1] == 'x' && this.gameField[1][1] == 'x' && this.gameField[2][1] == 'x') return 'x';
        else if(this.gameField[0][2] == 'x' && this.gameField[1][2] == 'x' && this.gameField[2][2] == 'x') return 'x';
        else if(this.gameField[0][0] == 'x' && this.gameField[0][1] == 'x' && this.gameField[0][2] == 'x') return 'x';
        else if(this.gameField[1][0] == 'x' && this.gameField[1][1] == 'x' && this.gameField[1][2] == 'x') return 'x';
        else if(this.gameField[2][0] == 'x' && this.gameField[2][1] == 'x' && this.gameField[2][2] == 'x') return 'x';
        else if(this.gameField[0][0] == 'x' && this.gameField[1][1] == 'x' && this.gameField[2][2] == 'x') return 'x';
        else if(this.gameField[0][2] == 'x' && this.gameField[1][1] == 'x' && this.gameField[2][0] == 'x') return 'x';
        else if(this.gameField[0][0] == 'o' && this.gameField[1][0] == 'o' && this.gameField[2][0] == 'o') return 'o';
        else if(this.gameField[0][1] == 'o' && this.gameField[1][1] == 'o' && this.gameField[2][1] == 'o') return 'o';
        else if(this.gameField[0][2] == 'o' && this.gameField[1][2] == 'o' && this.gameField[2][2] == 'o') return 'o';
        else if(this.gameField[0][0] == 'o' && this.gameField[0][1] == 'o' && this.gameField[0][2] == 'o') return 'o';
        else if(this.gameField[1][0] == 'o' && this.gameField[1][1] == 'o' && this.gameField[1][2] == 'o') return 'o';
        else if(this.gameField[2][0] == 'o' && this.gameField[2][1] == 'o' && this.gameField[2][2] == 'o') return 'o';
        else if(this.gameField[0][0] == 'o' && this.gameField[1][1] == 'o' && this.gameField[2][2] == 'o') return 'o';
        else if(this.gameField[0][2] == 'o' && this.gameField[1][1] == 'o' && this.gameField[2][0] == 'o') return 'o';
        else return null;
        
    }

    noMoreTurns() {
        this.temp = 0;
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++){
                if(this.gameField[i][j] == null) this.temp++;
            }
        }
        if(this.temp == 0) return true;
        else return false;
    }

    isDraw() {
        this.temp1 = 0;
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++){
                if(this.gameField[i][j] == null) this.temp1++;
            }
        }
        if(this.gameField[0][0] == 'x' && this.gameField[1][0] == 'x' && this.gameField[2][0] == 'x') this.tempDraw++;
        else if(this.gameField[0][1] == 'x' && this.gameField[1][1] == 'x' && this.gameField[2][1] == 'x') this.tempDraw++;
        else if(this.gameField[0][2] == 'x' && this.gameField[1][2] == 'x' && this.gameField[2][2] == 'x') this.tempDraw++;
        else if(this.gameField[0][0] == 'x' && this.gameField[0][1] == 'x' && this.gameField[0][2] == 'x') this.tempDraw++;
        else if(this.gameField[1][0] == 'x' && this.gameField[1][1] == 'x' && this.gameField[1][2] == 'x') this.tempDraw++;
        else if(this.gameField[2][0] == 'x' && this.gameField[2][1] == 'x' && this.gameField[2][2] == 'x') this.tempDraw++;
        else if(this.gameField[0][0] == 'x' && this.gameField[1][1] == 'x' && this.gameField[2][2] == 'x') this.tempDraw++;
        else if(this.gameField[0][2] == 'x' && this.gameField[1][1] == 'x' && this.gameField[2][0] == 'x') this.tempDraw++;
        else if(this.gameField[0][0] == 'o' && this.gameField[1][0] == 'o' && this.gameField[2][0] == 'o') this.tempDraw++;
        else if(this.gameField[0][1] == 'o' && this.gameField[1][1] == 'o' && this.gameField[2][1] == 'o') this.tempDraw++;
        else if(this.gameField[0][2] == 'o' && this.gameField[1][2] == 'o' && this.gameField[2][2] == 'o') this.tempDraw++;
        else if(this.gameField[0][0] == 'o' && this.gameField[0][1] == 'o' && this.gameField[0][2] == 'o') this.tempDraw++;
        else if(this.gameField[1][0] == 'o' && this.gameField[1][1] == 'o' && this.gameField[1][2] == 'o') this.tempDraw++;
        else if(this.gameField[2][0] == 'o' && this.gameField[2][1] == 'o' && this.gameField[2][2] == 'o') this.tempDraw++;
        else if(this.gameField[0][0] == 'o' && this.gameField[1][1] == 'o' && this.gameField[2][2] == 'o') this.tempDraw++;
        else if(this.gameField[0][2] == 'o' && this.gameField[1][1] == 'o' && this.gameField[2][0] == 'o') this.tempDraw++;
        
        if(this.tempDraw == 0 && this.temp1 == 0) return true;
        else  return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}
module.exports = TicTacToe;