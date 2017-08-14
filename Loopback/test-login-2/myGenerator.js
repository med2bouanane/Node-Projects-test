const fs = require('fs'),
    colors = require('colors/safe');

const root = `${__dirname}/common/app/${process.argv[2]}`


if(!fs.existsSync(`${root}`)){
    fs.mkdirSync(`${root}`)
    fs.mkdirSync(`${root}/controller`)
    fs.mkdirSync(`${root}/model`)
    fs.mkdirSync(`${root}/rest`)
    fs.mkdirSync(`${root}/service`)
    fs.mkdirSync(`${root}/test`)

    console.log(colors.green(`created: 
    common/app/${process.argv[2]}
    common/app/${process.argv[2]}/controller
    common/app/${process.argv[2]}/model
    common/app/${process.argv[2]}/rest
    common/app/${process.argv[2]}/service
    common/app/${process.argv[2]}/test`))
}
else
    console.log(colors.red(`common/app/${process.argv[2]} already exists`))


// Exec => node myGenerator.js product