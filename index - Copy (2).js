
class game {	
	
	constructor() {
		this.board=[[],[],[]]
		for (var i=0;i<3;++i) {
			for (var ii=0;ii<3;++ii) {
				this.board[i][ii]='-';
			}
		}
	}

	play(piece, x,y) {
		this.board[x][y]=piece
		this.print()
	}

	print() {
		for (var i=0; i<3; ++i)
			console.log(this.board[i])
		console.log()
	}

}

mygame = new game()
mygame.print()
mygame.play('0',0,0)
mygame.play('1',1,0)
mygame.play('0',0,1)
mygame.play('1',2,0)
