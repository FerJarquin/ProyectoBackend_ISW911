const bcrypt = require ('bcrypt');

function encriptar(){
    bcrypt.hash("admin123", 10, function(err,hash){
        console.log(hash);
    });
}

encriptar(); 