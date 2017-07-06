# DEBUG=rest-jwt:* npm start

# res.status(200).json({message:'El producto se ha recibido'}) 
	==> Content-Type: application/json
		body: {"name":"pepe","age":36}

# res.send(200,{message:'El producto se ha recibido'}) 
	==> Content-Type: application/x-www-form-urlencoded
		Body: name=pepe&age=36

# Modificar www
	==> 
	mongoose.connect('mongodb://localhost:27017/shop',(err,res)=>{
  if(err){
    return console.log(`Error al conectarse a la Base de datos: ${err}`)
  }
  console.log('Conexión a la base de datos establecida ...');
  
  server.listen(port);
})