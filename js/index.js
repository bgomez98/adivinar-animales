const promise = () => new Promise((resolve) => {
	let input = document.querySelector('input')
	input.addEventListener('change', e =>  resolve(e.target.value))
})

// const loopAsync = async _ => {
// 	for (let i = 0; i < 2 ; i++) {
// 		const text = await promise()
// 		console.log(text)
// 	}
// }

//loopAsync()



//console.log(res)
class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}   
}

const LoopTree = async () => {

	let root = new Node('pajaro')	

	
	let flag = true
	let text = ''

	while (flag) {
		
		let tree = root

		while (tree.left != null) {
			text = `El animal que estas pensando ${tree.value} ?`
			
			createDialog(text, 's/n') //crear nodos
			const res = await promise() //leer respuesta
			replaceDialog(text, res) //limpiar ndos

			if(res === 's'){
				console.log(res)
				tree = tree.left
			}
			else{
				console.log(res)
				tree = tree.right
			}
		}

		let animal = tree.value
		text = `Estas pensando en un ${tree.value} ?`
		
		createDialog(text, 's/n')
		const res = await promise()
		replaceDialog(text, res)

		if(res === 's'){
			console.log('gane')		
			flag = true
			console.log(root)
			return
		}

		text = (`Que animal era?`)
		createDialog(text, 'animal')
		let nAnimal = await promise()
		replaceDialog(text, nAnimal)

		text = `Qué pregunta distinguiría a un ${animal} de un ${nAnimal}?`
		createDialog(text, 'caracteristica')
		let info = await promise()
		replaceDialog(text, info)


		text = `Si el animal fuera un ${animal} cual seria la respuera?`
		createDialog(text, 's/n')
		const indicador = await promise()
		replaceDialog(text, indicador)
		
		tree.value = info

		if(indicador === 's'){
				tree.left = new Node(animal)
				tree.right = new Node(nAnimal)
		}else {
				tree.right = new Node(animal)
				tree.left = new Node(nAnimal)
		}
	}

	

}

const createDialog = (text, ph) => {
	const chat = document.querySelector('#chat')
	
	const dialog = document.createElement('div')
	const question = document.createElement('p')
	const answer = document.createElement('input')

	dialog.setAttribute('class', 'fields')
	
	question.innerHTML = text
	//answer.setAttribute('maxlength',)
	answer.setAttribute('placeholder', ph)
	answer.autofocus = true
	dialog.appendChild(question)
	dialog.appendChild(answer)
	chat.appendChild(dialog)
}

const replaceDialog = (text, res) => {
	const chat = document.querySelector('#chat')
	const app = document.querySelector('#app')
	
	const dialog = document.createElement('div')
	const question = document.createElement('p')
	const answer = document.createElement('p')

	chat.innerHTML = ''

	dialog.setAttribute('class', 'fields')
	question.innerHTML = text
	answer.setAttribute('class','res')
	answer.innerHTML = res
	dialog.appendChild(question)
	dialog.appendChild(answer)
	app.appendChild(dialog)
}

LoopTree()


// // let root = new Node('pajaro')

// // loopTree(root)

// // root.value = 'vuela'
// // root.left = new Node('pajaro')
// // root.right = new Node('perro')

//LoopTree(root)
//LoopTree(root)
