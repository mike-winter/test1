class node {
	constructor(val) {
		this.val=val
	}

	tostring () {
		return this.val
	}
	
}

function isunival(tree, value) {
	
	if (!tree || !tree.val)
		return false
	
	if (tree.val === value)
		return (isunival(tree.right, value) && isunival(tree.left, value))
	
	return false
}

function countunival(tree) {
		result=0
		
		if (tree && tree.val) {
			if (!tree.right && !tree.left)
				result += 1
			
			if (isunival(tree.right, tree.val))
				result += countunival(tree.right) + 1
			else
				result += countunival(tree.right)
			
			if (isunival(tree.left, tree.val))
				result += countunival(tree.left) + 1
			else
				result += countunival(tree.left)
		}
		
		console.log(tree)
		console.log(result)
		console.log()
		
		return result
	}

myroot = new node('a')
myroot.left = new node('a')
myroot.right = new node('a')
myroot.left.left = new node('b')

console.log(myroot.tostring())
console.log(countunival(myroot))
