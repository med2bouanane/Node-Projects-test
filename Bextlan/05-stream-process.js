'use strict'

var stdin = process.stdin,
	stdout = process.stdout,
	person = {name:null,age:0}


 function saveAge(age) {
	
	person.age = age

	let question 

	question = person.name + ' veo que eres '

	if(person.age >= 18){
		question += ' Mayor de edad'
	}else{
		question += ' Menore de edad'
	}
	stdout.write(question + '\n')
	process.exit()
}

 function saveName(name) {
	person.name = name

	let question = 'Hola '+person.name + ' ¿ Cuantos años tienes?'

	quiz(question,saveAge)
	
}


 function quiz(question,callback) {
	stdin.resume() // leer desde la entrada estandar
	stdout.write(question + ': ') // escribir en la salida estandar
	stdin.once('data',(res)=>{
		callback(res.toString().trim())
	})
}


stdin.setEncoding('utf8') // Codificar a UTF8 los datos de entrada estandar
quiz('¿Cómo te llamas?',saveName)