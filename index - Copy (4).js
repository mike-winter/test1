
class play {
	constructor(piece, x, y){
		if (x<0 || x>2) {
			throw (`Invalid x coordinate: ${x}`)
		}
		if (y<0 || y>2) {
			throw (`Invalid y coordinate: ${y}`)
		}

		this.piece = piece;
		this.x = x;
		this.y = y;
	}
}


class game {
	
	constructor(){
		this.board = [[3],[3],[3]];
		for (let i=0; i<3; ++i) {
			for (let ii=0; ii<3; ++ii) {
				this.board[i][ii]='-';
			}
		}
		this.print();
	}
	
	play(play){
		this.board[play.x][play.y]=play.piece;
		this.print();
	}
	
	print(){
		for (let i=0; i<3; ++i) {
			console.log(this.board[i].join("|"));
		}
		console.log()
	}
	
}

game = new game()
game.play(new play('0', 0, 0))
game.play(new play('1', 1, 1))
game.play(new play('0', 2, 2))
game.play(new play('0', 0, 2))


