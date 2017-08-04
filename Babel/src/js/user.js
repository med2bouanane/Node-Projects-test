
let User =class User
{
	constructor(name,age)
	{
		this.name = name
		this.age = age
	}
	saludar(){
        console.log(`Hola ${this.name}`)
    }
}

// Hay que transpilar (Babel)
export { User }
//export default { User }


// Sin transpilar
//module.exports = User


