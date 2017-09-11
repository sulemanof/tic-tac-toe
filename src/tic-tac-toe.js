class TicTacToe {
    constructor() {
      this.field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
      this.currentPlayer = 'x';
      this.counter = 0;
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      if (!this.field[rowIndex][columnIndex]) {
        this.field[rowIndex][columnIndex] = this.currentPlayer;
        this.counter++;
        if(this.currentPlayer === 'x') {
          this.currentPlayer = 'o';
        } else {
          this.currentPlayer = 'x';
        }
      }
    }

    isFinished() {
      var counter = 0;
      for (var i = 0; i <= 2; i++) {
        for(var j = 0; j <= 2; j++) {
          if (this.field[i][j] !== 0) counter++;
        }
      }
      if (counter === 9 || this.getWinner()) return true;
      return false;
    }

    getWinner() {
        for (var i = 0; i <= 2; i++) {
          var a = this.field[i];
          var b = this.field;
          if (a[0] !== 0 && a[0] === a[1] && a[0] === a[2]) return a[0];
          if (b[0][i] !== 0 && b[0][i] === b[1][i] && b[0][i] === b[2][i]) return b[0][i];
        }
        if (b[0][0] !== 0 && b[0][0] === b[1][1] && b[0][0] === b[2][2]) return b[0][0];
        if (b[2][0] !== 0 && b[2][0] === b[1][1] && b[2][0] === b[0][2]) return b[2][0];
        return null;
    }

    noMoreTurns() {
      if (this.counter === 9) return true;
      return false;
    }

    isDraw() {
      if (this.getWinner() || !this.isFinished()) return false;
      if (this.noMoreTurns()) return true;
      return false;
    }

    getFieldValue(rowIndex, colIndex) {
      if (this.field[rowIndex][colIndex]) {
        return this.field[rowIndex][colIndex];
      } else return null;
    }
}

module.exports = TicTacToe;
