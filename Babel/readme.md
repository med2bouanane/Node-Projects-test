# Crear proyecto
npm init -y

# Instalar Babel 
sudo npm i -D babel-core babel-cli

# Instalar el preset ES6 => ES5
npm i -D babel-preset-es2015

# busca en src/ código ES6 => lo transpila a ES5 y lo genera en dist/ 
"scripts": {"build": "babel src -d dist"}

# .babelcr => aquí indicamos todos los presets a activar, ( sino babel no reconocerá los presets que instalamos) 
{
  "presets": ["babel-preset-es2015"]
}

# ejecutar 
npm run build
