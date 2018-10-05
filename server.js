var db = require('db');

var User = require('./user');

function run() {
    var vasya = new User ("Вася");
    var petya = new User ("Петя");
    vasya.hello(petya);

    console.log('Run successfull!')
}

if (module.parent) {
    exports.run = run;
}else{
    run();
}