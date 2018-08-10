
class game {
	constructor() {
		this.board=[[],[],[]]
		for (var i=0; i<3; ++i) {
			for (var ii=0; ii<3; ++ii) {
				this.board[i][ii]='-'
			}
		}
	}
	
	play(piece, x, y) {
		if (x<0 || x>2 || y<0 || y>2) {
			console.log('Coordinate out of bounds: %i, %i', x, y)
			return;
		}
		this.board[x][y] = piece;
		this.print();
	}
	
	print() {
		for (var i=0; i<3; ++i) {
			console.log(this.board[i])
		}
		console.log();
	}
	
}


game = new game()
game.print()
game.play('0',0,0)
game.play('1',3,0)
game.play('0',2,1)


