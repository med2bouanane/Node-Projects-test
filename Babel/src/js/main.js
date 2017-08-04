// Hay que transpilar
import { User } from './user'

// Sin transpilar
//const User = require('./user')

let user = new User("Mohamed",36)
user.saludar()